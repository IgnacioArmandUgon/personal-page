import React from 'react';
interface sectionProps {
  children?: string | JSX.Element | JSX.Element[];
  id?: string;
  bg?: boolean;
}
const Section = ({ children, id, bg = true }: sectionProps) => {
  return (
    <>
      <div id={id} />
      <section
        className={`flex flex-col mt-24 w-full h-[90vh] gap-3 px-6 py-2 ${bg && 'bg-teal-400/[.05] rounded-md'
          }`}
      >
        {children}
      </section>
    </>
  );
};

export default Section;
