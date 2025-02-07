import "@/components/css/card.css"

export default function Card(){
    return(
        <>
        <div className="relative m-16">
            <div id="politica" className="absolute py-3 px-7 -left-8 -top-2 -translate-y-3/4 translate-x-1 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
            POLÍTICA DE CALIDAD
            </div>
            <div className="purple_border p-8 border border-black">
                La dirección general de centros de formación para el trabajo, tiene el compromiso de proporcionar servicios
                de calidad certificada en capacitación para y en el trabajo, asegurando la satisfacción de nuestros clientes
                y usuarios, buscando siempre la mejora continua de nuestros procesos, a través del Sistema de Gestión de Calidad.
            </div>
        </div>
        <div className="relative m-16">
          {/* Card derecha con 'MISIÓN' alineado a la derecha */}
          <div id="mision" className="absolute py-3 px-7 right-0 -top-2 -translate-y-3/4 translate-x-5 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
            MISIÓN
          </div>
  
          <div className="purple_border p-8 border border-black">
            Capacitar permanentemente para y en el trabajo en diferentes especialidades a corto plazo, a mujeres y hombres
            de 15 años en adelante, así como certificar las competencias adquiridas por las personas de manera empírica, contribuyendo
            a su desarrollo humano; fomentando una actitud anañítica, emprendedora, creativa y sustentable para su inserción
            en el mercado laboral o autoempleo; coadyuvando así al desarrollo social y económico del país, a través de una estructura
            de servicios flexible, equitativa, de calidad y pertinente.
          </div>
        </div>
        <div className="relative m-16">
            <div id="vision" className="absolute py-3 px-7 -left-8 -top-2 -translate-y-3/4 translate-x-1 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
            VISIÓN
            </div>
            <div className="purple_border p-8 border border-black">
                Ser la primera opción de capacitación para el trabajo a nivel estatal, por la calidad de su servicio educativo
                sustentada en el compromiso de sus trabajadores, consolidandose como el principal proveedor de personas capacitadas
                para el sector productivo o el autoempleo.
            </div>
        </div>
        </>
    )
}