import React from "react";
import "../css/home.css";
import Image from "../assests/VinnovateIT-shape.png";
const Home = () => {
  return (
    <div>
      <div className="bg"></div>
      <div className="fadey"></div>
      <div class="sign">
        <span class="fast-flicker">b</span>rea<span class="flicker">t</span>he
      </div>
      <div className="center">
        <h1>Amlost before we knew, we left the ground</h1>
        <div className="buttons">
          <button className="btn">Wall of Craziness</button>
          <button className="btn">Wall of Craziness</button>
          <button className="btn">Wall of Craziness</button>
          <button className="btn">Wall of Craziness</button>
        </div>
      </div>
      <div className="bottom">
        <h4>Made with ♥ by VinnovateIT</h4>
      </div>
    </div>
  );
};
export default Home;
