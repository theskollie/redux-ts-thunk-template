import { configureStore } from "@reduxjs/toolkit";
import dogsSlice from "./dogs/dogsSlice";

export const store = configureStore({
  reducer: {
    dogs: dogsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
