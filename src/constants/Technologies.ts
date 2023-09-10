import { StaticImageData } from 'next/image';
import reactLogo from '../img/reactLogo.png';
import htmlLogo from '../img/htmlLogo.png';
import cssLogo from '../img/cssLogo.png';
import jestLogo from '../img/jestLogo.svg';
import jsLogo from '../img/jsLogo.png';
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
  | 'Docker';

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
];
