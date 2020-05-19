import domReducer from "./domReducer";

import { combineReducers } from "redux";

const allReducer = combineReducers({
  domReducer: domReducer,
});

export default allReducer;
