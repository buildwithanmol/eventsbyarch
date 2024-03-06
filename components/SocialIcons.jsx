'use client'
import React, { useState } from 'react'
import '../styles/globals.css'
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

const SocialIcons = ({ margin }) => {
  return (
    <div classNameName={`flex items-center justify-center ${margin} relative`}>
      <div className="group">
        <AiOutlineInstagram size={30} className='mx-1 cursor-pointer text-[#2C94AD] ' />
        <div className="hidden group-hover:block p-2 bg-white shadow-xl border absolute rounded-lg left-2  space-y-1 text-[#46a1b7]">
          <Link href="https://www.instagram.com/eventsbyarch/">
            @eventsbyarch
          </Link><br />
          <Link href="https://www.instagram.com/giftsbyarch/">
            @giftsbyarch
          </Link><br />
          <Link href="https://www.instagram.com/balloonsbyarch/">
            @balloonsbyarch
          </Link>
        </div>
      </div>

      <Link href="https://facebook.com/eventsbyarch"><AiOutlineFacebook size={30} classNameName='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
      <Link href="https://www.youtube.com/@eventsbyarch"><AiOutlineYoutube size={30} classNameName='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
      <Link href="#"><FaTiktok size={30} classNameName='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
    </div>
  )
}

export default SocialIcons