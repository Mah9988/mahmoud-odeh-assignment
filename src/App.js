import React, { useState } from "react";
import ImageUpload from "./components/ImageScanner/ImageUpload";
import "./App.scss";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import { extractData } from "./helpers/ocr";
import parseData from "./helpers/parseData";
import DataTableComponent from "./components/DataTable/DataTableComponent";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import VerifyID from "./components/VerifyID/VerifyID";
const App = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});

  const [scanning, setScanning] = useState(false);

  const handlerReset = () => {
    setData({});
    setImage(null);
    setScanning(false);
  };

  const handleImageUpload = async (img) => {
    setImage(img);
    setTimeout(() => {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
      });
  }, 100)
  };
  const handleExtract = () => {
    setScanning(true);
    setTimeout(async () => {
      const extractedText = await extractData(image);
      const parsedData = parseData(extractedText);
      console.log("parsedData => ", parsedData);
      setData(parsedData);
      setScanning(false);
    }, 4000);
  };
  return (
    <div className="App">
      <Header />
      <Banner />
      <VerifyID
        onImageUpload={handleImageUpload}
        image={image}
        setImage={setImage}
        scanning={scanning}
        handleExtract={handleExtract}
        handlerReset={handlerReset}
        data={data}
      />
    </div>
  );
};

export default App;
