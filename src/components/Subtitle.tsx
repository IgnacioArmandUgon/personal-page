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
interface SubtitleProps {
  text: string;
}
const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <h2
      className={
        urbanist.className +
        'w-full text-left underline text-3xl mt-2 mb-4  z-10 tracking-widest'
      }
    >
      {text}
    </h2>
  );
};

export default Subtitle;
