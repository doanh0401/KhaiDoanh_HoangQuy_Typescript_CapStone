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
      fetchRoomDetailApi(roomId:string | undefined): Promise<AxiosResponse<any>> {
        return request({
          url: `/phong-thue/${roomId}`,
          method: "GET",
        })
      };
      fetchCommentRoomApi(id:string | undefined): Promise<AxiosResponse<any>> {
        return request({
          url: `/binh-luan/lay-binh-luan-theo-phong/${id}`,
          method: "GET",
        })
      };
      sendCommentApi(data:any): Promise<AxiosResponse<any>> {
        return request({
          url: `/binh-luan`,
          method: "POST",
          data,
        })
      };
      bookingRoomApi(data:any): Promise<AxiosResponse<any>> {
        return request({
          url: `/dat-phong`,
          method: "POST",
          data,
        })
      };
      fetchBookingRoomApi(): Promise<AxiosResponse<any>> {
        return request({
          url: `/dat-phong`,
          method: "GET",
        })
      };
      fetchRoomByCityApi(cityId:string | undefined): Promise<AxiosResponse<any>> {
        return request({
          url: `/phong-thue/lay-phong-theo-vi-tri?maViTri=${cityId}`,
          method: "GET",
        })
      };
      fetchRoomLocationDetailApi(roomId:any): Promise<AxiosResponse<any>> {
        return request({
          url: `/vi-tri/${roomId}`,
          method: "GET",
        })
      };
}
export const roomService: RoomService = new RoomService();