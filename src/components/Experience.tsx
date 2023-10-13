import { TechnologyName, technologiesList } from '@/constants/Technologies';
import Image from 'next/image';
import React from 'react';
import Technologies from './Technologies';

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
      <Technologies technologies={technologies} />
      <div className='bg-slate-400 h-1 rounded my-2' />
    </div>
  );
};

export default Experience;
