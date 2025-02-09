import React from "react";
import Image from "next/image";
import Maquinas from "../../public/Maq y herr.jpg";
import Electricidad from "../../public/Electricidad.jpg"
import Soporte from "../../public/Soporte.jpg"

export default function Cursos() {
  return (
    <>
    <div className="flex justify-center w-full -translate-y-32 md:-translate-y-20 text-center mt-10">
        <h1 id="objetivos" className="py-3 px-7 translate-y-3/4 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
            ALGUNOS DE NUESTROS CURSOS
        </h1>
    </div>
    <div className="w-full flex flex-col lg:flex-row lg:justify-between">
        {/* CARD MAQUINAS Y HERRAMIENTAS */}
        <div className="self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src={Maquinas}
              alt="Technology acquisitions"
              width={400}
              height={300}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Máquinas y herramientas
              </h5>
            </a>
            <p className="text-justify font-normal text-gray-700 dark:text-gray-400">
            Las máquinas herramientas se utilizan para: 
            Fabricar piezas metálicas y no metálicas
            Cortar bloques de materiales sólidos, se utiliza para realizar  trabajos mecánicos.
            </p>
            {/* <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-center text-white bg-[#9D143A] rounded-lg hover:bg-[#662236] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a> */}
          </div>
        </div>
        {/*END CARD MAQUINAS Y HERRAMIENTAS */}
        {/* CARD ELECTRICIDAD */}
        <div className="self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src={Electricidad}
              alt="Technology acquisitions"
              width={400}
              height={300}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Electricidad
              </h5>
            </a>
            <p className="text-justify mb-3 font-normal text-gray-700 dark:text-gray-400">
            Soporte a instalaciones eléctricas y motores eléctricos.
            En estos cursos se aprende a interpretar y elaborar planos, así como a tomar decisiones sobre las protecciones eléctricas y el cableado necesario en base a la norma NOM 001 sede 2012.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a> */}
          </div>
        </div>
        {/*END CARD ELECTRICIDAD*/}
        {/* CARD SOPORTE */}
        <div className="self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src={Soporte}
              alt="Technology acquisitions"
              width={400}
              height={300}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Soporte técnico
              </h5>
            </a>
            <p className="text-justify mb-3 font-normal text-gray-700 dark:text-gray-400">
            En este curso lo que se realiza es el diagnóstico de fallas a equipos de cómputo a través de las diferentes herramientas físicas, así como de software.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a> */}
          </div>
        </div>
        {/*END CARD SOPORTE*/}
    </div>
    </>
  );
}
