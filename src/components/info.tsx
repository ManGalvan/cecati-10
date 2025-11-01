"use client";

import Image from "next/image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, useTheme } from '@mui/material';

import info1 from "../../public/informacion/info 1.jpg";
import info2 from "../../public/informacion/info 2.jpg";
import info3 from "../../public/informacion/info 3.jpg";
import info4 from "../../public/informacion/info 4.jpg";

export default function InfoImageList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  const images = [
    { src: info1, alt: "Información sobre inscripciones" },
    { src: info2, alt: "Costos y requisitos" },
    { src: info3, alt: "Horarios disponibles" },
    { src: info4, alt: "Contacto y ubicación" }
  ];

  return (
    <>
    <div className="flex justify-center w-full -translate-y-32 md:-translate-y-20 text-center mt-10">
        <h1 id="objetivos" className="py-3 px-7 translate-y-3/4 border border-black black_border bg-[#9D143A] text-white font-bold text-3xl">
            INFORMACIÓN ADICIONAL
        </h1>
    </div>
    <section className="w-full">

      {/* ImageList centrado */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <ImageList 
          cols={cols} 
          gap={16}
          sx={{ 
            width: '100%', 
            margin: 0,
            overflow: 'visible',
            // Centra el contenido
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {images.map((image, index) => (
            <ImageListItem 
              key={index}
              sx={{
                // Ancho fijo según columnas
                width: isMobile ? '100%' : isTablet ? 'calc(50% - 8px)' : 'calc(33.333% - 11px)',
                maxWidth: '400px', // Límite máximo para que no se vean muy grandes
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
                }
              }}
            >
              <div style={{ position: 'relative', width: '100%', paddingBottom: '133.33%' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className="object-contain"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
    </>
  );
}