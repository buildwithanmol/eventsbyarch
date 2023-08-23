import React from 'react'
import '../styles/globals.css'
import {AiFillTwitterSquare,AiOutlineYoutube,AiOutlineFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
const SocialIcons = ({margin}) => {
  return (
    <div className={`flex items-center justify-center ${margin}`}>
      <AiOutlineInstagram size={30} className='mx-1 cursor-pointer text-[#2C94AD]'/>
      <AiOutlineFacebook size={30} className='mx-1 cursor-pointer text-[#2C94AD]'/>
      <AiOutlineYoutube size={30} className='mx-1 cursor-pointer text-[#2C94AD]'/>
      <AiFillTwitterSquare size={30} className='mx-1 cursor-pointer text-[#2C94AD]'/>
      <FaTiktok size={30} className='mx-1 cursor-pointer text-[#2C94AD]'/>
    </div>
  )
}

export default SocialIcons