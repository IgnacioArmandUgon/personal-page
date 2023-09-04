import React from 'react';
import Title from './Title';

const Navbar = () => {
  return (
    <div className='p-6 flex w-full m-0 top-0 gap-5 justify-between bg-gradient-to-r from-teal-950 '>
      <a href={'#home'} className='tracking-wide mr-3 '>
        {/* <Title /> */}
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
            <a href={'#contact'} className='tracking-wide '>
              Contactos
            </a>
          </li>
          <li>
            <a href={'#projects'} className='tracking-wide '>
              Proyectos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
