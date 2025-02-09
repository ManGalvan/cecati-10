import React from 'react';

const MapEmbed: React.FC = () => {
  return (
    <>
    <div className="flex justify-center w-full -translate-y-14 md:-translate-y-20 text-center mt-24">
        <h1 id="ubication" className="py-3 px-7 translate-y-3/4 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
          UBICACIÓN
        </h1>
    </div>
      <div className="flex flex-col md:flex-row flex-1 w-full gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3595.57514615931!2d-100.2754781!3d25.6853747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662955bd908dd2b%3A0x36cd48e4ce68558d!2sCECATI%2010%20DGCFT!5e0!3m2!1ses-419!2smx!4v1738964815788!5m2!1ses-419!2smx"
          className="w-full lg:w-3/5"
          height="450"
          style={{ border: '0' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className='flex flex-col justify-evenly'>
            <div className="flex gap-10">
            <p className="text-xl"><strong>Dirección:</strong> <br/> Lucio Blanco #1315 <br/> Colonia Fierro <br/> CP. 64590 <br/> Mty, Nuevo León</p>
            <p className="text-xl"><strong>Teléfonos de atención:</strong> <br/>81-29-55-48-51 <br/> 81-29-55-48-52</p>
            </div>
            <p className="text-xl"><strong>Horarios de atención:</strong><br/>Lunes a sábado de 8:00 a 20:00 hrs</p>
        </div>
      </div>
    </>
  );
};

export default MapEmbed;
