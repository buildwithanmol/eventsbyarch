'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import image from '/public/logo.png'
import { CgMenuRightAlt } from 'react-icons/cg'
import Link from 'next/link'
import SocialIcons from './SocialIcons'
import Line from './Line'
import '../styles/globals.css'
import {Parisienne} from 'next/font/google'

const parisienne = Parisienne({subsets:['latin'],
weight:'400'})

const Hero = ({ primary, secondary, type }) => {
  const wordsArray = ['Wedding', 'Party', 'Decor', 'Birthday', 'Events'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeDirection, setFadeDirection] = useState(1)
  const [player, setPlayer] = useState()
  const [menu, setMenu] = useState('opacity-0 z-[-100] transition-all')
  const [drop, setDrop] = useState('hidden')
  function dropDown() {
    drop === 'hidden' ? setDrop('flex') : setDrop('hidden')
  }
  useEffect(() => {
    setPlayer(<video
      src='/heroVideo.mp4'
      autoPlay
      loop
      muted
      className='absolute top-0 w-full h-[60vh] lg:h-[100vh]  object-cover z-[-10] brightness-50 '
    ></video>)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeDirection(-1); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
        setFadeDirection(1); // Start fading in
      }, 1000); // Wait for the fade-out transition to complete before changing the word
    }, 3000); // Total interval = fade-in time + fade-out time + transition time

    return () => clearInterval(interval);
  });

  return (
    <>
      <main className='relative lg:min-h-[100vh] min-h-[60vh] mb-[2vw] '  >
        {/* Navigation Menu */}
        <nav className='flex  justify-between py-2 '>
          <div className='w-[5px] h-[5px]'>
          </div>
          <Link href="/">
            <Image
              src='/logo.png'
              width={200}
              height={200}
              alt='Arch Events'
              className='cursor-pointer'
            />
          </Link>
          <CgMenuRightAlt className='my-5 cursor-pointer mr-3 text-[#908D8B]' size={25} onClick={() => setMenu('opacity-1 z-[100] transition-all')} />
        </nav>
        {/* Navigation Menu Opening on Click */}
        <section className={`fixed top-0 left-0 bottom-0 right-0 w-[100vw] h-[100vh] ${menu} bg-white `}>
          <nav className='flex  justify-between py-2 '>
            <div className='w-[5px] h-[5px]'>
            </div>
            <Link href="/">
              <Image
                src='/logo.png'
                width={200}
                height={200}
                alt='Arch Events'
                className='cursor-pointer'
              />
            </Link>
            <CgMenuRightAlt className='my-5 cursor-pointer mr-7 text-[#2C94AD] ' size={25} onClick={() => setMenu('opacity-0 z-[-100] transition-all')} />
          </nav>
          <section className='flex items-center justify-around flex-col h-[80vh] '>
            <header className='flex items-center justify-center flex-col '>
              <div className='flex items-center justify-center sm:flex-row flex-col my-4'>
                <Link href="/" className='sm:mx-8 text-[25px] my-4 gradient-text' >Home</Link>
                <div className='flex flex-col items-center justify-center relative'>
                  <h1 onClick={dropDown} className='sm:mx-8 cursor-pointer text-[25px] my-4 gradient-text' >Services</h1>
                  <div className={`flex-col text-center absolute top-[8vh] w-[150px] p-2 rounded-lg hover: gradient text-white font-medium ${drop}`}>
                    <Link href="/wedding" className='my-1 hover:bg-white rounded-md hover:text-[#2C94AD] transition-all'>Wedding</Link>
                    <Link href="/social-gathering" className='my-1 hover:bg-white rounded-md hover:text-[#2C94AD] transition-all'>Social Gathering</Link>
                    <Link href="/corporates" className='my-1 hover:bg-white rounded-md hover:text-[#2C94AD]  transition-all'> Corporates </Link>
                  </div>
                </div>
                <Link href="/about" className='sm:mx-8 text-[25px] my-4 gradient-text' >About</Link>
                <Link href="/contact" className='sm:mx-8 text-[25px] my-4 gradient-text' >Contact</Link>
              </div>
              <SocialIcons margin='my-5' />
            </header>
            <Line  />
          </section>
        </section>

        {/* Video Tag for background */}
        {
          player
        }
        <section className='flex flex-col items-center justify-around my-[15vw] '>
          <div className='text-center'>
            <h1 className={`  text-white ${ type ? 'sm:text-[45px] text-[28px]' :  parisienne.className  } text-5xl sm:text-8xl font-primary `}>  { primary }</h1>
            {
              secondary === true ? <h1 className={` font-primary text-white text-[25px] sm:text-[27px] lg:text-[38px] italic fade-word ${fadeDirection === 1 ? 'fade-in' : 'fade-out'}`} >
              {wordsArray[currentIndex]}
              </h1> : null
            }
          </div>
          <Line style='my-[5vh] md:my-[8vh] ' />
        </section>
      </main>
    </>
  )
}

export default Hero