import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { User } from "../core/requests/users";

interface UserState {
  current?: User | undefined;
}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.current = action.payload;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.current;

export default userSlice.reducer;
