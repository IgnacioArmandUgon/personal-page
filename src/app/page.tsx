import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Title from '@/components/Title';
import Image from 'next/image';
import { Metadata } from 'next/types';
import profil from '../img/perfil.jpg';
import arrowUp from '../img/arrowUp.svg';

export const metadata: Metadata = {
  title: 'Personal Page',
  description: 'Pagina personal de Ignacio Armand-ugón',
};
export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between mx-auto px-12  overflow-x-hidden max-w-[1500px]'
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
      <Section id='aboutMe'>
        {/* <Title /> */}
        {/* <Image
          src={profil}
          width={500}
          height={500}
          alt='Picture of the author'
          className='rounded-md blur-sm hover:blur-0 transition-all duration-300'
        /> */}
        {/* <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '150px',
            background: '#212121',
            boxShadow: '11px 11px 40px #003434, -11px -11px 40px #009a9a',
          }}
        /> */}
      </Section>

      <Section id='contact'></Section>
      <Section id='projects'></Section>
    </main>
  );
}
