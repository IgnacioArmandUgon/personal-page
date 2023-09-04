import React from 'react';
interface sectionProps {
  children?: string | JSX.Element | JSX.Element[];
  id: string;
}
const Section = ({ children, id }: sectionProps) => {
  return (
    <section
      className='flex mt-5 w-full h-[90vh] bg-teal-400/[.02]  rounded-md p-2'
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
