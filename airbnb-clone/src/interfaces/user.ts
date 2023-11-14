export interface UserLogin {
  email: string;
  password: string;
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

export interface UserDisplay {
    name: string,
    birthday: string,
    email: string,
    phone: string,
    gender: boolean,
}