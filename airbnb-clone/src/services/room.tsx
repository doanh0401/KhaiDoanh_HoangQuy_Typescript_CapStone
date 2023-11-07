import { AxiosResponse } from "axios";
import { request } from "../configs/api";
import { RoomListResponse } from "../interfaces/room";
import { BASE_URL } from "../constants/api";


class RoomService {
    fetchRoomApi(): Promise<AxiosResponse<RoomListResponse>> {
        return request({
          url: `/phong-thue`,
          method: "GET",
        })
      };
}
export const roomService: RoomService = new RoomService();