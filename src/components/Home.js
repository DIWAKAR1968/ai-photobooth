import React from "react";
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
import { Link } from "react-router-dom";


const Photo = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const pairs = Photo.reduce((result, value, index, array) => {
  if (index % 2 === 0) result.push(array.slice(index, index + 2));
  return result;
}, []);

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        Click the Start button below To build the Avatar
      </div>

      <div className="images">
        {pairs.map((pair, index) => (
          <div className="column" key={index}>
            {pair.map((image, index) => (
              <img src={image} key={index} className="glow-on-hover" />
            ))}
          </div>
        ))}
      </div>

      <Link to="/photo">
        <button className="start_button">Start</button>
      </Link>
    </div>
  );
};

export default Home;
