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
  axios
    .post("/razorpay", { amount: a })
    .then(async (x) => {
      await dispatch(updatedom());
      const amnt = x.data.amount; //amount returned by backend
      const curr = x.data.currency; //currency returned by backend
      const idd = x.data.id; //order_id returned by order API
      var options = {
        key: "rzp_test_Bqx6B6JlLxprFZ", //add your razorpay account key
        amount: amnt,
        currency: curr,
        name: "",
        description: "",
        order_id: idd,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    })
    .catch((err) => console.log(err));
};
