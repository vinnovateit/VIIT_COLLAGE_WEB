import React, { useEffect } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Image from "../assests/VinnovateIT-shape.png";
import { useDispatch } from "react-redux";
import { loaddom } from "../actions/initialActions";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getdata() {
      await dispatch(loaddom());
    }
    getdata();
  }, []);
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
          <Link to="/display" className="btn">
            Wall of Memories
          </Link>
        </div>
      </div>
      <div className="bottom">
        <h4>Made with ♥ by VinnovateIT</h4>
      </div>
    </div>
  );
};
export default Home;
