import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import domtoimage from "dom-to-image";
import $ from "jquery";
import "../css/gridpage.css";
import "../css/download.css";
import { loaddom } from "../actions/initialActions";
import image from "../assests/VinnovateIT-shape.png";
import { saveAs } from "file-saver";

const Download = () => {
  const dispatch = useDispatch();
  const string = useSelector((state) => state.domReducer.string);
  useEffect(() => {
    document.querySelector("body").style.background = "rgb(224, 213, 213)";
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
      document.querySelector(".canvas").append(html[i]);
    }
  }, []);
  const download = async () => {
    document.getElementById("canvas").style.width = "1519px";
    document.getElementById("canvas").style.height = "950px";
    await domtoimage
      .toJpeg(document.getElementById("canvas"), { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "wall-e.jpeg";
        link.href = dataUrl;
        link.click();
      });
    if (!navigator.share) {
      document.getElementById("canvas").style.width = "40%";

      document.getElementById("canvas").style.height = "40%";
    } else {
      document.getElementById("canvas").style.width = "100%";

      document.getElementById("canvas").style.height = "100%";
    }
  };

  const share = () => {
    domtoimage.toBlob(document.getElementById("canvas")).then(function (blob) {
      const file = new File([blob], "dot.png", blob);
      if (navigator.share) {
        navigator.share({
          files: [file],
          title: "Wall-E",
          text:
            "Keep the memories of your life Warm and In Time ! Beacause they're ...",
          url: "https://the-wall-e.herokuapp.com/",
        });
      } else {
        alert("this feature is only acompatible with mobiles");
      }
    });
  };

  return (
    <div>
      <div className="parent-canvas" id="canvas">
        <div className="canvas">
          <div className="tag">
            <h1>WallE</h1>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="message">
        <div className="text">
          Loved the idea 😀 ? Help others to make thier memory eternal through
          time ! Download the memory wall as a photo and post on instagram story
          after taging us @VinnovateIT ❤️❤️❤️
        </div>
        <div className="btns">
          <a className="btn btn-primary" id="download" onClick={download}>
            Download
          </a>
          <button className="btn btn-success" onClick={share}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
