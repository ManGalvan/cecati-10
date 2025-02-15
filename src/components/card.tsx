import "@/components/css/card.css";

export default function Card() {
  return (
    <>
      {/* Contenedor que centrará 'NUESTROS OBJETIVOS' */}
      <div className="flex justify-center w-full -translate-y-32 md:-translate-y-20 text-center">
        <h1 id="objetivos" className="py-3 px-7 translate-y-3/4 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
          NUESTROS OBJETIVOS
        </h1>
      </div>
      {/* Las otras cards estarán dentro de su propio contenedor */}
      <div className="relative mx-2 my-12 md:m-16 ">
        <div id="politica" className="absolute py-3 px-7 -left-8 -top-2 -translate-y-3/4 translate-x-1 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
          POLÍTICA DE CALIDAD
        </div>
        <div className="purple_border p-8 border border-black">
          La dirección general de centros de formación para el trabajo, tiene el compromiso de proporcionar servicios
          de calidad certificada en capacitación para y en el trabajo, asegurando la satisfacción de nuestros clientes
          y usuarios, buscando siempre la mejora continua de nuestros procesos, a través del Sistema de Gestión de Calidad.
        </div>
      </div>
      <div className="relative mx-2 my-12 md:m-16 ">
        <div id="mision" className="absolute py-3 px-7 right-0 -top-2 -translate-y-3/4 translate-x-5 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
          MISIÓN
        </div>
        <div className="purple_border p-8 border border-black">
          Capacitar permanentemente para y en el trabajo en diferentes especialidades a corto plazo, a mujeres y hombres
          de 15 años en adelante, así como certificar las competencias adquiridas por las personas de manera empírica, contribuyendo
          a su desarrollo humano; fomentando una actitud analítica, emprendedora, creativa y sustentable para su inserción
          en el mercado laboral o autoempleo; coadyuvando así al desarrollo social y económico del país, a través de una estructura
          de servicios flexible, equitativa, de calidad y pertinente.
        </div>
      </div>
      <div className="relative mx-2 my-12 md:m-16 ">
        <div id="vision" className="absolute py-3 px-7 -left-8 -top-2 -translate-y-3/4 translate-x-1 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
          VISIÓN
        </div>
        <div className="purple_border p-8 border border-black">
          Ser la primera opción de capacitación para el trabajo a nivel estatal, por la calidad de su servicio educativo
          sustentada en el compromiso de sus trabajadores, consolidandose como el principal proveedor de personas capacitadas
          para el sector productivo o el autoempleo.
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-around gap-10">
        <div className="relative mx-2 my-12 md:m-16 ">
          <div id="mision" className="absolute py-3 px-7 right-0 -top-2 -translate-y-3/4 translate-x-5 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
            VALORES
          </div>
          <div className="purple_border p-8 border border-black">
            <ul>
              <li>Orgullo por la institución</li>
              <li>Responsabilidad</li>
              <li>Honestidad</li>
              <li>Comportamiento ético</li>
              <li>Respeto por la naturaleza</li>
              <li>Compromiso</li>
              <li>Respeto</li>
              <li>Empatía</li>
              <li>Solidaridad</li>
              <li>Disciplina</li>
            </ul>
          </div>
        </div>
        <div className="relative mx-2 my-12 md:m-16 ">
          <div id="vision" className="absolute py-3 px-7 -left-8 -top-2 -translate-y-3/4 translate-x-1 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
            OBJETIVOS DE CALIDAD
          </div>
          <div className="purple_border p-8 border border-black">
            <ul>
              <li>Productividad</li>
              <li>Satisfacción del cliente</li>
              <li>Mejora continua</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
