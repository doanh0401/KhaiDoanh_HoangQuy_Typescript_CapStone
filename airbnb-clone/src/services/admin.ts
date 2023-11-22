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
    return request({
      url: `/phong-thue`,
      method: "POST",
      data: formData,
    });
  }
  uploadImgApi(maPhong: any, formFile: any) {
    return request({
      url: `/phong-thue/upload-hinh-phong?maPhong=${maPhong}`,
      method: "POST",
      data: formFile,
    });
  }
  layThongTinPhongApi(id: any) {
    return request({
      url: `/phong-thue/${id}`,
      method: "GET",
    });
  }
  capNhatPhongApi(id: any, formData: any) {
    return request({
      url: `/phong-thue/${id}`,
      method: "PUT",
      data: formData,
    });
  }
  xoaPhongApi(id: any) {
    return request({
      url: `/phong-thue/${id}`,
      method: "DELETE",
    });
  }
  themUserApi(formData: any) {
    return request({
      url: `/users`,
      method: "POST",
      data: formData,
    });
  }
  xoaUserApi(id: any) {
    return request({
      url: `/users?id=${id}`,
      method: "DELETE",
    });
  }
  layThongTinUser(id: any) {
    return request({
      url: `/users/${id}`,
      method: "GET",
    });
  }
  capNhatUserApi(id: any, formData: any) {
    return request({
      url: `/users/${id}`,
      method: "PUT",
      data: formData,
    });
  }
  themViTriApi(formData: any) {
    return request({
      url: `/vi-tri`,
      method: "POST",
      data: formData,
    });
  }
  xoaViTriApi(id: any) {
    return request({
      url: `/vi-tri/${id}`,
      method: "DELETE",
    });
  }
  uploadImgViTriApi(maViTri: any, formFile: any) {
    return request({
      url: `/vi-tri/upload-hinh-vitri?maViTri=${maViTri}`,
      method: "POST",
      data: formFile,
    });
  }
  layThongTinViTriApi(id: any) {
    return request({
      url: `/vi-tri/${id}`,
      method: "GET",
    });
  }
  capNhatViTriApi(id: any, formData: any) {
    return request({
      url: `/vi-tri/${id}`,
      method: "PUT",
      data: formData,
    });
  }
  searchRoomApi(keyword: any) {
    return request({
      url: `/phong-thue/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
      method: "GET",
    });
  }
  searchUserApi(keyword: any) {
    return request({
      url: `/users/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
      method: "GET",
    });
  }
  searchPlaceApi(keyword: any) {
    return request({
      url: `/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
      method: "GET",
    });
  }
}

export const adminService: AdminService = new AdminService();
