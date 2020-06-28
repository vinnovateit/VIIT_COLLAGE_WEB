import React, { useEffect } from "react";
import "../css/testing.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import {
  loaddom,
  updatedomlocal,
  updatedom,
  loadingstart,
  loadingstop,
  initialdom,
} from "../actions/initialActions";
const TestingInterface = () => {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  let selected = false;
  //const dispatch = useDispatch();
  var string = useSelector((state) => state.domReducer.string);

  const select = (e) => {
    if (selected == true && e.target.style.background != "black") {
      alert("please deselect the previous one");
      return;
    }
    if (e.target.style.background != "black") {
      selected = true;
      let element = e.target;
      element.style.background = "black";
      setId(element.className);
      console.log(element.className);
    } else {
      selected = false;
      let element = e.target;
      element.style.background = "white";
      setId("");
    }
  };

  const drop = async () => {
    const files = document.getElementById("file").files;
    if (!files) return alert("no files uploaded");
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "kvssankar");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/sankarkvs/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setUrl(file.secure_url);
  };
  const preview = () => {
    const parent = document.querySelector(`.${id}`);
    var img = document.createElement("img");
    img.className = "grid-img";
    img.src = url;
    parent.append(img);
  };
  useEffect(() => {
    const html = $($.parseHTML(string));
    for (var i = 0; i < html.length; i++) {
      html[i].onclick = select;
      document.querySelector(".lt-grid-container").append(html[i]);
    }
  }, []);
  return (
    <div className="gridinter">
      <div class="lt-grid-container"></div>
      <div className="right">
        <h1>Preview</h1>
        <div class="input-block">
          <label for="name" class="input-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="input-block">
          <label for="url" class="input-label">
            Upload Image
          </label>
          <input
            id="file"
            name="file"
            type="file"
            onChange={async () => {
              await dispatch(loadingstart());
              await drop();
              dispatch(loadingstop());
            }}
          />
        </div>

        <div class="alert alert-primary" role="alert">
          Select grids
        </div>

        <button className="btn btn-danger">clear</button>
        <button className="btn btn-primary" onClick={preview}>
          preview
        </button>

        <button class="btn btn-success">Proceed</button>
      </div>
    </div>
  );
};

export default TestingInterface;
