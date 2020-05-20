const initialState = {
  string: "",
  wall: "",
  isLoading: false,
};
const domReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_START":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADING_STOP":
      return {
        ...state,
        isLoading: false,
      };
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
