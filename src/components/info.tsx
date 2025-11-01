"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import info1 from "../../public/informacion/info 1.jpg";
import info2 from "../../public/informacion/info 2.jpg";
import info3 from "../../public/informacion/info 3.jpg";
import info4 from "../../public/informacion/info 4.jpg";

export default function InfoSwiper() {
  return (
    <section className="w-full py-16">
      {/* Título */}
      <div className="flex justify-center text-center mb-10">
        <h1
          id="objetivos"
          className="py-3 px-7 border border-black bg-[#9D143A] text-white font-bold text-3xl rounded-lg shadow-md"
        >
          INFORMACIÓN ADICIONAL
        </h1>
      </div>

      {/* Carrusel */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {[info1, info2, info3, info4].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg bg-white flex justify-center items-center group">
                <Image
                  src={img}
                  alt={`Imagen informativa ${i + 1}`}
                  className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
