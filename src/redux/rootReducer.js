import { combineReducers } from "redux";

// Reducers
import dataReducer from "./data/dataReducer";

const rootReducer = combineReducers({
  dataState: dataReducer,
});

export default rootReducer;