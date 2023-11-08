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
