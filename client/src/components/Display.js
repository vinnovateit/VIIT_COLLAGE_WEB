import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import "../css/gridpage.css";
import { loaddom } from "../actions/initialActions";
const Display = () => {
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
        html[i].style.opacity = 0;
        html[i].style.pointerEvents = "none";
      }
      document.querySelector(".grid-display").append(html[i]);
    }
  }, []);
  return <div className="grid-display"></div>;
};

export default Display;
