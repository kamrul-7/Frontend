import "./Packages.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
const Packages = () => {
  const slidesPerView = {
    sm: 1,
    md: 4,
  };

  const breakpoints = {
    // Small devices (up to 640px)
    640: {
      slidesPerView: slidesPerView.sm,
      spaceBetween: 20,
    },
    // Medium devices (from 641px to 1024px)
    1024: {
      slidesPerView: slidesPerView.md,
      spaceBetween: 30,
    },
  };

  return (
    <div className="img md:w-[100vw] md:bg-cover">
      <h2 className="font-bold text-xl text-blue-900 text-center md:pt-32 pt-16">
        FIND YOUR POPULAR PACKAGES
      </h2>
      <section className="pb-44 md:pt-16 pt-12 mb-32">
        <Swiper
          slidesPerView={slidesPerView.md}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={breakpoints}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="md:text-xl text-sm md:uppercase text-center md:font-bold bg-white py-3">
              Swimming Package
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="md:text-xl text-sm uppercase text-center md:font-bold bg-white py-3">
              Deluxe Room
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="md:text-xl text-sm uppercase text-center md:font-bold bg-white py-3">
              Family zone
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="md:text-xl text-sm uppercase text-center md:font-bold bg-white py-3">
              Shooting zone
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="md:text-xl text-sm uppercase text-center md:font-bold bg-white py-3">
              Natural place
            </h3>
          </SwiperSlide>
        </Swiper>
        <button className="bg-blue-900 px-4 py-2 rounded-xl text-white md:ml-[40%] md:mt-36 ml-24 hover:bg-blue-700 mt-12">
          VIEW ALL PACKAGES
        </button>
      </section>
    </div>
  );
};

export default Packages;
