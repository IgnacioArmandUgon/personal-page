import Navbar from "@/components/Navbar"
import Section from "@/components/Section"
import Title from "@/components/Title"
import Image from "next/image"
import {Metadata} from "next/types"
import profil from "../img/perfil.jpg"

export const metadata: Metadata = {
  title: "Personal Page",
  description: "Pagina personal de Ignacio Armand-ugón",
}
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12 gap-5'>
      {/* <Navbar /> */}
      <div className='absolute w-full blur-3xl rotate-12 h-36 -z-10 bg-gradient-to-r from-teal-500' />
      <div className='absolute w-full blur-3xl rotate-45 h-36 right-0 -z-10 bg-gradient-to-r from-teal-200' />

      <Section>
        <Title />
        <Image src={profil} width={500} height={500} alt='Picture of the author' className='rounded-md' />
        {/* <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "150px",
            background: "#212121",
            boxShadow: "11px 11px 40px #003434, -11px -11px 40px #009a9a",
          }}
        /> */}
      </Section>
    </main>
  )
}
