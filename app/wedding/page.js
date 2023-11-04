import React from 'react'
import EventsLayout from 'components/EventsLayout'

const Wedding = () => {
  const images = [
    '/wedding/4.jpg',
    '/wedding/2.jpg',
    '/wedding/6.jpg',
    '/wedding/1.jpg',
  ]
  return (
    <EventsLayout primaryTitle='Weddings By Arch' heroTitle='Weddings' secondaryTitle='Full Planning & Premier Design' contentHeading='Every. Single. Detail.' contentParagraph='We know that on your wedding day, nothing is more important than Every. Single. Detail.</br> We make it our mission to guide couples through each step of the wedding planning process to ensure everyone – from newly engaged couples to each individual guest – are happy, carefree and in the moment on the big day.' imgSrc={images}
    contactHeader='We don’t just plan an Event, We create an Experience. Let’s talk about making your Dream Event happen!'
    />
  )
}

export default Wedding