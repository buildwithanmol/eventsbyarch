'use client'
import React, { useRef, useState } from "react";
import Hero from "../components/Hero";
import "../styles/globals.css";
import Line from "components/Line";
import Link from "next/link";
import EventsBox from "components/EventsBox";
import { Parisienne } from 'next/font/google'
import Image from "next/image";
import TestimonialCard from "components/TestimonialCard";
import { Data } from "data/usersData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ContactCard from "components/ContactCard";

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: '400'
})

const data = Data;

const Home = () => {
  return (
    <>
      <Hero primary="LET US PLAN YOUR" secondary={true} />
      <section>
        <h1 className="gradient-text sm:text-[30px] font-medium text-[25px] text-center font-primary ">
          {" "}
          GIVE YOUR GUEST A REASON TO STARE!
        </h1>
        <p className="text-center my-5 text-[#908d8b] mx-10">
          Refined and embellished. Raw and edgy. Simple and classic. Whatever
          your style… <br />
          From Made-to-measure weddings, luxurious, birthdays & intimate social
          gatherings to elaborate corporate events,
          <br /> Arch Events has a flair for providing customizable design,
          planning & production services that are...
        </p>
        <h1 className="gradient-text sm:text-[30px] text-[25px] font-medium text-center font-primary">
          {" "}
          Uniquely You, Uniquely Dubai!
        </h1>
        <br />
        <br />
        <h1 className="text-[#908d8b] text-center text-[25px] sm:text-[30px] font-primary">
          {" "}
          WELCOME <span className="text-[18px]">at</span>{" "}
        </h1>
        <h1 className={`text-center gradient-text text-[30px] sm:text-[50px] my-2 ${parisienne.className} `} >
          Arch Events
        </h1>
        <Line style="my-5" />
      </section>
      <section className="flex items-center justify-center flex-col ">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center sm:flex-row  flex-col-reverse  ">
            <EventsBox type="content" primaryText='Elegant' secondaryText='WEDDINGS' styleSecondaryText=' absolute bottom-[30%] right-[16%]  ' styleContent='gradient' linkURL='/wedding' />
            <EventsBox type="image" styleImage='bg-[url("https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg")]' />
          </div>
          <div className="flex items-center sm:flex-row flex-col  ">
            <EventsBox type="image" styleImage='bg-[url("https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg")] ' />
            <EventsBox type="content" primaryText='Extravaganza' secondaryText='SOCIALS' styleSecondaryText=' absolute bottom-[30%] left-[12%]  ' styleContent='gradient-reverse' linkURL='/social-gathering' />
          </div>
          <div className="flex items-center sm:flex-row flex-col-reverse  ">
            <EventsBox type="content" primaryText='Meticulous' secondaryText='CORPORATES' styleSecondaryText=' absolute bottom-[30%] right-[10%]  ' styleContent='gradient' linkURL='/corporates' />
            <EventsBox type="image" styleImage='bg-[url("https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg")]' />
          </div>
        </div>
        <Line style='my-5' />
      </section>
      <section className="flex sm:flex-row flex-col items-center justify-evenly gradient py-6 relative ">
        <div className="relative">
          <Image
            src="/founder.jpg"
            width={280}
            height={500}
            alt="image"
            className="rounded-[30px] rounded-br-[110px] shadow-xl "
          />
        </div>
        <div className="py-5 ">
          <h1 className="font-primary italic text-white text-[20px] text-center sm:text-[30px] sm:text-left ">
            ‘‘ Minimalism is great. Maximalism is too. <br /> &nbsp;&nbsp;
            What we avoid is medium-ism.
          </h1>
          <h1 className="font-primary font-medium text-white sm:text-left  text-[16px] text-center sm:text-[25px]">
            ~ RACHNA DAND
          </h1>
          <p className="text-white font-primary text-[14px] sm:text-left text-center sm:text-[18px] mb-4"> &nbsp;&nbsp;&nbsp;&nbsp; FOUNDER</p>
          <p className="font-primary font-medium text-white text-[18px] sm:text-[22px] ml-5 max-w-[480px]">
            Gifted with a sense of understanding people and a passion for creating joy around her, Rachna is the magic maker at Arch Events. She believes there is something to celebrate in every moment.
          </p>
        </div>
        <Link href='/about' className="absolute right-[30px] bottom-[20px] hover:text-[#908d8b] z-10 text-white font-primary italic"> Learn More </Link>
      </section>
      <Line style='my-5' />
      <section className="gradient py-10 overflow-x-hidden">
        <h1 className="text-center text-white my-5 text-[22px] sm:text-[40px] font-primary ">
          What our clients say ?
        </h1>
        <Swiper
          slidesPerView={1} // Display 1 slide per view by default
          spaceBetween={-120}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // Set breakpoints for different screen sizes
            768: {
              slidesPerView: 1, // Display 1 slide per view on phones (<= 768px)
            },
            1024: {
              slidesPerView: 3, // Display 3 slides per view on PCs (>= 1024px)
            },
          }}
        >
          <div className="flex items-center justify-center">
            {
              data ? data.map((e, i) => {
                return <SwiperSlide key={i}> <TestimonialCard styleIt='mx-auto' key={i} name={e.name} review={e.review} /> </SwiperSlide>
              }) : null
            }
          </div>
        </Swiper>
      </section>
      <h1 className={`lg:text-[30px] text-[25px] text-center font-primary gradient-text mx-3 my-[2vw] `}>We don’t just plan an event, we create an experience.<br /> Let’s talk about making your dream event happen!</h1>
      <Line style='my-5' />
      <section>
        <ContactCard/>
      </section>
    </>
  );
};

export default Home;
