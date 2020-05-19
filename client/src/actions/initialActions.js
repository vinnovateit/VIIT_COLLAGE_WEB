import axios from "axios";
export const updatedom = () => (dispatch) => {
  axios
    .post("/dom/update", {
      string: localStorage.getItem("dom"),
      id: "5ec37bad021cb63fbe3f31ff",
    })
    .then((res) =>
      dispatch({
        type: "UPDATE_DOM",
        payload: res.data,
      })
    );
};

export const updatedomlocal = (a) => {
  return {
    type: "UPDATE_DOM_LOCAL",
    payload: a,
  };
};
export const loaddom = () => (dispatch) => {
  axios.post("/dom/load", { id: "5ec37bad021cb63fbe3f31ff" }).then((res) =>
    dispatch({
      type: "LOAD_DOM",
      payload: res.data,
    })
  );
};
