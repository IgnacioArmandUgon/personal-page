import React from "react"
import {Roboto, Oswald, Urbanist} from "next/font/google"

const oswald = Oswald({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
})
const roboto = Roboto({
  weight: ["900"],
  style: ["normal"],
  subsets: ["latin"],
})
const urbanist = Urbanist({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
})

const Title = () => {
  return (
    <div className='flex w-full h-full first-letter: justify-center'>
      {/* <h2 className={oswald.className + "w-full  text-center text-5xl m-4 z-10 tracking-widest"}>
        Ignacio Armand-ugón
      </h2> */}
      <h2 className={roboto.className + "w-full text-center text-5xl m-4 z-10 tracking-widest"}>
        Ignacio Armand-ugón
      </h2>
      {/* <h2 className={urbanist.className + "w-full text-center text-5xl m-4 z-10 tracking-widest"}>
        Ignacio Armand-ugón
      </h2> */}
    </div>
  )
}

export default Title
