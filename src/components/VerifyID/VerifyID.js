import React from "react";
import "./VerifyID.scss";
import ImageUpload from "../ImageScanner/ImageUpload";
import Button from "../Button/Button";
import Card from "../Card/Card";
import DataTableComponent from "../DataTable/DataTableComponent";

const VerifyID = ({
  onImageUpload,
  image,
  setImage,
  scanning,
  handleExtract,
  data,
  handlerReset
}) => {
  return (
    <div className="verify-id-container" id="scan_div">
      <div className="container">
        <div className="text-content">
          <h1>
            Verify Any ID with{" "}
            <span className="highlight">ABGA Software and Systems</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>

          {Object.keys(data).length > 0 ? (
            <Card>
              <DataTableComponent data={data} handlerReset={handlerReset} />
            </Card>
          ) : (
            <>
              <ImageUpload
                onImageUpload={onImageUpload}
                image={image}
                setImage={setImage}
                scanning={scanning}
              />
              {image && <Button title={"Start Scan"} handlerClick={handleExtract} />}
            </>
          )}
        </div>
        <div className="image-content">
          {/* <video autoPlay muted loop>
            <source src={"/assets/videos/VerifyID.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img src="/assets/images/documents.webp" alt="documents" />
        </div>
      </div>
    </div>
  );
};

export default VerifyID;
