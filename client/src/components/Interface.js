import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import "../css/gridpage.css";
import {
  loaddom,
  updatedomlocal,
  updatedom,
  loadingstart,
  loadingstop,
} from "../actions/initialActions";
const Interface = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const string = useSelector((state) => state.domReducer.string);
  const dispatch = useDispatch();
  const [elements, setElements] = useState([]);
  const clear = () => {
    for (var i = 0; i < elements.length; i++) {
      document.getElementById(`${elements[i]}`).style.background =
        "transparent";
    }
    setElements([]);
  };
  const select = (e) => {
    var error = 0;
    setElements((oldArray) => {
      if (oldArray.length == 0) return [...oldArray, Number(e.target.id)];
      const diff = oldArray[oldArray.length - 1] - Number(e.target.id);
      if (oldArray.includes(Number(e.target.id))) {
        alert("You have already selected the grid");
        error = 1;
        return setElements([...oldArray]);
      }
      if (diff == 1 || diff == -1 || diff == 10 || diff == -10) {
        return [...oldArray, Number(e.target.id)];
      } else {
        alert("please select consequetive grids only");
        error = 1;
        return [...oldArray];
      }
    });
    if (!error) {
      document.getElementById(e.target.id).style.background = "rgb(27, 26, 26)";
      document.getElementById(e.target.id).style.color = "wheat";
    }
    error = 0;
  };

  let array = [];
  for (var i = 0; i < 100; i++) {
    array.push(1);
  }
  i = 0;

  const logic = () => {
    if (elements.length == 1) {
      let html = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", url);
      html.appendChild(img);
      html.className = "greed";
      var refy = document.getElementById(`${elements[0]}`);
      refy.after(html);
      refy.remove();
      setElements([]);
    } else {
      let maxy = Math.max(...elements);

      let miny = Math.min(...elements);
      let r1 = Number(("" + miny)[0]);
      let r2 = Number(("" + maxy)[0]);
      let c1 = Number(("" + miny)[1]);
      let c2 = Number(("" + maxy)[1]);

      if (c1 == 0 && c2 == 0) {
        c1 = c2 = 10;
        r1 = r1 - 1;
        r2 = r2 - 1;
      } else if (c2 == 0) {
        c2 = 10;
        r2 = r2 - 1;
      }
      if (!c1 && !c2) {
        c1 = r1;
        c2 = r2;
        r1 = r2 = 0;
      }
      if (!c1 && c2) {
        c1 = r1;
        r1 = 0;
      }
      c2 = c2 + 1;
      r1 = r1 + 1;
      r2 = r2 + 2;
      if (maxy == 100) {
        r2 = 11;
        c2 = 11;
      }
      let row = `${r1}/${r2}`;
      let col = `${c1}/${c2}`;
      let html = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", url);
      html.appendChild(img);
      html.style.gridColumn = col;
      html.style.gridRow = row;
      html.className = "greed";
      let ref = document.getElementById(`${elements[0]}`);
      ref.after(html);
      for (var i = 0; i < elements.length; i++) {
        document.getElementById(`${elements[i]}`).remove();
      }
      setPrice(elements.length * 5);
      setElements([]);
    }
    console.log(document.querySelector(".grid").innerHTML);
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
  useEffect(() => {
    localStorage.clear("dom");
    document.querySelector("body").style.background = "black";
    async function getdata() {
      await dispatch(loaddom());
    }
    getdata();
    const html = $($.parseHTML(string));
    for (var i = 0; i < html.length; i++) {
      if (html[i].className == "greedy") html[i].onclick = select;
      document.querySelector(".grid").append(html[i]);
    }
  }, []);
  return (
    <div style={{ display: "flex" }} className="interface">
      <div className="grid"></div>
      <div className="right">
        <h1>Preview</h1>
        <div class="input-block">
          <label for="name" class="input-label">
            Title
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Title of Image"
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
        <div class="input-block">
          <label for="name" class="input-label">
            Price
          </label>
          <input type="text" name="price" id="price" disabled value={price} />
        </div>
        <div class="alert alert-primary" role="alert">
          Select grids
        </div>

        <button
          className="btn btn-danger"
          style={{ opacity: 1, color: "black" }}
          onClick={clear}
        >
          clear
        </button>
        <button
          className="btn btn-primary"
          style={{ opacity: 1, color: "black" }}
          onClick={async () => {
            await logic();
            await dispatch(
              updatedomlocal(document.querySelector(".grid").innerHTML)
            );
          }}
        >
          preview
        </button>
        <button
          className="btn btn-success"
          style={{ opacity: 1, color: "black" }}
          onClick={() => {
            //dispatch(updatedom());
            alert("this feature will be added soon");
          }}
        >
          pay
        </button>
      </div>
    </div>
  );
};

export default Interface;
