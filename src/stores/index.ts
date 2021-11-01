/**
 * store is a single source of truth, here we maintain information/data used throughout the app
 * i.e. the data fetched from an API
 */

import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";

const store = configureStore({
  reducer,
});

export default store;
