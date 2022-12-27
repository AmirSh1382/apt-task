import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reducers/DataReducer";

const store = configureStore({
  reducer: {
    dataReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store
