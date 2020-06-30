import React from "react";
import "../css/rightbar.css";
const RightBar = () => {
    return (
        <div className="right-bar">
            <a
                target="_blank"
                href="https://www.linkedin.com/company/v-innovate-it/"
            >
                <img
                    src="https://image.flaticon.com/icons/svg/174/174857.svg"
                    alt=""
                />
            </a>
            <a target="_blank" href="https://www.instagram.com/vinnovateit/">
                <img
                    src="https://image.flaticon.com/icons/svg/2111/2111463.svg"
                    alt=""
                />
            </a>
            <a target="_blank" href="https://www.facebook.com/VinnovateIT">
                <img
                    src="https://image.flaticon.com/icons/svg/2111/2111398.svg"
                    alt=""
                />
            </a>
            <a target="_blank" href="https://github.com/vinnovateit">
                <img
                    src="https://image.flaticon.com/icons/svg/733/733553.svg"
                    alt=""
                />
            </a>
        </div>
    );
};

export default RightBar;
