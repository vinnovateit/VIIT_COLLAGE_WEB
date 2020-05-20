import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import "../css/gridpage.css";
import vedio from "../assests/Space - 2381.mp4";
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
        html[i].style.pointerEvents = "none";
      }
      document.querySelector(".grid-display").append(html[i]);
    }
  }, []);
  return (
    <div className="display-page">
      <h1>Time files but memories remain</h1>
      <div className="grid-display"></div>
      {/* <div className="videp-container">
        <video autoPlay loop muted className="bgd">
          <source src={vedio} type="video/mp4" />
        </video>
      </div> */}
      <div className="bgd"></div>
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
