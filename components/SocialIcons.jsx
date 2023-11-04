import React from 'react'
import '../styles/globals.css'
import { AiFillTwitterSquare, AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Link from 'next/link'
const SocialIcons = ({ margin }) => {
  return (
    <div className={`flex items-center justify-center ${margin}`}>
      <Link href="https://www.instagram.com/eventsbyarch/">
        <AiOutlineInstagram size={30} className='mx-1 cursor-pointer text-[#2C94AD]' />
      </Link>
      <Link href="https://facebook.com/eventsbyarch"><AiOutlineFacebook size={30} className='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
      <Link href="https://www.youtube.com/@eventsbyarch"><AiOutlineYoutube size={30} className='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
        <Link href="#"><FaTiktok size={30} className='mx-1 cursor-pointer text-[#2C94AD]' /></Link>
    </div>
  )
}

export default SocialIcons