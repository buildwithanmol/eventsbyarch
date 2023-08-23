import React from 'react'
import SocialIcons from './SocialIcons'
import 'styles/globals.css'
import Image from 'next/image'

const ContactCard = () => {
  return (
    <div className='flex items-center flex-col justify-center sm:flex-row my-[5vw] '>
      <div className='bg-[#BFE2DB]  h-[320px] w-[320px] sm:h-[450px] mx-[5rem] sm:w-[450px] rounded-full text-center gradient-border relative z-[100] border-4 border-[#2C94AD] flex items-center flex-col justify-center '>
        <div className=' font-primary text-[#005B71] font-bold text-[25px] '><h1>GET IN TOUCH</h1></div>
        <div className='my-5 text-[#005B71] text-[18px] font-regular '>
          <p>Phone :  +971 56 493 9726 | +971 55 893 9726</p>
          <p>Email :  rachna@eventsbyarch.ae</p>
          <p>Address :  Al Quoz, Dubai, UAE</p>
        </div>
        <SocialIcons />
        <Image  src="/profile.png" alt="image" className='sm:w-[400px] w-[200px]  absolute top-[20%]  sm:top-[10%] left-[20%] sm:left-[10%] z-[-1] opacity-50 select-none  ' />
      </div>
      <div className='flex justify-center flex-col mx-[5rem] sm:bg-transparent bg-[#bfe2db] px-2 py-4 my-4 rounded-md'>
        <h1 className='text-[30px] sm:text-left text-center text-[#005B71]'>DROP US A NOTE.</h1>
        <br />
        <br />
        <div className='sm:block grid place-items-center'>
          <input type="text" className='outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3]  bg-transparent ' placeholder='First Name' />
          <input type="text" className='outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent ' placeholder='Last Name' />
        </div>
        <div className='sm:block grid place-items-center'>
          <br />
          <br />
          <input type="text" className='outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent' placeholder='Phone' />
          <input type="email" className='outline-none border-b-[3px]  text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent' placeholder='Email' />
        </div>
        <br />
        <br />
        <textarea name="content" className='outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3]  bg-transparent' id="" cols="30" rows="1" placeholder='Send us a couple of line about your event!'></textarea>
      </div>
    </div>
  )
}

export default ContactCard