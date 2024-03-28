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
  underline?: boolean
  fontSize?: 1 | 2 | 3
}
const Subtitle = ({ text, underline = true, fontSize = 3 }: SubtitleProps) => {
  const sizes = ['xl', '2xl', '3xl']

  return (
    <h2
      className={
        urbanist.className +
        `w-full text-left ${underline && 'underline'} ${'text-' + sizes[fontSize - 1]} mt-2 mb-4 z-10 tracking-widest underline-offset-4`
      }
    >
      {text}
    </h2>
  );
};

export default Subtitle;
