import React, { useEffect } from "react";
import "../css/home.css";
import { useHistory, Link } from "react-router-dom";
import Image from "../assests/VinnovateIT-shape.png";
import { useDispatch, useSelector } from "react-redux";
import {
  loaddom,
  setid,
  loadingstart,
  loadingstop,
} from "../actions/initialActions";
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
          <Link
            onClick={async () => {
              await dispatch(loadingstart());
              await dispatch(setid("5ec37bad021cb63fbe3f31ff"));
              await dispatch(loaddom("5ec37bad021cb63fbe3f31ff"));
              await history.push("/display");
              await dispatch(loadingstop());
              window.location.reload(false);
            }}
            className="btn btn-secondary btn-home"
            to="/display"
          >
            Beyond Infinity
          </Link>
          <Link
            onClick={async () => {
              await dispatch(loadingstart());
              await dispatch(setid("5ec37bad021cb63fbe3f31ff"));
              await dispatch(loaddom("5ec37bad021cb63fbe3f31ff"));
              await history.push("/display");
              await dispatch(loadingstop());
              window.location.reload(false);
            }}
            className="btn btn-secondary btn-home"
            to="/display"
          >
            Wall of Memories
          </Link>
          <Link
            onClick={async () => {
              await dispatch(loadingstart());
              await dispatch(setid("5ed3b3ada2d66f9fb8961a55"));
              await dispatch(loaddom("5ed3b3ada2d66f9fb8961a55"));
              await history.push("/display");
              await dispatch(loadingstop());
              window.location.reload(false);
            }}
            className="btn btn-secondary btn-home"
            to="/display"
          >
            Wall of Rivera
          </Link>
        </div>
      </div>
      <div className="bottom">
        <h4>Made with ❤️ by VinnovateIT</h4>
      </div>
    </div>
  );
};
export default Home;
