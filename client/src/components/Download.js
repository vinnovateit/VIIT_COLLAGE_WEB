import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import domtoimage from "dom-to-image";
import $ from "jquery";
import "../css/gridpage.css";
import "../css/download.css";
import { useHistory } from "react-router-dom";

const Download = () => {
  var history = useHistory();
  var string = useSelector((state) => state.domReducer.string);
  var wall = useSelector((state) => state.domReducer.wall);
  useEffect(() => {
    document.querySelector(`.${wall}`).style.height = "100%";
    document.querySelector(`.${wall}`).style.width = "100%";
    document.querySelector(`.${wall}`).style.display = "grid";
    const html = $($.parseHTML(string));
    for (var i = 0; i < html.length; i++) {
      document.querySelector(`.${wall}`).append(html[i]);
    }
  }, []);
  const download = async () => {
    document.getElementById("canvas").style.width = "200vh";
    document.getElementById("canvas").style.height = "100vh";
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
        alert("this feature is only compactable with mobiles");
      }
    });
  };

  return (
    <div className="download">
      <div className="parent-canvas" id="canvas">
        <div className="canvas">
          <div class="lt-grid-container"></div>
          <div className="at-grid-container"></div>
          <div className="bt-grid-container"></div>
          <div className="dt-grid-container"></div>
          <div className="et-grid-container"></div>
          <div className="ft-grid-container"></div>
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
      <img
        src="https://image.flaticon.com/icons/svg/3039/3039481.svg"
        alt=""
        className="back"
        style={{ cursor: "pointer" }}
        onClick={() => {
          history.push("/");
        }}
      />
    </div>
  );
};

export default Download;
