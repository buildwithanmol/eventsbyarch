'use client'
import React, { useState } from 'react'
import Hero from './Hero'
import 'styles/globals.css'
import Line from './Line'
import useWindowDimensions from './WindowDimension'
import ContactCard from './ContactCard'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const EventsLayout = ({ primaryTitle, heroTitle, secondaryTitle, contentHeading, contentParagraph, imgSrc, contactHeader }) => {
    const [textFunction, setTextFunction] = useState(addBreak())
    const { width } = useWindowDimensions()
    function addBreak(textValue) {
        const text = textValue ? textValue.replace(/\./g, '.<br/>') : contentHeading.replace(/\./g, '.<br/>');
        return { __html: text }
    }
    return (
        <>
            <Hero primary={heroTitle} />
            <section>
                <h1 className='font-primary gradient-text text-center lg:text-6xl text-[22px]'>{primaryTitle}</h1>
                <p className=' text-[#908d8b] text-center lg:text-[18px] italic text-[16px]'>{secondaryTitle}</p>
                <Line style='my-5' />
            </section>
            <section className='gradient  flex lg:flex-row flex-col-reverse items-center justify-evenly md:space-x-4 p-8'>
                <div className='  '>
                    {
                        width >= 768 ? <div className={`text-[50px] lg:text-left text-center font-primary text-white italic `} dangerouslySetInnerHTML={textFunction} /> : <h1 className='text-[40px] lg:text-left text-center font-primary text-white italic '> {contentHeading} </h1>
                    }
                    <p className='max-w-[450px]  text-white  ' > {contentParagraph} </p>
                </div>
                <div className=' grid-cols-2  grid-rows-2 place-items-center justify-center max-w-2xl gap-2 hidden md:grid '>
                    {
                        imgSrc && imgSrc.map((e, i) => {
                            return <div className='w-[300px] overflow-hidden h-[200px]'>
                                <Image src={e} key={i} className='object-cover w-full h-full shadow-xl rounded-md' alt="image" width={400} height={400} />
                            </div>
                        })
                    }
                </div>
                <Carousel className='md:hidden' autoPlay interval={3000} >
                    {
                        imgSrc && imgSrc.map((e, i) => {
                            return <Image src={e} key={i} className='object-cover w-full h-full shadow-xl rounded-md' alt="image" width={400} height={400} />
                        })
                    }
                </Carousel>
            </section>
            <div className={`lg:text-[30px] italic text-[25px] text-center font-primary gradient-text mx-3 mt-[3vw] mb-[1vw] `} dangerouslySetInnerHTML={addBreak(contactHeader)} />
            <Line style='mb-5' />
            <ContactCard />
        </>
    )
}

export default EventsLayout