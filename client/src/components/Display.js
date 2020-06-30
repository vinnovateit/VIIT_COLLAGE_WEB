import React, { useEffect } from "react";
import "../css/testing.css";
import { useSelector } from "react-redux";
import $ from "jquery";
import "../css/at.css";
import "../css/bt.css";
import "../css/dt.css";
import "../css/gridpage.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Display = () => {
    var string = useSelector((state) => state.domReducer.string);
    var wall = useSelector((state) => state.domReducer.wall);
    const history = useHistory();
    useEffect(() => {
        // if (wall === "bt-grid-container")
        //     document.querySelector("body").style.background =
        //         "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')";
        // if (wall === "lt-grid-container")
        //     document.querySelector("body").style.background =
        //         "url('https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')";
        // if (wall === "at-grid-container")
        //     document.querySelector("body").style.background =
        //         "url('https://res.cloudinary.com/sankarkvs/image/upload/v1590940626/images/ftghz9hegm6ztt9obmco.jpg')";
        // if (wall === "dt-grid-container")
        //     document.querySelector("body").style.background =
        //         "url('https://images.unsplash.com/photo-1589735417556-3b74f6221ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')";
        document.querySelector("body").style.backgroundSize = "cover";
        document.querySelector(`.${wall}`).style.height = "100vh";
        document.querySelector(`.${wall}`).style.width = "100%";
        document.querySelector(`.${wall}`).style.display = "grid";
        var html = $($.parseHTML(string));
        for (var i = 0; i < html.length; i++) {
            document.querySelector(`.${wall}`).append(html[i]);
        }
    }, []);
    return (
        <div className="gridinter display-page">
            <div class="lt-grid-container"></div>
            <div className="at-grid-container"></div>
            <div className="bt-grid-container"></div>
            <div className="dt-grid-container"></div>
            <Link to="/interface">
                <img
                    src="https://image.flaticon.com/icons/svg/1828/1828817.svg"
                    alt=""
                    className="add"
                />
            </Link>
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

export default Display;
