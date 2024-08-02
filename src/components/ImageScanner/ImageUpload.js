import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import './ImageScanner.scss'

const ImageUpload = ({ onImageUpload, image, setImage, scanning }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      {image ? (
        <div className="img-scanner-container">
          <img src={image} className="img-scanner" alt="Uploaded ID Card" />

          {scanning ? (
            <>
              <div className="overlay" />
              <div className="laser" id="laser" />
            </>
          ) : (
            <img
              src="/assets/images/delete.png"
              alt="trash"
              className="trash-icon"
              onClick={() => setImage(null)}
            />
          )}
        </div>
      ) : (
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Select or drop your ID card</p>
        </div>
      )}
    </>
  );
};

export default ImageUpload;
