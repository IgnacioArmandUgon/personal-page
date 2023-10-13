import React from 'react';

const Navbar = () => {
  return (
    <div className='p-6 flex w-full m-0 top-0 gap-5 justify-between fixed max-w-[1400px] z-20 bg-gradient-to-r from-teal-900 to-teal-900/[.3] '>
      <a href={'#home'} className='tracking-wide mr-3 '>
        Ignacio Armand-ugón
      </a>
      <nav className='flex'>
        <ul className='flex gap-4'>
          <li>
            <a href={'#aboutMe'} className='tracking-wide '>
              Sobre mi
            </a>
          </li>
          <li>
            <a href={'#experience'} className='tracking-wide '>
              Experiencia
            </a>
          </li>
          <li>
            <a href={'#projects'} className='tracking-wide '>
              Proyectos
            </a>
          </li>
          <li>
            <a href={'#contact'} className='tracking-wide '>
              Contactos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
