import React from 'react'
import Subtitle from './Subtitle'

const Footer = () => {
    return (
        <>
            <section
                className={`flex flex-col items-baseline mt-24 w-full gap-5 px-20 py-4 bg-teal-400/[.05] rounded-md'
                    }`}
            >
                <Subtitle text='Con esta información puedes contactarme' />
                <div>
                    <Subtitle text='Matias4371@gmail.com' underline={false} fontSize={2} />
                </div>
            </section>
        </>
    )
}

export default Footer