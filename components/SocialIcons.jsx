'use client'
import React, { useState } from 'react'
import '../styles/globals.css'
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

const SocialIcons = ({ margin }) => {
  return (
    <div className={`flex items-center justify-center ${margin} relative gap-2`}>
      <Link href={`https://www.instagram.com/eventsbyarch/`} className='cursor-pointer'>
        <AiOutlineInstagram color='#2C94AD' size={30} className=' cursor-pointer text-[#2C94AD] ' />
      </Link>
      <Link href="https://facebook.com/eventsbyarch"><AiOutlineFacebook color='#2C94AD' size={30} classNameName=' cursor-pointer ' /></Link>
      <Link href="https://www.youtube.com/@eventsbyarch"><AiOutlineYoutube color='#2C94AD' size={30} classNameName=' cursor-pointer ' /></Link>
      <Link href="#"><FaTiktok color='#2C94AD' size={30} classNameName=' cursor-pointer ' /></Link>
    </div>
  )
}

export default SocialIcons