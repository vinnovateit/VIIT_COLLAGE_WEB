const initialState = {
  string: "",
  wall: "",
  id: "",
  isLoading: false,
};
const domReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ID":
      return {
        ...state,
        id: action.payload,
      };
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
      localStorage.setItem("prevdom", action.payload.string);
      return {
        ...state,
        string: action.payload.string,
        isLoading: false,
      };
    case "CLEAR":
      return {
        ...state,
        string: localStorage.getItem("prevdom"),
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
