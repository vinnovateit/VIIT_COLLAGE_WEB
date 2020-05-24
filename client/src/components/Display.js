import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import "../css/gridpage.css";
import { loaddom } from "../actions/initialActions";
import { Link } from "react-router-dom";

const Display = () => {
  const dispatch = useDispatch();
  const string = useSelector((state) => state.domReducer.string);
  useEffect(() => {
    async function getdata() {
      await dispatch(loaddom());
    }
    getdata();
    const html = $($.parseHTML(string));
    for (var i = 0; i < html.length; i++) {
      if (html[i].className == "greedy") {
        html[i].innerHTML = "";
        html[i].style.borderColor = "transparent";
        // html[i].style.background = "#333";
        html[i].style.pointerEvents = "none";
      }
      document.querySelector(".grid-display").append(html[i]);
    }
  }, []);
  return (
    <div className="display-page">
      <h1>
        "The moments may have ended but the memories last forever <tr />♥ ♥ ♥ "
      </h1>

      <div className="grid-display"></div>
      <div className="bgd"></div>
      <div className="fadeyy"></div>
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
