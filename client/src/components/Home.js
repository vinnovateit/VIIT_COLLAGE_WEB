import React from "react";
import "../css/home.css";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loaddom, setid } from "../actions/initialActions";
import RightBar from "./Rightbar";
const Home = () => {
  const dispatch = useDispatch();
  var id = useSelector((state) => state.domReducer.id);
  // useEffect(() => {
  //   async function getdata() {
  //     await dispatch(loaddom());
  //   }
  //   getdata();
  // }, []);
  const history = useHistory();
  return (
    <div>
      <div className="bg"></div>
      <div className="fadey"></div>
      <div class="sign">
        W<span class="fast-flicker">A</span>LL-
        <span class="flicker">E</span>
      </div>
      <div className="center">
        <h1 className="sub_heading">
          Make your memories eternal through the wheel of time...
        </h1>
        <div className="buttons">
          <button
            onClick={async () => {
              await dispatch(setid("5ef8b60d44130f5f9426e9d9"));
              await dispatch(loaddom("5ef8b60d44130f5f9426e9d9"));
            }}
            className="btn btn-secondary btn-home"
          >
            Wall of Hostel Memories
          </button>
          <button
            onClick={async () => {
              await dispatch(setid("5ef8b71044130f5f9426e9da"));
              await dispatch(loaddom("5ef8b71044130f5f9426e9da"));
            }}
            className="btn btn-secondary btn-home"
          >
            Mamu Wall
          </button>
          <button
            onClick={async () => {
              await dispatch(setid("5ef8b7c944130f5f9426e9db"));
              await dispatch(loaddom("5ef8b7c944130f5f9426e9db"));
            }}
            className="btn btn-secondary btn-home"
          >
            Wall of Photography
          </button>
          <button
            onClick={async () => {
              await dispatch(setid("5efacc41cb0e5aa0b29dac5a"));
              await dispatch(loaddom("5efacc41cb0e5aa0b29dac5a"));
            }}
            className="btn btn-secondary btn-home"
          >
            Trips and Party Wall
          </button>
          <button
            onClick={async () => {
              await dispatch(setid("5efb59f8a94d43ea6f00d3b9"));
              await dispatch(loaddom("5efb59f8a94d43ea6f00d3b9"));
            }}
            className="btn btn-secondary btn-home"
          >
            Web series Wall
          </button>
          <button
            onClick={async () => {
              await dispatch(setid("5efb5b32a94d43ea6f00d3ba"));
              await dispatch(loaddom("5efb5b32a94d43ea6f00d3ba"));
            }}
            className="btn btn-secondary btn-home"
          >
            VinnovateIT Wall
          </button>
        </div>
      </div>
      <Link to="/form">
        <div className="form_reminder_div">👂</div>
      </Link>
      <div className="bottom">
        <h4>Made with ❤️ by VinnovateIT</h4>
      </div>
      <RightBar />
    </div>
  );
};
export default Home;
