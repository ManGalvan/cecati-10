// import Image from 'next/image';
import type { Metadata } from "next";
// import banner from '../../../public/banner.jpeg'
import Card from '@/components/card';
import SwiperComponent from "@/components/swiper";
import MapEmbed from "@/components/map";
import Cursos from "@/components/cursos";

export const metadata: Metadata = {
    title: "Inicio - Cecati 10",
    description: "Pagina de inicio de la escuela educativa conocida como Cecati 10",
  };

export default function Home() {
  return (
    <>
        <div className='relative flex items-center justify-center overflow-hidden'>
            {/* <video className="flex items-center justify-center w-full -z-10 object-cover" muted loop autoPlay>
                <source src="https://cdntec.azureedge.net/tec-mx/videos/ES_PorQueNo_191x1.mp4" />
            </video> */}
            {/* <Image
                  className="flex items-center justify-center -z-10 object-cover dark:invert"
                  src={banner}
                  alt="Banner de información"
                /> */}
                <SwiperComponent />
        </div>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Card />
                <Cursos/>
                <MapEmbed />
              </main>
            </div>
    </>
  );
}
