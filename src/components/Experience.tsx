import { TechnologyName, technologiesList } from '@/constants/Technologies';
import Image from 'next/image';
import React from 'react';

interface ExperienceProps {
  title: string;
  technologies: TechnologyName[];
  description: string;
}
const Experience = ({ title, technologies, description }: ExperienceProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-2xl'>{title}</h2>
      <p>{description}</p>
      <div className='flex gap-2'>
        {technologies.map((techName) => (
          <Image
            className='w-14'
            alt={`The logo of the ${techName} technology`}
            src={technologiesList.find((tech) => tech.name === techName)?.logo || ''}
            key={techName + '1'}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
