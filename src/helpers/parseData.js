import { fields } from './fields';

const parseData = (text) => {
  const lines = text.split('\n');
  const data = {};

  lines.forEach((line, index) => {
    const lowerCaseLine = line.toLowerCase();
    for (const [key, labels] of Object.entries(fields)) {
      labels.forEach(label => {
        const lowerCaseLabel = label.toLowerCase();
        if (lowerCaseLine.includes(lowerCaseLabel)) {
          let value = line.replace(new RegExp(label, 'i'), '').trim();

          // If value is empty, check the next line
          if (!value && lines[index + 1]) {
            const nextLine = lines[index + 1].trim();
            // Ensure the next line isn't another label
            const isNextLineLabel = Object.values(fields).some(labelGroup =>
              labelGroup.some(lbl => nextLine.toLowerCase().includes(lbl.toLowerCase()))
            );

            if (!isNextLineLabel) {
              value = nextLine;
            }
          }          
          if (value) {
            data[key] = value;
          }
        }
      });
    }
  });

  return data;
};

export default parseData;