"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import banner1 from '../../public/banner.jpg';
import banner2 from '../../public/img1.jpg';
import banner3 from '../../public/img5.jpg';

export default function SwiperComponent() {
  return (
    <div className="relative filter w-full h-full md:h-screen"> {/* Contenedor para ajuste dinámico */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        className="w-full h-96 min-h-96 md:h-full object-cover"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="object-contain md:object-cover w-full h-full brightness-90 filter"
              src={banner1}
              alt="Imagen representativa acerca de informacion relevante"
              layout="fill"
            />
            <div className="absolute m-0 md:m-20 bottom-0 left-0 w-full bg-[#9D143A] md:bg-none p-4">
              <h2 className="text-xl md:text-5xl font-bold text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]
              md:[text-shadow:_0_3px_6px_rgba(0,0,0,0.6)]           
              lg:[text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">
                Bienvenido a nuestra plataforma</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="object-contain md:object-cover w-full h-full brightness-90 filter"
              src={banner2}
              alt="Imagen representativa acerca de informacion relevante"
              layout="fill"
            />
            <div className="absolute m-0 md:m-20 bottom-0 left-0 bg-[#9D143A] md:bg-none w-full p-4">
              <h2 className="text-2xl md:text-5xl  font-bold text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]
              md:[text-shadow:_0_3px_6px_rgba(0,0,0,0.6)]           
              lg:[text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">
                Innovación y futuro juntos</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="object-contain md:object-cover w-full h-full brightness-90 filter"
              src={banner3}
              alt="Imagen representativa acerca de informacion relevante"
              layout="fill"
            />
            <div className="m-0 md:m-20 absolute bottom-0 bg-[#9D143A] md:bg-none left-0 w-full p-4">
              <h2 className="text-2xl md:text-5xl  font-bold text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]
              md:[text-shadow:_0_3px_6px_rgba(0,0,0,0.6)]           
              lg:[text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">
                Comprometidos con el éxito</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Botones de navegación con color rojo */}
      {/* <div className="swiper-button-next text-red-500 px-7 py-10 -mx-4 bg-[#9D143A] hover:text-red-700 transition-all duration-300 absolute top-1/2 -translate-y-1/2 left-2 md:left-auto md:right-2"></div>
      <div className="swiper-button-prev text-red-500 px-7 py-10 -mx-4 bg-[#9D143A] hover:text-red-700 transition-all duration-300 absolute top-1/2 -translate-y-1/2 md:right-auto "></div> */}
{/* <div className="swiper-button-next text-red-500 px-4 py-7 md:px-7 md:py-10 -mx-4 bg-[#9D143A] hover:text-red-700 transition-all duration-300 absolute top-1/2 -translate-y-1/2 right-2 md:block hidden"></div> */}
{/* <div className="swiper-button-prev text-red-500 px-4 py-7 md:px-7 md:py-10 -mx-4 bg-[#9D143A] hover:text-red-700 transition-all duration-300 absolute top-1/2 -translate-y-1/2 left-2 md:block hidden"></div> */}


    </div>
  );
}
