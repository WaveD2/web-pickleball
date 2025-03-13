import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/pagination.css";

import courses from "../../data/courses";
import LazyImage from "../commom/LazyImage";
import { FaArrowRight,FaPhoneVolume } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const CourseSlider = () => {
  return (
    <section className='py-10 bg-gray-100 container-section bg-primary'>
      <h2 className='title_selection mt-3'>
        Khóa Học pickleball
      </h2>
      <Swiper
        modules={[Navigation, Pagination,Autoplay ]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true , dynamicBullets: true, }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="my-6 px-4 md:px-12 mySwiper z0"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="relative group shadow-lg pb-24">
              <LazyImage
                src={course.image}
                alt={course.title}
                className="w-full object-cover cursor-pointer rounded-sm "
              />
               <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-center rounded-md shadow-lg w-10/12 p-8 transition-all duration-300">
                <h3 className="font-semibold text-md md:text-lg pb-8 uppercase leading-tight">
                  {course.title}
                </h3>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-sm flex items-center justify-center gap-2 font-semibold hover:bg-gray-200 transition mx-auto">
                  Đăng ký tập thử <FaArrowRight />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full before:content-[''] before:block before:h-0.5 before:bg-gray-300 my-10"></div>
       <div className="w-full text-center text-white my-10 px-4">
      {/* Phần tiêu đề */}
      <h3 className="text-lg md:text-xl font-medium">
        Bạn còn phân vân về Khóa Học? VNTA Academy sẽ gửi tặng bạn 01 buổi tập demo{" "}
        <span className="font-bold text-orange-400">HOÀN TOÀN MIỄN PHÍ.</span>
      </h3>

      {/* Phần mô tả */}
      <p className="mt-2 text-base md:text-lg">Hoặc liên hệ trực tiếp với chúng tôi:</p>

      {/* Phần thông tin liên hệ */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4 text-lg">
        <p className="flex items-center gap-2">
          <FaPhoneVolume className="text-orange-400" />{" "}
          <span className="font-semibold">Điện thoại: 0931 81 3333</span>
        </p>
        <p className="flex items-center gap-2">
          <SiGmail className="text-orange-400" />{" "}
          <span className="font-semibold">Email: info@vntaacademy.com</span>
        </p>
      </div>
    </div>
    </section>
  );
};

export default CourseSlider;
 