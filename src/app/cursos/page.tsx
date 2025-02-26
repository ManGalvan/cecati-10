// import Image from 'next/image';
import type { Metadata } from "next";
import Image from "next/image";
import banner from "../../../public/banner.jpg";
import Curso1 from "../../../public/curso1.jpg";
import Curso2 from "../../../public/curso2.jpg";
import Curso3 from "../../../public/curso3.jpg";
import Curso4 from "../../../public/curso4.jpg";
import Curso5 from "../../../public/curso5.jpg";
import Curso6 from "../../../public/curso6.jpg";
import Curso7 from "../../../public/curso7.jpg";
import Curso8 from "../../../public/curso8.jpg";
import Curso9 from "../../../public/curso9.jpg";
import Curso10 from "../../../public/curso10.jpg";
// import banner from '../../../public/banner.jpeg'
//import Card from '@/components/card';
//import SwiperComponent from "@/components/swiper";
//import MapEmbed from "@/components/map";
//  import Cursos from "@/components/cursos";

export const metadata: Metadata = {
    title: "Inicio - Cecati 10",
    description: "Pagina de inicio de la escuela educativa conocida como Cecati 10",
  };

export default function Home() {
  return (
    <>
    <div className="w-full h-full relative">
      <div className="relative flex items-center justify-center overflow-hidden flex-col mb-10">
        <Image
          className="rounded-t-lg"
          src={banner}
          alt="Technology acquisitions"
        />
        <div className="relative m-0 bottom-0 left-0 bg-[#9D143A] md:bg-none p-4">
          <h2 className="text-xl text-center md:text-4xl font-bold text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]
          md:[text-shadow:_0_3px_6px_rgba(0,0,0,0.6)]           
          lg:[text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">
            ¡Ven y capacítate con nosotros en los próximos cursos a iniciar!</h2>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
        {/* CARD CURSO 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso1}
            alt="Technology acquisitions"
          />
        </div>
        {/*END CARD CURSO 1 */}
        {/* CARD CURSO 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 2*/}
        {/* CARD CURSO 3 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso3}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 3*/}
        {/* CARD CURSO 4 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso4}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 4*/}
        {/* CARD CURSO 5 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso5}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 5*/}
        {/* CARD CURSO 6 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso6}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 6*/}
        {/* CARD CURSO 7 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso7}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 7*/}
        {/* CARD CURSO 8 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso8}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 8*/}
        {/* CARD CURSO 9 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso9}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 9*/}
        {/* CARD CURSO 10 */}
        <div className="lg:col-span-3 m-5 self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={Curso10}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO 10*/}
      </div>
    </div>
    </>
  );
}
