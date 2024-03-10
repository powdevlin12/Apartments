import { combineReducers } from "@reduxjs/toolkit";
import saveSlice from "./slices/save.slice";

const rootReducer = combineReducers({
  saveSlice: saveSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
