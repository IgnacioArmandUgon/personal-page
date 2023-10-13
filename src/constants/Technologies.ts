import { StaticImageData } from 'next/image';
import reactLogo from '../img/reactLogo.png';
import htmlLogo from '../img/htmlLogo.png';
import cssLogo from '../img/cssLogo.png';
import jestLogo from '../img/jestLogo.svg';
import jsLogo from '../img/jsLogo.png';
import nextLogo from '../img/NextjsLogo.png';
import tsLogo from '../img/tsLogo.png';
import sassLogo from '../img/sassLogo.png';
import reactTestingLibraryLogo from '../img/reactTestingLibraryLogo.png';
type Technology = {
  name: TechnologyName;
  logo: StaticImageData;
};

export type TechnologyName =
  | 'Java'
  | 'JavaScript'
  | 'Typescript'
  | 'Git'
  | 'Jest'
  | 'React Testing Library'
  | 'HTML'
  | 'CSS'
  | 'SASS'
  | 'Postman API'
  | 'React'
  | 'Docker'
  | 'NextJS' 
  | 'SASS'
  | 'React Testing Library';

export const technologiesList: Technology[] = [
  {
    name: 'React',
    logo: reactLogo,
  },
  {
    name: 'HTML',
    logo: htmlLogo,
  },

  {
    name: 'CSS',
    logo: cssLogo,
  },
  {
    name: 'Jest',
    logo: jestLogo,
  },
  {
    name: 'JavaScript',
    logo: jsLogo,
  },
  {
    name: 'Typescript',
    logo: tsLogo
  },
  {
    name: 'NextJS',
    logo: nextLogo
  },
  {
    name: "SASS",
    logo: sassLogo
  }, 
  {
    name: 'React Testing Library',
    logo: reactTestingLibraryLogo
  }
];
