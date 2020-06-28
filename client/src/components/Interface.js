import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import "../css/gridpage.css";
import {
  loaddom,
  updatedomlocal,
  updatedom,
  loadingstart,
  loadingstop,
  initialdom,
} from "../actions/initialActions";

const Interface = () => {
  var id = useSelector((state) => state.domReducer.id);
  const history = useHistory();
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [pre, setPre] = useState(0);
  const [error, setError] = useState(false);
  var string = useSelector((state) => state.domReducer.string);
  const dispatch = useDispatch();
  const [elements, setElements] = useState([]);
  const clear = async () => {
    for (var i = 0; i < elements.length; i++) {
      document.getElementById(`${elements[i]}`).style.background =
        "transparent";
      document.getElementById(`${elements[i]}`).style.color = "black";
    }
    setElements([]);
    setPre(0);
    await dispatch(initialdom());
    window.location.reload();
  };
  const select = (e) => {
    var error = 0;
    setElements((oldArray) => {
      return [...oldArray, Number(e.target.id)];
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
  const check = () => {
    let listy = [];
    for (let i = 0; i < 11; i++) {
      let a = [];
      for (let j = 0; j < 11; j++) {
        a.push(0);
      }
      listy.push(a);
    }
    let maxrow = -1,
      maxcol = -1,
      minrow = 101,
      mincol = 101,
      temp,
      row,
      col;
    for (let i = 0; i < elements.length; i++) {
      temp = elements[i];
      row = Math.floor(temp / 10);
      if (temp % 10 != 0) row++;
      col = temp - (row - 1) * 10;
      listy[row][col] = 1;
      maxrow = Math.max(maxrow, row);
      minrow = Math.min(minrow, row);
      maxcol = Math.max(maxcol, col);
      mincol = Math.min(mincol, col);
    }
    for (var i = minrow; i <= maxrow; i++) {
      for (var j = mincol; j <= maxcol; j++) {
        if (listy[i][j] != 1) {
          return 1;
        }
      }
    }
  };
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
      setElements([]);
      setPre(1);
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
      "https://api.cloudinary.com/v1_1/sankarkvs/image/upload/q_auto:low",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setUrl(file.secure_url);
  };
  useEffect(() => {
    document.querySelector("body").style.background = "#f1f2f6";
    document.querySelector("body").style.overflow = "scroll";

    const html = $($.parseHTML(string));
    for (var i = 0; i < html.length; i++) {
      if (html[i].className == "greedy") html[i].onclick = select;
      document.querySelector(".grid").append(html[i]);
    }
  }, []);

  return (
    <div className="interface">
      <div className="grid"></div>
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

        <button className="btn btn-danger" onClick={clear}>
          clear
        </button>
        <button
          className="btn btn-primary"
          onClick={async () => {
            if (elements.length > 9)
              return alert("One can select Max of 9 elements !!!");
            if (check()) return alert("Please select boxes of regular shape");
            if (elements.length == 0) return alert("Please select grids");
            if (url == "") return alert("Please upload image");
            await logic();
            await dispatch(
              updatedomlocal(document.querySelector(".grid").innerHTML)
            );
          }}
        >
          preview
        </button>

        <button
          class="btn btn-success"
          onClick={async () => {
            if (elements.length > 9)
              return alert("One can select Max of 9 elements !!!");
            if (check()) return alert("Please select boxes of regular shape");
            if (!pre) return alert("please upload image");
            alert("Are you sure ?");
            await dispatch(updatedom(id));
            history.push(`/download`);
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Interface;
