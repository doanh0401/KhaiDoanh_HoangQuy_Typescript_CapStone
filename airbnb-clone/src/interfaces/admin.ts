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
