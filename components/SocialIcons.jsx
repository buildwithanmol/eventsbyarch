'use client'
import React, { useState } from 'react'
import '../styles/globals.css'
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

const SocialIcons = ({ margin }) => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick((prev) => !prev)
  }
  return (
    <div className={`flex items-center justify-center ${margin} relative`}>
      <AiOutlineInstagram size={30} onClick={handleClick} className='mx-1 cursor-pointer text-[#2C94AD] ' />
      <div className={`p-2 bg-white shadow-xl border ${click ? 'hidden' : 'flex'} absolute -bottom-[350%] rounded-lg left-2 flex-col items-start space-y-1 text-[#46a1b7]`} >
        <Link href="https://www.instagram.com/eventsbyarch/">
          @eventsbyarch
        </Link>
        <Link href="https://www.instagram.com/giftsbyarch/">
          @giftsbyarch
        </Link>
        <Link href="https://www.instagram.com/balloonsbyarch/">
          @balloonsbyarch
        </Link>
      </div>
      <Link href="https://facebook.com/eventsbyarch"><AiOutlineFacebook size={30} className='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
      <Link href="https://www.youtube.com/@eventsbyarch"><AiOutlineYoutube size={30} className='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
      <Link href="#"><FaTiktok size={30} className='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
    </div>
  )
}

export default SocialIcons