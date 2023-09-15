import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./userSlice";
import filterSlice from "./filterSlice";

type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterSlice,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
