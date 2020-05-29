import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import html2canvas from "html2canvas";
import $ from "jquery";
import "../css/gridpage.css";
import "../css/download.css";
import { loaddom } from "../actions/initialActions";
import image from "../assests/VinnovateIT-shape.png";

const Download = () => {
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
  const share = async () => {
    var element = $(".canvas")[0]; // global variable
    var getCanvas; // global variable
    html2canvas(element).then(function (blob) {
      console.log("working");
      const file = new File([blob], "dot.png", blob);
      if (navigator.share) {
        navigator.share({
          files: [file],
          title: "working",
          text: "hurray",
          url: "https://theclubhouse3000.herokuapp.com/",
        });
      } else {
        alert("this feature is only acompatible with mobiles");
      }
    });
  };

  return (
    <div>
      <div className="canvas">
        <div className="grid-display"></div>
        <div className="tag tag1">
          <h1>VinnoavetIT</h1>
          <img src={image} alt="" />
        </div>
        {/* <div className="tag tag2">
        <h1>VinnoavetIT</h1>
        <img src={image} alt="" />
      </div>
      <div className="tag tag3">
        <h1>VinnoavetIT</h1>
        <img src={image} alt="" />
      </div>
      <div className="tag tag4">
        <h1>VinnoavetIT</h1>
        <img src={image} alt="" />
      </div> */}
      </div>
      <button onClick={share}>share</button>
    </div>
  );
};

export default Download;