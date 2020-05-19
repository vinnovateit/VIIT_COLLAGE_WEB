const initialState = {
  string: "",
  wall: "",
};
const domReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DOM":
    case "UPDATE_DOM":
      return {
        ...state,
        string: action.payload.string,
      };
    case "UPDATE_DOM_LOCAL":
      localStorage.setItem("dom", action.payload);
      return {
        ...state,
        string: action.payload,
      };
    default:
      return state;
  }
};

export default domReducer;
