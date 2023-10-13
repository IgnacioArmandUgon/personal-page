import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Image from 'next/image';
import pokedex from '../img/pokedex.jpg';
import { Metadata } from 'next/types';
import arrowUp from '../img/arrowUp.svg';
import Subtitle from '@/components/Subtitle';
import Experience from '@/components/Experience';
import AboutMeSection from '@/components/AboutMeSection ';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Personal Page',
  description: 'Pagina personal de Ignacio Armand-ugón',
};
export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between mx-auto md:px-12 overflow-x-hidden max-w-[1400px]'
      id='home'
    >
      {/* <div className='flex absolute h-[200vh] flex-col justify-between'>
        <div className='w-[90vw] animate-pulseSlow rounded-full blur-3xl rotate-12 h-36 z-10 bg-gradient-to-r from-teal-500/[.1] ' />
        <div className='w-[90vw] animate-pulseSlow rounded-full blur-3xl rotate-3 h-36 top-[90vh] -z-10 bg-gradient-to-r from-teal-600/[.1] ' />
        <div className='w-[90vw] animate-pulseSlow rounded-full blur-3xl rotate-45 h-36 -z-10 bg-gradient-to-r from-teal-400/[.1]' />
        <div className='w-[90vw] animate-pulseSlow rounded-full blur-3xl -rotate-3 h-36 top-[170vh] -z-10 bg-gradient-to-l from-teal-600/[.1] ' />
        <div className='w-[90vw] animate-pulseSlow rounded-full blur-3xl rotate-3 h-36 top-[90vh] -z-10 bg-gradient-to-r from-teal-600/[.1] ' />
        <div className='w-[90vw] animate-pulseSlow rounded-full blur-3xl -rotate-3 h-36 top-[170vh] -z-10 bg-gradient-to-l from-teal-600/[.1] ' />
      </div> */}
      <button>
        <a href='#home' className='fixed bottom-4 right-8'>
          <Image width={50} src={arrowUp} alt='' />
        </a>
      </button>
      <Navbar />
      <AboutMeSection />
      <Section id='experience'>
        <Subtitle text='Experiencias' />
        <Experience
          title='Compensar'
          description='Está fue una experiencia muy buena'
          technologies={['React', 'Jest', 'React Testing Library', 'SASS']}
          startDate='ago 2022'
          endDate='oct 2023'
          role='Consultor de desarrollo Frontend'
        />
        <Experience
          title='Tafitech'
          description='Está fue una experiencia muy buena'
          technologies={['React', 'NextJS', 'Jest']}
          startDate='oct 2023'
          endDate='presente'
          role='Consultor de desarrollo Frontend'
        />
      </Section>
      <Section id='projects'>
        <Subtitle text='Proyectos' />
        <ProjectCard
          image={pokedex}
          technologies={['React', 'NextJS', 'Typescript']}
          url='https://pokemons-with-next.vercel.app/'
          description='Tipico proyecto de consumo de api de pokemon, pero con Next 12 y NextUI'
        />
      </Section>
      {/* <Section id='contact'></Section> */}
    </main >
  );
}
