import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  id: number;
}

const initialState: UserState = {
  id: -1,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logId: (state) => console.log(state.id),
    // TODO: Add reducers
  },
});

export const { logId } = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.id;

export default userSlice.reducer;
