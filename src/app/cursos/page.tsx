// import Image from 'next/image';
import type { Metadata } from "next";
import Image from "next/image";
import banner from "../../../public/banners/banner.jpg";
import cnc from "../../../public/cursos/cnc.jpg";
import dibujo from "../../../public/cursos/dibujo.jpg";
import soldadura from "../../../public/cursos/soldadura.jpg";
import alimentos1 from "../../../public/cursos/alimentos/alimentos 1.jpg";
import alimentos2 from "../../../public/cursos/alimentos/alimentos 2.jpg";
import alimentos3 from "../../../public/cursos/alimentos/alimentos 3.jpg";
import alimentos4 from "../../../public/cursos/alimentos/alimentos 4.jpg";
import electricidad1 from "../../../public/cursos/electricidad/electricidad 1.jpg";
import electricidad2 from "../../../public/cursos/electricidad/electricidad 2.jpg";
import informatica1 from "../../../public/cursos/informatica/informatica 1.jpg";
import informatica2 from "../../../public/cursos/informatica/informatica 2.jpg";
import informatica3 from "../../../public/cursos/informatica/informatica 3.jpg";
import maquinas1 from "../../../public/cursos/maquinas/maquinas 1.jpg";
import maquinas2 from "../../../public/cursos/maquinas/maquinas 2.jpg";
import maquinas3 from "../../../public/cursos/maquinas/maquinas 3.jpg";
import mecatronica1 from "../../../public/cursos/mecatronica/mecatronica 1.jpg";
import mecatronica2 from "../../../public/cursos/mecatronica/mecatronica 2.jpg";
import mecatronica3 from "../../../public/cursos/mecatronica/mecatronica 3.jpg";
import mtto1 from "../../../public/cursos/mtto/mtto 1.jpg";
import mtto2 from "../../../public/cursos/mtto/mtto 2.jpg";
import mtto3 from "../../../public/cursos/mtto/mtto 3.jpg";
import opto1 from "../../../public/cursos/opto/opto 1.jpg";
import opto2 from "../../../public/cursos/opto/opto 2.jpg";
import opto3 from "../../../public/cursos/opto/opto 3.jpg";
import refri1 from "../../../public/cursos/refri/refri 1.jpg";
import refri2 from "../../../public/cursos/refri/refri 2.jpg";
import refri3 from "../../../public/cursos/refri/refri 3.jpg";

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
        {/* CARD CURSO CNC */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={cnc}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO CNC*/}
        {/* CARD CURSO DIBUJO */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={dibujo}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO DIBUJO*/}
        {/* CARD CURSO SOLDADURA */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={soldadura}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO SOLDADURA*/}
        {/* CARD CURSO ALIMENTOS 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={alimentos1}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO ALIMENTOS 1*/}
        {/* CARD CURSO ALIMENTOS 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={alimentos2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO ALIMENTOS 2*/}
        {/* CARD CURSO ALIMENTOS 3 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={alimentos3}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO ALIMENTOS 3*/}
        {/* CARD CURSO ALIMENTOS 4 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={alimentos4}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO ALIMENTOS 4*/}
        {/* CARD CURSO ELECTRICIDAD 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={electricidad1}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO ELECTRICIDAD 1*/}
        {/* CARD CURSO ELECTRICIDAD 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={electricidad2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO ELECTRICIDAD 2*/}
        {/* CARD CURSO INFORMATICA 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={informatica1}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO INFORMATICA 1*/}
        {/* CARD CURSO INFORMATICA 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={informatica2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO INFORMATICA 2*/}
        {/* CARD CURSO INFORMATICA 3 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={informatica3}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO INFORMATICA 3*/}
        {/* CARD CURSO MAQUINAS 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={maquinas1}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MAQUINAS 1*/}
        {/* CARD CURSO MAQUINAS 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={maquinas2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MAQUINAS 2*/}
        {/* CARD CURSO MAQUINAS 3 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={maquinas3}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MAQUINAS 3*/}
        {/* CARD CURSO MECATRONICA 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={mecatronica1}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MECATRONICA 1*/}
        {/* CARD CURSO MECATRONICA 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={mecatronica2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MECATRONICA 2*/}
        {/* CARD CURSO MECATRONICA 3 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={mecatronica3}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MECATRONICA 3*/}
        {/* CARD CURSO MTTO 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={mtto1}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MTTO 1*/}
        {/* CARD CURSO MTTO 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={mtto2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MTTO 2*/}
        {/* CARD CURSO MTTO 3 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={mtto3}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO MTTO 3*/}
        {/* CARD CURSO OPTO 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={opto1}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO OPTO 1*/}
        {/* CARD CURSO OPTO 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={opto2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO OPTO 2*/}
        {/* CARD CURSO OPTO 3 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={opto3}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO OPTO 3*/}
        {/* CARD CURSO REFRI 1 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={refri1}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO REFRI 1*/}
        {/* CARD CURSO REFRI 2 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={refri2}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO REFRI 2*/}
        {/* CARD CURSO REFRI 3 */}
        <div className="self-center m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={refri3}
            alt="Technology acquisitions"
            width={400}
            height={300}
          />
        </div>
        {/*END CARD CURSO REFRI 3*/}
      </div>
    </div>
    </>
  );
}
