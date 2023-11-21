export interface UserType {
  id: number;
  avatar: string;
  name: string;
  email: string;
  password: string;
  age: number;
  birthday: string;
}
export interface RoomType {
  id: number;
  hinhAnh: string;
  tenPhong: string;
  khach: number;
  moTa: string;
  giaTien: number;
}
export interface PlaceType {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}
export interface formDataRoom {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat:boolean;
  banLa:boolean;
  tivi:boolean;
  dieuHoa:boolean;
  wifi:boolean;
  bep:boolean;
  doXe:boolean;
  hoBoi:boolean;
  banUi:boolean;
  maViTri: number;
  hinhAnh: string;
}
export interface addUser{
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  birthday: string,
  gender: boolean,
  role: string
}
export interface editUser{
  id: number,
  name: string,
  email: string,
  phone: string,
  birthday: string,
  gender: boolean,
  role: string
}
export interface addPlace{
  id: number,
  tenViTri: string,
  tinhThanh: string,
  quocGia: string,
  hinhAnh: string
}