import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import frame from "../images/macbbok.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";



const Photo = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  
  const [imageSrc, setImageSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); //base64 value
    setImageSrc(imageSrc);
    
  }, [webcamRef]);

  const retake = React.useCallback(() => {
    setImageSrc(null);
    
  }, []);

  const width = window.innerWidth;

  const videoConstraints = {
    width: width <= 667 ? 160 : width < 950 ? 360 : 770,
    height: width <= 667 ? 185 : width < 950 ? 240 : 550,
    facingMode: "user",
  };



  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div className="photo_container">
<button className="go-back-button" onClick={handleGoBack}><span><FaArrowLeft /></span>Go Back</button>
      <div className="header_text">
      Step <span className="rounded-circle">1</span>
      </div>

      <div className="frame_container">
        <img className="frame" src={frame} style={{ pointerEvents: "none" }} />
        <div className="camera_image" style={{ pointerEvents: "none" }}>
          {imageSrc ? (
            <img src={imageSrc}  />
          ) : (
            <div className="frame">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
                videoConstraints={videoConstraints}
                
              />
            </div>
          )}
        </div>
      </div>

      <div className="photo_buttons">
        <button className="button-1" onClick={capture}>Capture</button>
        <button className="button-2" onClick={retake}>Retake</button>
        <Link to="/avatar">
        <button className="button-3">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Photo;
