import Navbar from "@/components/Navbar"
import Section from "@/components/Section"
import Title from "@/components/Title"
import Image from "next/image"

import {Metadata} from "next/types"
import profil from "../img/perfil.jpg"
import foto from "../img/foto.jpg"
import arrowUp from "../img/arrowUp.svg"
import MediaIcons from "@/components/MediaIcons"
import Subtitle from "@/components/Subtitle"

export const metadata: Metadata = {
  title: "Personal Page",
  description: "Pagina personal de Ignacio Armand-ugón",
}
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

      <section className='flex  items-center mt-5 '>
        <div className='flex flex-col gap-4'>
          <Title />
          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias nam nihil, dolorum
            voluptas exercitationem aperiam ratione sequi, eos eaque ea dicta. Id laudantium facilis
            repudiandae molestias cum quisquam explicabo!
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit blanditiis laboriosam
          consequatur aliquam, beatae libero voluptas odio ut corporis aspernatur ex incidunt, qui est
          consectetur, officia dolore numquam rerum hic. Quasi quae, labore aliquam, quod enim quibusdam
          impedit minus eaque reprehenderit ea sit. Accusamus quod suscipit iste quisquam! Quia ex illum
          similique ducimus libero maiores necessitatibus et unde. Facilis officia odio expedita itaque
          praesentium nihil illum reprehenderit sequi, autem ex, deserunt dolore voluptatem odit dignissimos
          ut minus inventore harum vero nemo corporis nostrum? Ipsum, in accusantium ipsam excepturi quod
          numquam. Di
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit blanditiis laboriosam
          consequatur aliquam, beatae libero voluptas odio ut corporis aspernatur ex incidunt, qui est
          consectetur, officia dolore numquam rerum hic. Quasi quae, labore aliquam, quod enim quibusdam
          impedit minus eaque reprehenderit ea sit. Accusamus quod suscipit iste quisquam! Quia ex illum
          similique ducimus libero maiores necessitatibus et unde. Facilis officia odio expedita itaque
          praesentium nihil illum reprehenderit sequi, autem ex, deserunt dolore voluptatem odit dignissimos
          ut minus inventore harum vero nemo corporis nostrum? Ipsum, in accusantium ipsam excepturi quod
          numquam. Di
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit blanditiis laboriosam
          consequatur aliquam, beatae libero voluptas odio ut corporis aspernatur ex incidunt, qui est
          consectetur, officia dolore numquam rerum hic. Quasi quae, labore aliquam, quod enim quibusdam
          impedit minus eaque reprehenderit ea sit. Accusamus quod suscipit iste quisquam! Quia ex illum
          similique ducimus libero maiores necessitatibus et unde. Facilis officia odio expedita itaque
          praesentium nihil illum reprehenderit sequi, autem ex, deserunt dolore voluptatem odit dignissimos
          ut minus inventore harum vero nemo corporis nostrum? Ipsum, in accusantium ipsam excepturi quod
          numquam. Di
        </p>
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
  )
}
