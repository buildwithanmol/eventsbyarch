'use client'
import React, { useEffect, useState } from 'react'
import SocialIcons from './SocialIcons'
import 'styles/globals.css'
import Image from 'next/image'

const ContactCard = () => {
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [data, setData] = useState()
  const [style, setStyle] = useState('block')
  const emailFunction = async () => {
    const requestBody = {
      fname: `${fname}`,
      lname: `${lname}`,
      email: `${email}`,
      phone: `${phone}`,
      description: `${description}`,
    };

    const response = await fetch('https://eventsbyarch.ae/api/mail-me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the appropriate content type
      },
      body: JSON.stringify(requestBody), // Convert the body to JSON string
    });

    const data = await response.json();
   if( data.success === true ) {
    setData(data)
    setTimeout(()=>{
      setStyle('hidden')
    },3000)
  }
  };

  return (
    <div className='flex items-center flex-col justify-center sm:flex-row my-[5vw] relative '>
      <div className='bg-[#BFE2DB]  h-[320px] w-[320px] sm:h-[450px] mx-[5rem] sm:w-[450px] rounded-full text-center gradient-border  z-[100] border-4 border-[#2C94AD] flex items-center flex-col justify-center relative'>
        <div className=' font-primary text-[#005B71] font-bold text-[25px] '><h1>GET IN TOUCH</h1></div>
        <div className='my-5 text-[#005B71] text-[18px] font-regular '>
          <p>Phone :  +971 56 493 9726 | +971 55 893 9726</p>
          <p>Email :  rachna@eventsbyarch.ae</p>
          <p>Address :  Al Quoz, Dubai, UAE</p>
        </div>
        <SocialIcons />
        <Image src="/profile.png" alt="image" fill={true} className='sm:w-[400px] overflow-hidden w-[200px] absolute top-[20%]  sm:top-[10%] left-[20%] sm:left-[10%] z-[-1] opacity-50 select-none  ' />
      </div>
      <div className='flex justify-center flex-col mx-[5rem] sm:bg-transparent bg-[#bfe2db] px-2 py-4 my-4 rounded-md'>
        <h1 className='text-[30px] sm:text-left text-center text-[#005B71]'>DROP US A NOTE.</h1>
        <br />
        <br />
        <div className='sm:block grid place-items-center'>
          <input type="text" className='outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3]  bg-transparent ' placeholder='First Name' onChange={(e) => { setFName(e.target.value) }} />
          <input type="text" className='outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent ' placeholder='Last Name' onChange={(e) => { setLName(e.target.value) }} />
        </div>
        <div className='sm:block grid place-items-center'>
          <br />
          <br />
          <input type="text" className='outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent' placeholder='Phone' onChange={(e) => { setPhone(e.target.value) }} />
          <input type="email" className='outline-none border-b-[3px]  text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <br />
        <br />
        <textarea name="content" className='outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3]  bg-transparent' cols="30" rows="1" onChange={(e) => { setDescription(e.target.value) }} placeholder='Send us a couple of line about your event!'></textarea>
        <div className='py-5 px-1 lg:px-auto '>
          <input onClick={emailFunction} className='border-b-[3px] cursor-pointer border-[#74C3E3] text-[#908d8b] ' type='submit' value=' Send ' />
        </div>
      </div>
      {
        data && data.success === true ? <div className={`fixed bottom-[200px] shadow-2xl left-[30vw] lg:left-[47%] gradient px-4 py-2 text-white rounded-md font-medium ${style}`} >
          Mail Sent Successfully!
        </div> : null
      }
    </div>
  )
}

export default ContactCard