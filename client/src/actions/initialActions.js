import axios from "axios";

export const setid = (a) => {
  return {
    type: "ID",
    payload: a,
  };
};
export const loaddom = (id) => (dispatch) => {
  axios.post("/dom/load", { id }).then((res) => {
    dispatch({
      type: "LOAD_DOM",
      payload: res.data,
    });
    window.location.href = "/display";
  });
};
export const loaddomer = (id) => (dispatch) => {
  axios.post("/dom/load", { id }).then((res) => {
    dispatch({
      type: "LOAD_DOM",
      payload: res.data,
    });
  });
};
export const updatedom = (id, a) => (dispatch) => {
  axios
    .post("/dom/update", {
      string: a,
      id,
    })
    .then((res) => {
      dispatch({
        type: "UPDATE_DOM",
        payload: res.data,
      });
      window.location.href = "/download";
    });
};

export const updatedomlocal = (a) => {
  return {
    type: "UPDATE_DOM_LOCAL",
    payload: a,
  };
};

export const initialdom = () => {
  return {
    type: "CLEAR",
  };
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
