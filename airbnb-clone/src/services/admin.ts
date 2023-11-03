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
}
export const adminService: AdminService = new AdminService();
