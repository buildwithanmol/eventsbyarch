import React from 'react'
import EventsLayout from 'components/EventsLayout'

const Corporates = () => {
  const images = [
    '/corporate/3.jpg',
    '/corporate/2.jpg',
    '/corporate/1.jpg',
    '/social/4.jpg',
  ]
  return (
    <EventsLayout primaryTitle='Corporate Activations By Arch' heroTitle='Corporates' secondaryTitle='Meticulously Detailed Coordination & Process' contentHeading="Expect.
    Exceptional." contentParagraph='In partnership with our clients we create events that always have their brand or event statement at the center of each celebration. Our goal is to exceed expectations and ensure that each client achieves their event objectives.' imgSrc={images}
    contactHeader='We don’t just plan an Event, We create an Experience. Let’s talk about making your Dream Event happen!'
    />
  )
}

export default Corporates