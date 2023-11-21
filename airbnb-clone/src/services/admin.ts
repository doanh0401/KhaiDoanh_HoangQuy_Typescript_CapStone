import axios from "axios";
import { request } from "../configs/api";
class AdminService {
  listRooms() {
    return request({
      url: `/phong-thue`,
      method: `GET`,
    });
  }
  listUsers() {
    return request({
      url: `/users`,
      method: "GET",
    });
  }
  listPlaces() {
    return request({
      url: `/vi-tri`,
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
  uploadImgApi(maPhong: any, formFile: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/upload-hinh-phong?maPhong=${maPhong}`,
      method: "POST",
      data: formFile,
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyODEiLCJlbWFpbCI6ImFzZGZnaEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTkwNzUxNzAsImV4cCI6MTY5OTY3OTk3MH0.NEFStt2nvLa7Io5NxebE-TkaEhYPHF71SoDbQauvGlw",
      },
    });
  }
  layThongTinPhongApi(id: any) {
    return request({
      url: `/phong-thue/${id}`,
      method: "GET",
    });
  }
  capNhatPhongApi(id: any, formData: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/${id}`,
      method: "PUT",
      data: formData,
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyODEiLCJlbWFpbCI6ImFzZGZnaEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTkwNzUxNzAsImV4cCI6MTY5OTY3OTk3MH0.NEFStt2nvLa7Io5NxebE-TkaEhYPHF71SoDbQauvGlw",
      },
    });
  }
  xoaPhongApi(id: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/${id}`,
      method: "DELETE",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyODEiLCJlbWFpbCI6ImFzZGZnaEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTkwNzUxNzAsImV4cCI6MTY5OTY3OTk3MH0.NEFStt2nvLa7Io5NxebE-TkaEhYPHF71SoDbQauvGlw",
      },
    });
  }
  themUserApi(formData: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/users`,
      method: "POST",
      data: formData,
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    });
  }
  xoaUserApi(id: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/users?id=${id}`,
      method: "DELETE",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    });
  }
  layThongTinUser(id: any) {
    return request({
      url: `/users/${id}`,
      method: "GET",
    });
  }
  capNhatUserApi(id: any, formData: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/users/${id}`,
      method: "PUT",
      data: formData,
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    });
  }
  themViTriApi(formData: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri`,
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
  xoaViTriApi(id: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/${id}`,
      method: "DELETE",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyODEiLCJlbWFpbCI6ImFzZGZnaEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTkwNzUxNzAsImV4cCI6MTY5OTY3OTk3MH0.NEFStt2nvLa7Io5NxebE-TkaEhYPHF71SoDbQauvGlw",
      },
    });
  }
  uploadImgViTriApi(maViTri: any, formFile: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/upload-hinh-vitri?maViTri=${maViTri}`,
      method: "POST",
      data: formFile,
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyODEiLCJlbWFpbCI6ImFzZGZnaEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTkwNzUxNzAsImV4cCI6MTY5OTY3OTk3MH0.NEFStt2nvLa7Io5NxebE-TkaEhYPHF71SoDbQauvGlw",
      },
    });
  }
  layThongTinViTriApi(id: any) {
    return request({
      url: `/vi-tri/${id}`,
      method: "GET",
    });
  }
  capNhatViTriApi(id: any, formData: any) {
    return axios({
      url: `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/${id}`,
      method: "PUT",
      data: formData,
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyODEiLCJlbWFpbCI6ImFzZGZnaEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2OTkwNzUxNzAsImV4cCI6MTY5OTY3OTk3MH0.NEFStt2nvLa7Io5NxebE-TkaEhYPHF71SoDbQauvGlw",
      },
    });
  }
  searchRoomApi(keyword:any){
    return request({
      url: `/phong-thue/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
      method:"GET",
    })
  }
  searchUserApi(keyword:any){
    return request({
      url: `/users/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
      method:"GET",
    })
  }
  searchPlaceApi(keyword:any){
    return request({
      url: `/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
      method:"GET",
    })
  }
}

export const adminService: AdminService = new AdminService();
