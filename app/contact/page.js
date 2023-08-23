import ContactCard from 'components/ContactCard'
import Hero from 'components/Hero'
import React from 'react'
import 'styles/globals.css'
import Line from 'components/Line'
const Contact = () => {
  return (
    <>
      <Hero primary='GET IN TOUCH' />
      <h1 className='text-primary text-center gradient-text font-primary sm:text-[30px] text-[25px] '>
      We don’t just plan an event, we create an experience.<br/> Let’s talk about making your dream event happen!
      </h1>
      <Line style='my-5' />
      <ContactCard/>
    </>
  )
}

export default Contact