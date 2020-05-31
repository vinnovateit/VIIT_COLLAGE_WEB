import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import "../css/gridpage.css";
import { loaddom } from "../actions/initialActions";
import { Link } from "react-router-dom";
import image from "../assests/melon2.png";

const Display = () => {
  document.querySelector("body").style.overflow = "hidden";
  const dispatch = useDispatch();
  const string = useSelector((state) => state.domReducer.string);
  useEffect(() => {
    document.querySelector("body").style.background = "black";
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
        Keep the memories of your life
        <br />
        Warm and In Time ! <br />
        Beacause they're ...
      </h1>
      <div className="melonimage">
        <img src={image} alt="" />
        <h4>ONE IN A MELON</h4>
      </div>
      <div className="grid-display"></div>
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
