import React from "react";
import { useSelector } from "react-redux";
import image from "../assests/VinnovateIT-shape.png";
import "../css/loading.css";
const Loading = () => {
  const display = useSelector((state) => state.domReducer.isLoading);
  return (
    <div>
      {display && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            background: "transparent",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "222222222",
          }}
        >
          <img className="loading" src={image} height="70px" alt="" />
        </div>
      )}
    </div>
  );
};
export default Loading;
