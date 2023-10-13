'use client';
import React, { useState } from 'react';
import Title from './Title';
import MediaIcons from './MediaIcons';
import Image from 'next/image';
import foto from '../img/foto.jpg';

const AboutMeSection = () => {
  const [viewState, setViewState] = useState('initial');
  const toggleState = () => {
    viewState === 'initial' ? setViewState('second') : setViewState('initial');
  };
  const isClicked = viewState === 'second';
  return (
    <section
      className={`flex md:flex-row w-full flex-col gap-7 py-3 px-6 items-center justify-between mt-24`}
    >
      <div className={`${isClicked && 'aboutMeText'} flex flex-col gap-4`}>
        {!isClicked && <Title />}
        <p className='text-md '>
          {isClicked
            ? <p>Nací en <b>Montevideo, Uruguay</b>. Empecé a estudiar programación de forma <b>autodidacta</b> por curiosidad, y apoyandome en amigos que ya trabajaban en el rubro. Al ver que me gustaba, empezé a estudiar informatica en la <b>UTU ITS Arias Valparda</b>, con enfasis en Desarrollo web. En esos años, y para la prueba final de ese curso, tuve la oportunidad de trabajaron con un grupo de compañeros en el proyecto de crear una pagina web</p>
            : 'Hago calculadoras en Java'}
        </p>
        {!isClicked && <MediaIcons />}
      </div>
      <Image
        src={foto}
        alt='Una foto de mí que no pudo cargar'
        // onClick={() => toggleState()}
        className={`${isClicked ? 'aboutMeImg' : ''
          } sm:w-full md:w-2/4 rounded contrast-[1.18] drop-shadow-[1px_1px_10px_#0d9488] hover:drop-shadow-[1px_2px_10px_#0f766e] hover:contrast-100 transition-all -z-0 `}
      />
    </section>
  );
};

export default AboutMeSection;
