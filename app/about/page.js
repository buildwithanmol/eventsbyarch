'use client'
import Hero from 'components/Hero'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const About = () => {
  const imgArray = [
    {
      img: '/founder.jpg',
      name: 'Hello'
    },
    {
      img: '/logo.png',
      name: 'World'
    },
    {
      img: '/profile.png',
      name: 'Hello'
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = imgArray[currentIndex].img;
  const currentName = imgArray[currentIndex].name;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 4000);

    return () => clearInterval(interval); 
  });
  return (
    <>
      <Hero primary='MEET THE TEAM' />
      <section className='flex items-center justify-center sm:flex-row flex-col'>
        <Image src='/founder.jpg' alt='image'  width={320}  className=' sm:w-[450px] ' />
        <div className='px-12 py-2  '>
          <h1 className='font-primary text-[22px]'>RACHNA DAND</h1>
          <p className='font-primary text-[20px] mb-4'>Owner & Creative Director</p>
          <p className='max-w-[450px]'>
            Gifted with a sense of understanding people and a passion for creating joy around her, Rachna is the magic maker at Arch Events. She believes there is something to celebrate in every moment.
          </p>
        </div>
      </section>
      <hr className='mx-20 my-5' />
      <section className='flex items-center justify-center sm:flex-row flex-col'>
        <Image src={currentImage} alt='image'  width={320}  className='sm:w-[450px] ' />
        <div className='px-12 py-2  '>
          <h1 className='font-primary text-center text-[22px]'>{currentName}</h1>

        </div>
      </section>
    </>
  )
}

export default About