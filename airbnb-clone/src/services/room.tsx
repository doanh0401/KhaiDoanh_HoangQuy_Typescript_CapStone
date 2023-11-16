import { AxiosResponse } from "axios";
import { request } from "../configs/api";
import { RoomByLocationResponse, RoomListResponse } from "../interfaces/room";
import { BASE_URL } from "../constants/api";


class RoomService {
      fetchRoomApi(): Promise<AxiosResponse<RoomListResponse>> {
        return request({
          url: `/phong-thue`,
          method: "GET",
        })
      };
      fetchRoomByLocationApi(): Promise<AxiosResponse<RoomByLocationResponse>> {
        return request({
          url: "/vi-tri",
          method: "GET",
        })
      };
      fetchRoomTicketApi(id:number): Promise<AxiosResponse<any>> {
        return request({
          url: `/dat-phong/lay-theo-nguoi-dung/${id}`,
          method: "GET",
        })
      };
      fetchRoomDetailApi(roomId:number): Promise<AxiosResponse<any>> {
        return request({
          url: `/phong-thue/${roomId}`,
          method: "GET",
        })
      };
}
export const roomService: RoomService = new RoomService();