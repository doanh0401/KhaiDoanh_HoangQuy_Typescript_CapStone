import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogin } from "../../interfaces/user";


interface UserState {
  userInfo: UserLogin | null;
}
const DEFAULT_STATE: UserState = {
  userInfo: null,
};

const roomSlice = createSlice({
  name: "roomSlice",
  initialState: DEFAULT_STATE,
  reducers: {
    setUserInfo(state: UserState, action: PayloadAction<UserLogin>) {
      state.userInfo = action.payload;
    },
  },
});

export const roomReducer = roomSlice.reducer;
export const roomActions = roomSlice.actions;