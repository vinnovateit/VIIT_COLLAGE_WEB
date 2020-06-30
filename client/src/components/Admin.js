import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadingstart,
  setid,
  loaddomer,
  loadingstop,
  updatedomlocal,
  updatedom,
} from "../actions/initialActions";
import $ from "jquery";
import { useState } from "react";
const Admin = () => {
  const history = useHistory();
  var bid = useSelector((state) => state.domReducer.id);
  var string = useSelector((state) => state.domReducer.string);
  var wall = useSelector((state) => state.domReducer.wall);
  const dispatch = useDispatch();
  useEffect(() => {
    let pass = prompt("Enter password");
    if (pass !== "3000") history.push("/");
  });
  const [ele, setEle] = useState([]);

  const getdata = async (a) => {
    await dispatch(loadingstart());
    await dispatch(setid(a));
    await dispatch(loaddomer(a));
    document.querySelector(`.${wall}`).style.height = "100vh";
    document.querySelector(`.${wall}`).style.width = "100%";
    document.querySelector(`.${wall}`).style.display = "grid";
    var html = $($.parseHTML(string));
    const deleted = (e) => {
      let ans = prompt("Wanna delte this then press Y or else N");
      if ((ans = "Y")) {
        let ele = e.target;
        ele.remove();
      } else {
        alert("select again");
      }
    };
    for (var i = 0; i < html.length; i++) {
      html[i].onclick = deleted;
      document.querySelector(`.${wall}`).append(html[i]);
    }
    await dispatch(loadingstop());
  };
  return (
    <div className="admin">
      <button
        className="btn btn-danger"
        onClick={() => {
          getdata("5ef8b60d44130f5f9426e9d9");
        }}
      >
        Wall of Memories
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          getdata("5ef8b71044130f5f9426e9da");
        }}
      >
        Wall of Rivera
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          getdata("5ef8b7c944130f5f9426e9db");
        }}
      >
        Wall of Photograpy
      </button>
      <button
        class="btn btn-success"
        onClick={async () => {
          if (prompt("IF SURE PRESS Y") !== "Y") {
            alert("refresh the page");
            return;
          }
          await dispatch(
            updatedomlocal(document.querySelector(`.${wall}`).innerHTML)
          );
          await dispatch(updatedom(bid));
          history.push(`/`);
        }}
      >
        Proceed
      </button>
      <div className="lt-grid-container"></div>
      <div className="at-grid-container"></div>
      <div className="bt-grid-container"></div>
      <div className="et-grid-container"></div>
      <div className="dt-grid-container"></div>
      <div className="ft-grid-container"></div>
    </div>
  );
};

export default Admin;
