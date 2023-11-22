import { FilterOutlined } from "@ant-design/icons";
import "./RoomByMaViTri.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, redirect, useParams } from "react-router-dom";
import { roomService } from "../../services/room";
import { Keyboard, Pagination, Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PersonIcon from "@mui/icons-material/Person";
import KingBedIcon from "@mui/icons-material/KingBed";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ShowerIcon from "@mui/icons-material/Shower";
import IronIcon from "@mui/icons-material/Iron";
import CountertopsIcon from "@mui/icons-material/Countertops";
import TvIcon from "@mui/icons-material/Tv";
import WifiIcon from "@mui/icons-material/Wifi";
import { AiFillStar } from "react-icons/ai";

export default function RoomByMaViTri() {
  const userState = useSelector((state: any) => state.userReducer);
  const handleBooking = (roomId: string) => {
    if (userState) {
      redirect(`/room-detail/${roomId}`);
    } else {
      redirect("/login");
    }
  };
  const { maViTri } = useParams();
  const [room, setRoom] = useState<any>([]);
  const fetchRoom = async () => {
    const result = await roomService.fetchRoomByMaVTApi(maViTri);
    setRoom(result.data.content);
  };
  useEffect(() => {
    fetchRoom();
  }, []);
  const renderRoom = () => {
    return room.map((element: any) => {
      return (
        <div className="col-6" style={{ marginBottom: "15px" }}>
          <Link
            key={element.id}
            to={`/room-detail/${element.id}`}
            className="roomLink"
          >
            <Swiper
              slidesPerView={1}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="roomSwiper"
              onClick={() => handleBooking(element.id)}
            >
              <SwiperSlide>
                <img src={element.hinhAnh} alt="..." className="w-" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={element.hinhAnh} alt="..." className="w-" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={element.hinhAnh} alt="..." className="w-" />
              </SwiperSlide>
              <button className="absolute top-3 right-3 z-30">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="icon-heart"
                >
                  <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
                </svg>
              </button>
            </Swiper>
            <div>
              <p className="flex justify-between mt-2">
                <span className="font-bold truncate">{element.tenPhong}</span>
                <span className="flex justify-between items-center ml-1">
                  <span className="ml-2 text-yellow-500 mx-1">
                    <AiFillStar />
                  </span>
                  9.14
                </span>
              </p>
              <p className="text-sm mt-2">
                <span className="flex items-center">
                  <span className="font-semibold text-gray-600 mr-1">
                    Sức chứa:
                  </span>
                  {element?.khach > 0 && element?.khach <= 8 && (
                    <span className="flex">
                      {[...Array(element.khach)].map((_, index) => (
                        <PersonIcon
                          fontSize="small"
                          key={index}
                          className="inline text-gray-500"
                        />
                      ))}
                    </span>
                  )}
                </span>
                <span className="flex items-center mt-2">
                  <span className="font-semibold text-gray-600 mr-1">
                    Giường:
                  </span>
                  {element?.giuong > 0 && element?.giuong <= 8 && (
                    <span className="flex">
                      {[...Array(element.giuong)].map((_, index) => (
                        <KingBedIcon
                          fontSize="small"
                          key={index}
                          className="inline text-gray-500"
                        />
                      ))}
                    </span>
                  )}
                </span>
                <span className="flex items-center mt-2">
                  <span className="font-semibold text-gray-600 mr-1">
                    Phòng tắm:
                  </span>
                  {element?.phongTam > 0 && element?.phongTam <= 8 && (
                    <span className="flex">
                      {[...Array(element.phongTam)].map((_, index) => (
                        <ShowerIcon
                          fontSize="small"
                          key={index}
                          className="inline text-gray-500"
                        />
                      ))}
                    </span>
                  )}
                </span>
                <span className="flex items-center font-semibold text-gray-600 mt-2">
                  Các tiện ích:
                  {element.dieuHoa && (
                    <AcUnitIcon className="inline text-gray-500 ml-2" />
                  )}
                  {element.banUi && (
                    <IronIcon className="inline text-gray-500 ml-2" />
                  )}
                  {element.bep && (
                    <CountertopsIcon className="inline text-gray-500 ml-2" />
                  )}
                  {element.doXe && (
                    <DirectionsCarIcon className="inline text-gray-500 ml-2" />
                  )}
                  {element.tivi && (
                    <TvIcon className="inline text-gray-500 ml-2" />
                  )}
                  {element.wifi && (
                    <WifiIcon className="inline text-gray-500 ml-2" />
                  )}
                </span>
              </p>
              <p className="mt-1 text-xl text-gray-700">
                <span className="font-bold text-2xl text-gray-900">
                  ${element.giaTien}
                </span>
                <span className="text-base text-gray-500">/đêm</span>
              </p>
            </div>
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="container mx-auto">
      <div className="h-28"></div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="flex flex-wrap justify-between items-center py-3 ml-4">
            <span className="font-semibold">Hơn 1.000 chổ ở</span>
            <button
              type="button"
              className="filter text-gray-900 bg-white border border-gray-300"
            >
              <FilterOutlined />
              <span style={{ marginLeft: "5px" }}>Bộ lọc</span>
            </button>
          </div>
          <div className="row">{renderRoom()}</div>
        </div>
        <div className="col-md-6 h-screen w-full hidden md:block sticky top-28">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7865141.73985601!2d100.61642350148527!3d15.729899273359116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1700457505861!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
