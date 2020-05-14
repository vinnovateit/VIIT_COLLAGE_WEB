import axios from "axios";
export const updatedom = (a) => (dispatch) => {
  axios.post("/dom/update", { string: a }).then((res) =>
    dispatch({
      type: "UPDATE_DOM",
      payload: res.data.string,
    })
  );
};
export const loaddom = (a) => (dispatch) => {
  axios.get("/dom/get").then((res) =>
    dispatch({
      type: "LOAD_DOM",
      payload: res.data.string,
    })
  );
};
