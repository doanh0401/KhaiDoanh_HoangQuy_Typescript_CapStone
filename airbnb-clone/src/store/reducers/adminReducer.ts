import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { editUser, formDataRoom } from "../../interfaces/admin";

interface AdminState {
  thongtinPhong: formDataRoom | {};
  thongtinUser: editUser | {};
}
const DEFAULT_STATE: AdminState = {
  thongtinPhong: {},
  thongtinUser:{}
};
const adminSlice = createSlice({
  name: "adminSlice",
  initialState: DEFAULT_STATE,
  reducers: {
    setThongTinPhongAction(state: AdminState, action: PayloadAction<formDataRoom>) {
      state.thongtinPhong = action.payload;
    },
    setThongTinUserAction(state: AdminState, action: PayloadAction<editUser>){
      state.thongtinUser = action.payload;
    }
  },
});
export const adminReducer = adminSlice.reducer;
export const adminActions = adminSlice.actions;
