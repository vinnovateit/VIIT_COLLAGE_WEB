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
      document.querySelector(".canvas").append(html[i]);
    }
  }, []);
  const share = async () => {
    var element = document.getElementById("canvas"); // global variable
    console.log(element);
    var getCanvas; // global variable

    await html2canvas(element).then((canvas) => {
      getCanvas = canvas;
    });
    var imageData = await getCanvas.toDataURL("image/png");
    console.log(getCanvas);
    // Now browser starts downloading it instead of just showing it
    var newData = imageData.replace(
      /^data:image\/png/,
      "data:application/octet-stream"
    );
    $("#download").attr("download", "image.png").attr("href", newData);
  };

  return (
    <div>
      <div id="canvas" className="canvas">
        <div className="tag tag1">
          <h1>VinnoavetIT</h1>
          <img src={image} alt="" />
        </div>
      </div>
      <a id="download" onClick={share} download="triangle.png">
        share
      </a>
    </div>
  );
};

export default Download;
