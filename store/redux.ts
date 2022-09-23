import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import deviceSlice from "./reduces/PageDevaicess";

const reduces = combineReducers({
  DevicesPage: deviceSlice,
});

export const store = configureStore({
  reducer: reduces,
  //   middleware: [applyMiddleware(thunk)],
});

// export type TypeReduces = ReturnType<typeof reduces>;
export type TypeStore = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
