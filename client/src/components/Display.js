import React, { useEffect } from "react";
import "../css/testing.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import "../css/at.css";
const Display = () => {
  var string = useSelector((state) => state.domReducer.string);
  var wall = useSelector((state) => state.domReducer.wall);
  useEffect(() => {
    document.querySelector(`.${wall}`).style.height = "100vh";
    document.querySelector(`.${wall}`).style.width = "100%";
    const html = $($.parseHTML(string));
    for (var i = 0; i < html.length; i++) {
      document.querySelector(`.${wall}`).append(html[i]);
    }
  }, []);
  return (
    <div className="gridinter">
      <div class="lt-grid-container"></div>
      <div className="at-grid-container"></div>
      <div className="bt-grid-container"></div>
    </div>
  );
};

export default Display;
