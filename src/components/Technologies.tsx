import React from 'react';

import Image from 'next/image';
import { TechnologyName, technologiesList } from '@/constants/Technologies';


interface TechnologiesProps {
    technologies: TechnologyName[]
}
const Technologies = ({ technologies }: TechnologiesProps) => {
    return (
        <div className='flex gap-3 px-3 py-2 rounded bg-gradient-to-r from-[#73c0af38]'>
            {technologies.map((techName) => (
                <Image
                    className='w-14 '
                    alt={`The logo of the ${techName} technology`}
                    src={technologiesList.find((tech) => tech.name === techName)?.logo || ''}
                    key={techName + '1'}
                    title={techName}
                />
            ))}
        </div>
    )
}

export default Technologies