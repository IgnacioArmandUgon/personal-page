import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { TechnologyName, technologiesList } from '@/constants/Technologies';
import Link from 'next/link';
import Subtitle from './Subtitle';

interface ProjectCardProps {
  image: StaticImageData;
  url: string;
  technologies: TechnologyName[];
}

const ProjectCard = ({ image, url, technologies }: ProjectCardProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3  max-w-[350px]'>
      <Link href={url} target='_blank' className=''>
        <Image
          className='rounded-xl min-w-[250px] max-w-[350px]'
          src={image}
          alt='Proyecto de la pokedex'
        />
      </Link>
      <div className='m-2'>
        <p>Tipico proyecto de consumo de api de pokemon, pero con Next 12 y MaterialUI</p>
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
    </div>
  );
};

export default ProjectCard;
