import React from 'react'
import Image from 'next/image'
const loading = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center '>
      <Image  src="/logo.png" className=' animate-pulse' alt="image" width={150} />
    </div>
  )
}

export default loading