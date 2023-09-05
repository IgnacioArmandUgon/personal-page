import React from "react"
import Image from "next/image"
import linkedin from "../img/linkedin-logo.svg"
import github from "../img/github-logo.svg"
const MediaIcons = () => {
  return (
    <ul className='flex gap-4'>
      <li>
        <a
          href='https://github.com/IgnacioArmandUgon?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={github} alt='Github logo' width={40} />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/lgnacio-armand-ugón/' target='_blank' rel='noopener noreferrer'>
          <Image src={linkedin} alt='Linkedin logo' width={40} />
        </a>
      </li>
    </ul>
  )
}

export default MediaIcons
