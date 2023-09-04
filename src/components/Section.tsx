import React from "react"
interface sectionProps {
  children?: string | JSX.Element | JSX.Element[]
}
const Section = ({children}: sectionProps) => {
  return <div className='flex w-full h-[90vh] bg-teal-400/[.06]  rounded-md p-2'>{children}</div>
}

export default Section
