'use client'
import React, { useState } from 'react'
import Hero from './Hero'
import 'styles/globals.css'
import Line from './Line'
import useWindowDimensions from './WindowDimension'
import ContactCard from './ContactCard'
import Image from 'next/image'

const EventsLayout = ({ primaryTitle, heroTitle, secondaryTitle, contentHeading, contentParagraph, imgSrc, contactHeader }) => {

    const [textFunction, setTextFunction] = useState(addBreak())
    const { width } = useWindowDimensions()
    function addBreak(textValue) {
        const text =  textValue ? textValue.replace(/\./g, '.<br/>') : contentHeading.replace(/\./g, '.<br/>'); 
        return { __html: text }
    }
    return (
        <>
            <Hero primary={heroTitle} />
            <section>
                <h1 className='font-primary gradient-text text-center lg:text-[30px] text-[22px]'>{primaryTitle}</h1>
                <p className='font-primary text-[#908d8b] text-center lg:text-[18px] italic text-[16px]'>{secondaryTitle}</p>
                <Line style='my-5' />
            </section>
            <section className='gradient flex lg:flex-row flex-col-reverse items-center justify-center gap-[2vw] py-[8vw] '>
                <div className='mx-[8vw]'>
                    {
                        width >= 768 ? <div className={`text-[50px] lg:text-left text-center font-primary text-white italic `} dangerouslySetInnerHTML={textFunction} /> : <h1 className='text-[40px] lg:text-left text-center font-primary text-white italic '> {contentHeading} </h1>
                    }
                    <p className='max-w-[450px]  text-white  ' > {contentParagraph} </p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={imgSrc} className='lg:max-w-[450px] max-w-[350px] ' alt="" />
                </div>
            </section>
            <div className={`lg:text-[30px] text-[25px] text-center font-primary gradient-text mx-3 mt-[3vw] mb-[1vw] `} dangerouslySetInnerHTML={addBreak(contactHeader)} />
            <Line style='mb-5' />
            <ContactCard/>
        </>
    )
}

export default EventsLayout