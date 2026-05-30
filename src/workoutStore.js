import reducerMappings from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducerMappings,
});

export default store;
