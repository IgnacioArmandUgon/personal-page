import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Title from '@/components/Title';
import Image from 'next/image';

import { Metadata } from 'next/types';
import profil from '../img/perfil.jpg';
import foto from '../img/foto.jpg';
import arrowUp from '../img/arrowUp.svg';
import MediaIcons from '@/components/MediaIcons';
import Subtitle from '@/components/Subtitle';
import Experience from '@/components/Experience';

export const metadata: Metadata = {
  title: 'Personal Page',
  description: 'Pagina personal de Ignacio Armand-ugón',
};
export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between mx-auto px-12  overflow-x-hidden max-w-[1400px]'
      id='home'
    >
      {/* <Navbar /> */}
      <div className='absolute w-[90vw] rounded-full blur-3xl rotate-12 h-36 -z-10 bg-gradient-to-r from-teal-500' />
      <div className='absolute w-[90vw] rounded-full blur-3xl rotate-45 h-36 -z-10 bg-gradient-to-r from-teal-400' />

      <div className='absolute w-[90vw] rounded-full blur-3xl rotate-3 h-36 top-[90vh] -z-10 bg-gradient-to-r from-teal-600' />
      <div className='absolute w-[90vw] rounded-full blur-3xl  -rotate-3 h-36 top-[170vh] -z-10 bg-gradient-to-l from-teal-600' />
      {/* <div className='absolute w-full blur-3xl h-36  -z-10 bg-gradient-to-l from-red-600 opacity-40' /> */}
      <button>
        <a href='#home' className='fixed bottom-4 right-8'>
          <Image width={50} src={arrowUp} alt='' />
        </a>
      </button>
      <Navbar />

      <section className='flex  items-center mt-5 '>
        <div className='flex flex-col gap-4'>
          <Title />
          <p className='text-md'>
            Soy un desarrollador web con gran gusto por construir soluciones efectivas. Me
            gusta siempre estar siempre aprendiendo y descubriendo nuevas formas de
            enfrentar desafíos.
          </p>
          <MediaIcons />
        </div>
        <Image
          src={foto}
          alt='Una foto de mí que no pudo cargar'
          className='sm:w-full md:w-2/4 rounded contrast-[1.17] drop-shadow-[1px_1px_10px_#0d9488] hover:drop-shadow-[1px_1px_15px_#0f766e] hover:contrast-100 transition-all -z-0'
        />
      </section>
      <Section id='aboutMe'>
        <Subtitle text='Sobre mi' />
        <p className='text-lg'>
          Nací en Montevideo, Uruguay. Empecé a estudiar programación de forma autodidacta
          por curiosidad, y apoyandome en amigos que ya trabajaban en el rubro. Al ver que
          me gustaba, empezé a estudiar informatica en la UTU ITS Arias Valparda, con
          enfasis en Desarrollo web. En esos años, y para la prueba final de ese curso,
          tuve la oportunidad de trabajaron con un grupo de compañeros en el proyecto de
          crear una pagina web, una ecommerce para una tienda de insumos para la seguridad
          laboral.
        </p>
        <p className='text-lg'>
          A comienzos del 2022 me inscribí en un training de Desarrollo Web Fullstack de 3
          meses que ofrecía la empresa Sofka Techonogies. En este training, aparte de
          conocer gente genial, aprendí y puse en practicas tecnologías como JavaSpript,
          React.js, Redux, Java, Spring boot, GIT, Firebase. Y habilidades blandas como la
          comunicación efectiva y el trabajo en equipo.
        </p>
        <p className='text-lg'>
          Tras el trining, pasé a trabajar como desarrollador web **Front-end** con
          tecnologías como React, React Router, React testing library, Jest y Docker. Y
          familizarisarme con herramientas como Github y Postman API. Todo esto trabajando
          bajo la metodología Scrum.
        </p>
      </Section>
      <Section id='experience'>
        <Subtitle text='Experiencias' />
        <Experience
          description='Está fue una experiencia muy buena'
          title='Compensar'
          technologies={['React', 'HTML', 'CSS']}
        />
      </Section>
      <Section id='contact'></Section>
      <Section id='projects'></Section>
    </main>
  );
}
