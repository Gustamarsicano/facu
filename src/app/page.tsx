"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import SwiperOne from "@/components/SwiperOne";
import SwiperTwo from "@/components/SwiperTwo";
import SwiperThree from "@/components/SwiperThree";
import SwiperFour from "@/components/SwiperFour";

export default function Page() {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SwiperOne />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperTwo />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperThree />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperFour />
      </SwiperSlide>

    </Swiper>
  );
}
