import React, { useEffect } from "react";
import "./Banner.scss";

const Banner = () => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.className === "scan_link") {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="ocr-technology">
      <div className="container">
        <div className="ocr-text">
          <h3>ABGA Software and Systems OCR Technology</h3>
          <h1>Lorem Ipsum is simply dummy text</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
          <div className="ocr-buttons">
            <a href="#scan_div" className="scan_link">
              Start Scan
            </a>
          </div>
        </div>
        <div className="ocr-image">
          <video autoPlay muted loop>
            <source src={"/assets/videos/Ocr.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Banner;
