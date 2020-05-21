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

export const loadingstart = () => {
  return {
    type: "LOADING_START",
  };
};

export const loadingstop = () => {
  return {
    type: "LOADING_STOP",
  };
};

//razorpay
export const pay = (a) => (dispatch) => {
  axios.post("/razorpay", { amount: a }).then(async (res) => {
    await dispatch(updatedom());
    dispatch({
      type: "PAYED",
      payload: res.data,
    });
  });
};
