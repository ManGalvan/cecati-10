"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import banner1 from '../../public/banner.jpeg';
import banner2 from '../../public/banner.jpeg';
import banner3 from '../../public/banner.jpeg';

export default function SwiperComponent() {
  return (
    <>
      <div className="relative w-full h-screen"> {/* Contenedor para ajuste dinámico */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000 }}
          className="w-full h-full object-cover"
        >
          <SwiperSlide>
            <Image
              className="object-contain w-full h-full" // Cambié a object-contain
              src={banner1}
              alt="Imagen representativa acerca de informacion relevante"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="object-contain w-full h-full" // Cambié a object-contain
              src={banner2}
              alt="Imagen representativa acerca de informacion relevante"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="object-contain w-full h-full" // Cambié a object-contain
              src={banner3}
              alt="Imagen representativa acerca de informacion relevante"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>

        {/* Botones de navegación con color rojo */}
        <div className="swiper-button-next text-red-500 hover:text-red-700 transition-all duration-300"></div>
        <div className="swiper-button-prev text-red-500 hover:text-red-700 transition-all duration-300"></div>
      </div>
    </>
  );
}
