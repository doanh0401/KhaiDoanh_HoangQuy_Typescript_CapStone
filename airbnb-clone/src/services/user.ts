import axios from "axios";
import { request } from "../configs/api";
import { UserLogin, UserRegister } from "../interfaces/user";

class UserService {
  loginUser(data: UserLogin) {
    return request({
      url: "/auth/signin",
      method: "POST",
      data,
    });
  }
  signUpUser(data: UserRegister) {
    return request({
      url: `/auth/signup`,
      method: "POST",
      data,
    });
  }
  
}
export const userService: UserService = new UserService();
