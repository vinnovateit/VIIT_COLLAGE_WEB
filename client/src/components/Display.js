import React, { useEffect } from "react";
import "../css/testing.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import "../css/at.css";
import "../css/bt.css";
import "../css/dt.css";
import "../css/gridpage.css";
import { Link } from "react-router-dom";
import image from "../assests/melon2.png";

const Display = () => {
  var string = useSelector((state) => state.domReducer.string);
  var wall = useSelector((state) => state.domReducer.wall);
  useEffect(() => {
    document.querySelector(`.${wall}`).style.height = "100vh";
    document.querySelector(`.${wall}`).style.width = "100%";
    document.querySelector(`.${wall}`).style.display = "grid";
    var html = $($.parseHTML(string));
    for (var i = 0; i < html.length; i++) {
      document.querySelector(`.${wall}`).append(html[i]);
    }
  }, []);
  return (
    <div className="gridinter display-page">
      <div class="lt-grid-container"></div>
      <div className="at-grid-container"></div>
      <div className="bt-grid-container"></div>
      <div className="dt-grid-container"></div>
      <Link to="/interface">
        <img
          src="https://image.flaticon.com/icons/svg/1828/1828817.svg"
          alt=""
          className="add"
        />
      </Link>
    </div>
  );
};

export default Display;
