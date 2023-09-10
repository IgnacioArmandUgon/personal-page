import React from 'react';
interface sectionProps {
  children?: string | JSX.Element | JSX.Element[];
  id?: string;
  bg?: boolean;
}
const Section = ({ children, id, bg = true }: sectionProps) => {
  return (
    <section
      className={`flex flex-col mt-5 w-full h-[90vh] gap-3 py-3 px-6 ${
        bg && 'bg-teal-400/[.02] rounded-md'
      }`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
