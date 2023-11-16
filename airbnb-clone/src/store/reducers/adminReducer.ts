import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addPlace, editUser, formDataRoom } from "../../interfaces/admin";

interface AdminState {
  thongtinPhong: formDataRoom | {};
  thongtinUser: editUser | {};
  thongtinPlace: addPlace | {};
}
const DEFAULT_STATE: AdminState = {
  thongtinPhong: {},
  thongtinUser: {},
  thongtinPlace: {},
};
const adminSlice = createSlice({
  name: "adminSlice",
  initialState: DEFAULT_STATE,
  reducers: {
    setThongTinPhongAction(
      state: AdminState,
      action: PayloadAction<formDataRoom>
    ) {
      state.thongtinPhong = action.payload;
    },
    setThongTinUserAction(state: AdminState, action: PayloadAction<editUser>) {
      state.thongtinUser = action.payload;
    },
    setThongTinViTriAction(state: AdminState, action: PayloadAction<addPlace>) {
      state.thongtinPlace = action.payload;
    },
  },
});
export const adminReducer = adminSlice.reducer;
export const adminActions = adminSlice.actions;
