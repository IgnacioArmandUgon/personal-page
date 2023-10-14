import React from 'react';
import Title from './Title';
import MediaIcons from './MediaIcons';
import Image from 'next/image';
import foto from '../img/foto.jpg';

const AboutMeSection = () => {
  return (
    <section
      className={`flex md:flex-row w-full flex-col gap-7 py-3 px-6 items-center justify-between mt-24`}
    >
      <div className={`flex flex-col gap-6`}>
        <Title />
        <MediaIcons />
        <div className='flex items-center '>
          <a
            className='p-2 bg-teal-400 w-1/3 text-neutral-950 text-center font-bold'
            href={
              'https://drive.google.com/uc?export=download&id=1Fv0zJM63T1aSO3uZFq0OCb56hSt_YRez'
            }
            download
            target='_blank'
          >
            Descargar CV
          </a>
          <a className='ml-6 hover:underline underline-offset-2' href='#'>
            Mas sobre mi
          </a>
        </div>
      </div>
      <Image
        src={foto}
        alt='Una foto de mí que no pudo cargar'
        className={`sm:w-full md:w-2/4 rounded contrast-[1.18] drop-shadow-[1px_1px_10px_#0d9488] hover:drop-shadow-[1px_2px_10px_#0f766e] hover:contrast-100 transition-all -z-0 `}
      />
    </section>
  );
};

export default AboutMeSection;
