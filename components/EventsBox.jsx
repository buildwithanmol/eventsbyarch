import React from 'react'
import '../styles/globals.css'
import { Parisienne } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const parisienne = Parisienne({
    subsets: ['latin'],
    weight: '400'
})

const EventsBox = ({ type, styleContent, styleImage, src,  primaryText, secondaryText, linkURL, styleSecondaryText, stylePrimaryText }) => {
    return (
        <>
            {
                type === 'content' ? <div className={`${styleContent} sm:h-[300px] w-[90vw] lg:w-[40vw]  m-2 flex items-center justify-center flex-col relative min-w-[150px]  min-h-[150px] h-[300px] rounded-xl sm:rounded-xl `}>

                    <h1 className={`${stylePrimaryText} sm:text-[70px] text-[55px] ${parisienne.className} text-white `} > {primaryText} </h1>
                    <h1 className={`${styleSecondaryText} font-primary text-white text-[28px]`}> {secondaryText} </h1>
                    <Link href={linkURL} className='absolute bottom-[15px] right-[25px] hover:text-[#ffffff6b] transition-all text-white ' > Explore </Link>
                </div> : null || 
                type === 'image' ? <div className={`${styleImage} sm:h-[300px] m-2 w-[90vw] lg:w-[40vw]  min-h-[150px] h-[300px] rounded-xl  bg-cover `}>
                    <Image
                        src={src}
                        width={400}
                        height={400}
                        alt='homeImages'
                        className='object-cover w-full rounded-xl h-full'
                    />
                </div> : null
            }
        </>
    )
}

export default EventsBox