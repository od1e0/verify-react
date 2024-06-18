import type React from "react";
import "./Spinner.css";
import staticImage from "../../images/spinner_img1.png"; 
import dynamicImage from "../../images/spinner_img2.png"; 

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <img src={staticImage} alt="Static part" className="static-image" />
        <img src={dynamicImage} alt="Dynamic part" className="dynamic-image" />
      </div>
    </div>
  );
};

export default Spinner;
