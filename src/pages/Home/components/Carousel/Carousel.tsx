import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import "./Carousel.scss"
import { Navigation } from 'swiper/modules';

const image1 = [
  {
    url: "./img/Bắc cực.jpg",
    name: "Bắc cực",
  },
  {
    url: "./img/Bãi biển.jpg",
    name: "Bãi biển",
  },
  {
    url: "./img/Cabin.jpg",
    name: "Cabin",
  },
  {
    url: "./img/Chơi golf.jpg",
    name: "Chơi golf",
  },
  {
    url: "./img/công viên quốc gia.jpg",
    name: "Công viên quốc gia",
  },
  {
    url: "./img/Đảo.jpg",
    name: "Đảo",
  },
  {
    url: "./img/hang động.jpg",
    name: "Hang động",
  },
  {
    url: "./img/Hồ bơi tuyệt vời.jpg",
    name: "Hồ bơi tuyệt vời",
  },
  {
    url: "./img/khung cảnh tuyệt vời.jpg",
    name: "Khung cảnh tuyệt vời",
  },
  {
    url: "./img/lướt sóng.jpg",
    name: "Lướt sóng",
  },
  {
    url: "./img/nhà dưới lòng đất.jpg",
    name: "Nhà dưới lòng đất",
  },
  {
    url: "./img/nhà nhỏ.jpg",
    name: "Nhà nhỏ",
  },
  {
    url: "./img/thật ấn tượng.jpg",
    name: "Thật ấn tượng",
  },
  {
    url: "./img/thiết kế.jpg",
    name: "Thiết kế",
  },
  {
    url: "./img/ven hồ.jpg",
    name: "Ven hồ",
  },
  {
    url: "./img/thiết kế.jpg",
    name: "Thiết kế",
  },
  {
    url: "./img/Khung nhà chữ A.jpg",
    name: "Nhà khung chữ A",
  }
];
export default function Carousel() {
  return (
    <div className="flex container mx-auto sticky top-32">

      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        className="mySwiper text-center"
        modules={[Navigation]}
        navigation={true}
      >
        {image1.map((item, index) => {
          return (
            <SwiperSlide key={index}>     
                <span className="flex flex-col items-center slick-item slick-item-img">
                  <img src={item.url} alt="..." width="24" height="24" />
                  <span>{item.name}</span>  
                </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>

  )
}