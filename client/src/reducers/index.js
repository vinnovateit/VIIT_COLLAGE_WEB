import domReducer from "./domReducer";

import { combineReducers } from "redux";

const allReducer = combineReducers({
  domReducer,
});

export default allReducer;
