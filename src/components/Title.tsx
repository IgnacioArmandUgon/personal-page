import React from 'react';
import { Roboto, Oswald, Urbanist } from 'next/font/google';

const oswald = Oswald({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
});
const roboto = Roboto({
  weight: ['900'],
  style: ['normal'],
  subsets: ['latin'],
});
const urbanist = Urbanist({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
});

const Title = () => {
  return (
    <>
      {/* <h2 className={oswald.className + "tracking-wide [text-shadow:_2px_2px_20px_rgba(20_184_166)]"}>
        Ignacio Armand-ugón
      </h2> */}
      {/* <h2 className={roboto.className + "w-full  text-center text-5xl m-4 z-10 tracking-widest"}>
        Ignacio Armand-ugón
      </h2> */}
      <h2
        className={
          urbanist.className +
          'w-full text-left lg:text-5xl md:text-4xl sm:text-5xl text-4xl my-2 underline z-10 tracking-widest'
        }
      >
        Ignacio Armand-ugón<span className='text-teal-600'>.</span>
      </h2>
    </>
  );
};

export default Title;
