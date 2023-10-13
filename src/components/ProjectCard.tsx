import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { TechnologyName, technologiesList } from '@/constants/Technologies';
import Link from 'next/link';
import Technologies from './Technologies';


interface ProjectCardProps {
  image: StaticImageData;
  url: string;
  technologies: TechnologyName[];
  description: string
}

const ProjectCard = ({ image, url, technologies, description }: ProjectCardProps) => {
  return (
    <div className='flex flex-col md:flex-row md:max-w-none items-center justify-center gap-3 max-w-[350px] '>
      <Link href={url} target='_blank' className=''>
        <Image
          className='rounded-xl min-w-[250px] max-w-[350px] hover:scale-105 transition-all'
          src={image}
          alt='Proyecto de la pokedex'
        />
      </Link>
      <div className='m-2 flex gap-2 flex-col w-full h-full'>
        <h2 className='text-2xl'>Descripción</h2>
        <p>{description}</p>
        <div className='flex gap-2 flex-col'>
          <h2 className='text-2xl'>Tecnologías</h2>
          <Technologies technologies={technologies} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
