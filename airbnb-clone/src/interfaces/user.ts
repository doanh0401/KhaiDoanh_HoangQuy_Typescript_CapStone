export interface UserLogin {
  email: string;
  matKhau: string;
}
export interface UserRegister {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
}