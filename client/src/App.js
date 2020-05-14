import React, { useEffect } from "react";
import "./css/gridpage.css";
import randomHexColor from "random-hex-color";
const App = () => {
  let array = [];
  for (var i = 0; i < 100; i++) {
    array.push(1);
  }
  i = 0;
  let elements = [];
  const select = (e) => {
    elements.push(Number(e.target.id));
  };
  const logic = () => {
    if (elements.length == 1) {
      let html = document.createElement("div");
      let img = document.createElement("img");
      img.src =
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
      html.appendChild(img);
      html.className = "greed";
      var refy = document.getElementById(`${elements[0]}`);
      refy.after(html);
      refy.remove();
      elements = [];
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
        console.log("working");
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
      img.src =
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
      html.appendChild(img);
      html.style.gridColumn = col;
      html.style.gridRow = row;
      html.className = "greed";
      let ref = document.getElementById(`${elements[0]}`);
      ref.after(html);
      for (var i = 0; i < elements.length; i++) {
        document.getElementById(`${elements[i]}`).remove();
      }
      elements = [];
    }
    console.log(document.querySelector(".grid").innerHTML);
  };
  return (
    <div>
      <div className="grid">
        {array.map((ele) => {
          i++;
          return (
            <div
              id={i}
              className="greedy"
              onClick={select}
              style={{ background: randomHexColor() }}
            >
              {i}
            </div>
          );
        })}
      </div>
      <button onClick={logic}>submit</button>
    </div>
  );
};

export default App;
