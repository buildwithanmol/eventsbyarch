import React from 'react'
import EventsLayout from 'components/EventsLayout'

const SocialGathering = () => {
  const images = [
    '/social/1.jpeg',
    '/social/2.png',
    '/social/3.jpg',
    '/social/5.jpg',
  ]
  return (
    <EventsLayout primaryTitle='Social Gatherings By Arch' heroTitle='Social Gatherings' secondaryTitle='Seamless Planning & Bespoke Designs' contentHeading="We're Obsessed With Wow!" contentParagraph='We masterfully transform your events into unforgettable memories. No detail is overlooked, and our premium partners in lighting,entertainment and food are impeccably vetted for each and every event.' imgSrc={images}
    contactHeader='We don’t just plan an Event, We create an Experience. Let’s talk about making your Dream Event happen!'
    />
  )
}

export default SocialGathering