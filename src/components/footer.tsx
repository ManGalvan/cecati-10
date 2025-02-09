import Image from "next/image";
import logo from "@/app/favicon.svg"

export default function Footer() {
  return (
    <footer className="bg-[#9D143A] text-white font-light mx-auto">
      <div className="flex justify-center my-14">
        <div className="container grid grid-cols-1 sm:grid-cols-4 gap-7 p-7 text-center sm:text-left">
          {/* Logo del Gobierno de México */}
          <div className="flex flex-col items-center md:items-start text-center justify-center sm:justify-start">
            {/* <Image
                src="https://framework-gb.cdn.gob.mx/gobmx/img/logo_blanco.svg"
                alt="Logo Gobierno de México"
                width={200}
                height={50}
                className="logo_footer"
            /> */}
            <Image
                src={logo}
                alt="Logo educacion mexico cecati"
                height={100}
                className="filter invert brightness-0 "
            />
            <span className="text-lg sm:text-2xl font-bold">
                DGCFT
            </span>
          </div>

          {/* Enlaces */}
          <div>
            <h2 className="text-lg font-bold py-4">Enlaces</h2>
            <ul className="space-y-2">
              <li><a href="/docs/flyer_politica.pdf" download="politica de calidad.pdf">Política de calidad</a></li>
              <li><a href="https://www.facebook.com/Cecati10" target="_blank" rel="noopener">Publicaciones</a></li>
              {/* <li><a href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml?idEntidad=MzM=&idSujetoObligado=MTAwMDE=#inicio" target="_blank">Portal de Transparencia</a></li>
              <li><a href="https://www.infomex.org.mx/gobiernofederal/home.action" target="_blank">PNT</a></li>
              <li><a href="http://www.inai.org.mx/" target="_blank">INAI</a></li>
              <li><a href="http://alertadores.funcionpublica.gob.mx/" target="_blank">Alerta</a></li>
              <li><a href="http://sidec.funcionpublica.gob.mx/" target="_blank">Denuncia</a></li> */}
            </ul>
          </div>

          {/* Información sobre Gob.mx */}
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-lg font-bold py-4">¿Qué es cecati 10?</h2>
              <p>Somos una institución de educación pública con la finalidad de capacitar a los alumos para y en el trabajo. </p>
            </div>
            <div className="flex flex-col justify-center sm:justify-center">
              <h2>Ven y conoce las instalaciones</h2>
              <a href="https://maps.app.goo.gl/CCiL8MQ6fMRrHKUz8" className="text-blue-400 hover:text-blue-500">Lucio Blanco #1315, Col. Fierro, CP. 64590 Monterrey, N.L.</a>
            </div>
            {/* <ul className="space-y-2">
              <li><a href="https://www.gob.mx/amlo">Administraciones anteriores</a></li>
              <li><a href="https://www.gob.mx/accesibilidad">Declaración de Accesibilidad</a></li>
              <li><a href="https://www.gob.mx/privacidadintegral">Aviso de privacidad</a></li>
              <li><a href="https://www.gob.mx/terminos">Términos y Condiciones</a></li>
              <li><a href="http://www.ordenjuridico.gob.mx" target="_blank">Marco jurídico</a></li>
            </ul> */}
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col gap-5">
              <div>
              <h2 className="text-lg font-bold py-4 text-center">Síguenos en</h2>
            <div className="flex justify-center sm:justify-center space-x-4">
              <a href="https://www.facebook.com/Cecati10" target="_blank" rel="noopener">
                <Image src="https://framework-gb.cdn.gob.mx/landing/img/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              {/* <a href="https://twitter.com/GobiernoMX" target="_blank" rel="noopener">
                <Image src="https://framework-gb.cdn.gob.mx/landing/img/twitter.png" alt="Twitter" width={24} height={24} />
              </a> */}
              <a href="https://www.instagram.com/cecati_10/" target="_blank" rel="noopener">
                <Image src="https://framework-gb.cdn.gob.mx/landing/img/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.youtube.com/@CECATI10" target="_blank" rel="noopener">
                <Image src="https://framework-gb.cdn.gob.mx/landing/img/youtube.png" alt="YouTube" width={24} height={24} />
              </a>
            </div>
              </div>
          </div>
        </div>
      </div>

      {/* Pleca con imagen de fondo */}
      <div
        className="footer-pleca bg-white bg-[url('https://framework-gb.cdn.gob.mx/gobmx/img/pleca.svg')] bg-cover bg-center h-14"
      />
    </footer>
  );
}
