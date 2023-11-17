import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomDto } from "../../interfaces/room";


interface RoomState {
  roomInfo: RoomDto | null;
}
const DEFAULT_STATE : RoomState = {
  roomInfo: null,
};

const roomSlice = createSlice({
  name: "roomSlice",
  initialState: DEFAULT_STATE,
  reducers: {
    setRoomInfo(state: RoomState, action: PayloadAction<any>) {
      state.roomInfo = action.payload;
    },
  },
});

export const roomReducer = roomSlice.reducer;
export const roomActions = roomSlice.actions;