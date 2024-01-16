import React, { useState } from "react";
import p1 from "../images/1.png";
import p2 from "../images/2.png";
import p3 from "../images/3.png";
import p4 from "../images/4.png";
import p5 from "../images/5.png";
import p6 from "../images/6.png";
import p7 from "../images/7.png";
import p8 from "../images/8.png";
import p9 from "../images/9.png";
import p10 from "../images/10.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Photo = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const Avatar = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const handleGoBack = () => {
    navigate(-1)
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, Photo.length - 5));
  };

  return (
    <div className="avatar_container">
      <button className="go-back-button" onClick={handleGoBack}><span><FaArrowLeft /></span>Go Back</button>
      <div className="header_text1">
        Step <span className="rounded-circle">2</span>
      </div>

      <div className="avatar_text">Please Select Your Avatar</div>
      {/* <div className="carousel">
        {Photo.slice(startIndex, startIndex + 5).map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Avatar ${index + 1}`}
            className={index === 2 ? "enlarged" : ""}
          />
        ))}
      </div> */}
      <div className="carousel-controls">
        <button
          className="carousel-button carousel-button-left"
          onClick={handlePrevClick}
        >
          <div className="circle">
            <FaArrowLeft />
          </div>
        </button>
        <button
          className="carousel-button carousel-button-right"
          onClick={handleNextClick}
        >
          <div className="circle">
            <FaArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Avatar;
