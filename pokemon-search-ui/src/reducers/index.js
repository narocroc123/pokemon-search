import searchReducer from "./search";
import historyReducer from "./history";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  search: searchReducer,
  history: historyReducer,
});

export default rootReducer;
