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
  const share = async () => {
    // domtoimage.toBlob(document.getElementById("canvas")).then(function (blob) {
    //   window.saveAs(blob, "my-node.png");
    // });
    document.getElementById("canvas").style.width = "100%";
    document.getElementById("canvas").style.height = "100%";
    await domtoimage
      .toJpeg(document.getElementById("canvas"), { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
    document.getElementById("canvas").style.width = "40%";
    document.getElementById("canvas").style.height = "40%";
  };

  return (
    <div>
      <div id="canvas" className="canvas">
        <div className="tag">
          <h1>WallE</h1>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="message">
        <div className="text">
          Loved the idea? Help others to make thier memory eternal through time
          ! Download the memory wall as a photo and post on instagram story
          after taging us @VinnovateIT
        </div>
        <a id="download" onClick={share}>
          share
        </a>
      </div>
    </div>
  );
};

export default Download;
