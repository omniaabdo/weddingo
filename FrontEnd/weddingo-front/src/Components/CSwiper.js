import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import single_service_1 from "../assets/images/single-services/1.jpg";
import { BASE_URL } from "../utils/config";
export default function CSwiper({ dir, data }) {
  return (
    <>
      <Swiper
        dir={dir}
        key={dir}
        breakpoints={{
          320: {
            slidesPerView: 1, // عرض شريحة واحدة على الشاشات الصغيرة
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, // عرض شريحتين عند العرض أكبر من 640 بكسل
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // عرض 3 شرائح على الشاشات المتوسطة
            spaceBetween: 30,
          },
        }}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
      >
        {data.map((item) => (
          <>
            <SwiperSlide>
              <div className="card swiper-card">
                <img
                  src={item.images[0] && `${BASE_URL}/image/${item.images[0]}`}
                  alt=""
                />
                <h6>{item.name}</h6>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
}
