import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <div className='absolute p-6 flex w-full m-0 top-0 bg-gradient-to-r from-teal-50'>
      <Link href={"/home"} title='HOME' className='tracking-widest mr-3'>
        HOME
      </Link>

      <Link href={"/home"} title='HOME' className='tracking-widest mr-3 hover:under'>
        Sobre mi
      </Link>
      <Link href={"/home"} title='HOME' className='tracking-widest mr-3'>
        Contactos
      </Link>
      <Link href={"/home"} title='HOME' className='tracking-widest mr-3'>
        Proyectos
      </Link>
    </div>
  )
}

export default Navbar
