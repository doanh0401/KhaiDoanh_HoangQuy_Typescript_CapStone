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
}
export const adminService: AdminService = new AdminService();
