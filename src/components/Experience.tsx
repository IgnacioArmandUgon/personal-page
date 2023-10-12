import { TechnologyName, technologiesList } from '@/constants/Technologies';
import Image from 'next/image';
import React from 'react';

interface ExperienceProps {
  title: string;
  technologies: TechnologyName[];
  description: string;
  startDate: string;
  endDate: string;
  role: string
}
const Experience = ({ title, technologies, description, startDate, endDate, role }: ExperienceProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-2xl'>{title}</h2>
      <h3>{startDate} - {endDate}</h3>
      <h3>Rol: {role}</h3>
      <p>{description}</p>
      <div className='flex gap-2 px-3 py-2 rounded bg-gradient-to-r from-[#73c0af38]'>
        {technologies.map((techName) => (
          <Image
            className='w-14'
            alt={`The logo of the ${techName} technology`}
            src={technologiesList.find((tech) => tech.name === techName)?.logo || ''}
            key={techName + '1'}
          />
        ))}
      </div>
      <div className='bg-slate-400 h-1 rounded my-2' />
    </div>
  );
};

export default Experience;
