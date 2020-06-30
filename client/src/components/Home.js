import React from "react";
import "../css/home.css";
import { useHistory } from "react-router-dom";
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
        W<span class="fast-flicker">A</span>LL-<span class="flicker">E</span>
      </div>
      <div className="center">
        <h1>Make your memories eternal through the wheel of time...</h1>
        <div className="buttons">
          <button
            onClick={async () => {
              await dispatch(setid("5ef8b60d44130f5f9426e9d9"));
              await dispatch(loaddom("5ef8b60d44130f5f9426e9d9"));
            }}
            className="btn btn-secondary btn-home"
          >
            Wall of Memories
          </button>
          <button
            onClick={async () => {
              await dispatch(setid("5ef8b71044130f5f9426e9da"));
              await dispatch(loaddom("5ef8b71044130f5f9426e9da"));
            }}
            className="btn btn-secondary btn-home"
          >
            Wall of Riviera
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
            Wall of Lockdown moods
          </button>
        </div>
      </div>
      <div className="bottom">
        <h4>Made with ❤️ by VinnovateIT</h4>
      </div>
      <RightBar />
    </div>
  );
};
export default Home;
