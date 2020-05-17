import axios from "axios";
export const updatedom = () => (dispatch) => {
  axios
    .post("/dom/update", { string: localStorage.getItem("dom") })
    .then((res) =>
      dispatch({
        type: "UPDATE_DOM",
        payload: res.data.string,
      })
    );
};

export const updatedomlocal = (a) => {
  return {
    type: "UPDATE_DOM_LOCAL",
    payload: a,
  };
};
export const loaddom = (a) => (dispatch) => {
  axios.get("/dom/get").then((res) =>
    dispatch({
      type: "LOAD_DOM",
      payload: res.data.string,
    })
  );
};
