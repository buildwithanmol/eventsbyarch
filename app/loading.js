import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center '>
      <Image src="/logo.png" width={150} height={150}   className='w-[150px] animate-pulse' alt="image" />
    </div>
  )
}

export default loading