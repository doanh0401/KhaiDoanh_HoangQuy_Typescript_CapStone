import axios from "axios";
import { request } from "../configs/api";
class AdminService {
  listRooms() {
    return request({
      url: `/api/phong-thue`,
      method: `GET`,
    });
  }
  listUsers() {
    return request({
      url: `/api/users`,
      method: "GET",
    });
  }
  listPlaces() {
    return request({
      url: `/api/vi-tri`,
      method: "GET",
    });
  }
  addRoomApi(formData: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/phong-thue`,
      method: "POST",
      data: formData,
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyODEiLCJlbWFpbCI6ImFzZGZnaEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTkwNzUxNzAsImV4cCI6MTY5OTY3OTk3MH0.NEFStt2nvLa7Io5NxebE-TkaEhYPHF71SoDbQauvGlw",
      },
    });
  }
  uploadImgApi(id: any, formData: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/upload-hinh-phong?maPhong=${id}`,
      method: "POST",
      data: formData,
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyODEiLCJlbWFpbCI6ImFzZGZnaEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTkwNzUxNzAsImV4cCI6MTY5OTY3OTk3MH0.NEFStt2nvLa7Io5NxebE-TkaEhYPHF71SoDbQauvGlw",
      },
    });
  }
}

export const adminService: AdminService = new AdminService();
