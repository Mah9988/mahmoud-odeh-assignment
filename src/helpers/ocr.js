
import axios from "axios";

export const extractData = async (image) => {
  const apiKey = "AIzaSyB5Ru1_z94SrWgxAnjkCsIcXU4jicZYugM";
  const visionAPIUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
  var text = null
  const request = {
    requests: [
      {
        image: {
          content: image.split(",")[1],
        },
        features: [
          {
            type: "TEXT_DETECTION",
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(visionAPIUrl, request);
    console.log(response.data.responses[0]);
    text = response.data.responses[0].textAnnotations[0].description;
  } catch (error) {
    console.error("Error scanning image:", error);
  }

  return text
};

