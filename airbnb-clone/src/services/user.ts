import { request } from "../configs/api";
import { UserDisplay, UserLogin, UserRegister } from "../interfaces/user";

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
  userInfoApi(id:string) {
    return request({
      url: `/users/${id}`,
      method: "GET",
    })
  }
  updateUserInfoApi(id:string, data:UserDisplay) {
    return request({
      url: `/users/${id}`,
      method: "PUT",
      data,
    })
  }
  uploadAvatarApi(formData:any) {
    return request({
      url:`/users/upload-avatar`,
      method:"POST",
      data:formData,
    })
  }
}
export const userService: UserService = new UserService();
