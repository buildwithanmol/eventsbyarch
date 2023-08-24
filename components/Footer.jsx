import Link from 'next/link'
import React from 'react'
import SocialIcons from './SocialIcons'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className='my-5 py-2 ' >
          <div className='flex items-center justify-around'>
            <Image src="/logo.png" width={180} height={0} alt="image" className='w-[180px] ' />
            <div className='hidden md:flex items-center justify-center '> 
              <Link href='/' className='mx-2 font-primary text-[#908d8b]' >HOME</Link>
              <Link href='/social-gathering' className='mx-2 font-primary text-[#908d8b]' >SERVICES</Link>
              <Link href='/about' className='mx-2 font-primary text-[#908d8b]' >ABOUT</Link>
              <Link href='/contact' className='mx-2 font-primary text-[#908d8b]' >CONTACT</Link>
             </div>
             <SocialIcons/>
          </div>
          <hr className='mx-10' />
          <p className='text-[#908d8b] my-2 text-center '>All Rights Reserved. Arch Events 2023</p>
      </footer>
    </>
  )
}

export default Footer