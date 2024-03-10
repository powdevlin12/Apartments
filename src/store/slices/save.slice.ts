import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type InitialStateType = {
  counter: number;
};

type PayloadType = InitialStateType;

const initialState: InitialStateType = {
  counter: 0,
};

const saveSlice = createSlice({
  name: "save",
  initialState: initialState,
  reducers: {
    increment: (
      state: InitialStateType,
      action: PayloadAction<PayloadType["counter"]>
    ) => {
      state.counter = state.counter + action.payload;
    },
    decrement: (
      state: InitialStateType,
      action: PayloadAction<PayloadType["counter"]>
    ) => {
      state.counter = state.counter - action.payload;
    },
  },
});

export const selectCounter = (state: RootState) => state.saveSlice.counter;

export const { decrement, increment } = saveSlice.actions;
export default saveSlice.reducer;
