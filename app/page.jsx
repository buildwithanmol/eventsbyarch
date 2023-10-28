"use client";
import React, { useRef, useState } from "react";
import Hero from "../components/Hero";
import "../styles/globals.css";
import Line from "components/Line";
import Link from "next/link";
import EventsBox from "components/EventsBox";
import { Parisienne } from "next/font/google";
import Image from "next/image";
import TestimonialCard from "components/TestimonialCard";
import { Data } from "data/usersData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ContactCard from "components/ContactCard";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

const data = Data;

const Home = () => {
  return (
    <>
      <Hero type={true} primary="Let Us Plan Your" secondary={true} />
      <section>
        <h1 className="gradient-text sm:text-[30px] font-medium text-[25px] text-center font-primary ">
          {" "}
          GIVE YOUR GUEST A REASON TO STARE!
        </h1>
        <p className={`text-[#908d8b] italic text-center text-xl`}>
          Refined and Embellished. Raw and Edgy. Simple and Classic. Whatever
          Your Style…
        </p>{" "}
        <p className="text-center  text-[#908d8b] mx-10">
          From Made-to-measure weddings, Luxurious birthdays & Intimate social
          gatherings to Elaborate corporate events,
          <br /> <span className=""> ARCH EVENTS </span> has a flair for
          providing customizable design, planning & production services that are
        </p>
        <h1 className="gradient-text sm:text-[30px] text-[25px] font-medium text-center font-primary">
          {" "}
          Uniquely You, Uniquely Dubai!
        </h1>
        <br />
        <br />
        <div className="flex flex-col items-center md:space-x-4 justify-center md:flex-row">
          <h1 className="text-[#908d8b] text-center text-5xl  font-primary">WELCOME</h1> <br />
           <span className="text-[18px] text-[#908d8b]">to</span>
           <br />
          <span
            className={`text-center gradient-text text-5xl lg:text-8xl my-2 ${parisienne.className} `}
          >
            Arch Events
          </span>
        </div>
        <Line style="my-8" />
      </section>
      <section className="flex items-center justify-center flex-col ">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center sm:flex-row  flex-col-reverse  ">
            <EventsBox
              type="content"
              primaryText="Elegant"
              secondaryText="WEDDINGS"
              styleSecondaryText=" absolute bottom-[30%] right-[16%]  "
              styleContent="gradient"
              linkURL="/wedding"
            />
            <EventsBox
              type="image"
              src="/home/wedding.jpeg"
            />
          </div>
          <div className="flex items-center sm:flex-row flex-col  ">
            <EventsBox
              type="image"
              src="/home/events.jpg"
            />
            <EventsBox
              type="content"
              primaryText="Extravaganza"
              secondaryText="SOCIALS"
              styleSecondaryText=" absolute bottom-[30%] left-[20%]  "
              styleContent="gradient-reverse"
              linkURL="/social-gathering"
            />
          </div>
          <div className="flex items-center sm:flex-row flex-col-reverse ">
            <EventsBox
              type="content"
              primaryText="Meticulous"
              secondaryText="CORPORATES"
              styleSecondaryText=" absolute bottom-[30%] right-[10%]  "
              styleContent="gradient"
              linkURL="/corporates"
            />
            <EventsBox
              type="image"
              src="/home/corporates.jpg"
            />
          </div>
        </div>
        <Line style="my-8" />
      </section>
      <section className="flex sm:flex-row flex-col items-center justify-evenly gradient py-6 relative ">
        <div className="relative">
          <Image
            src="/home/photo-output.jpg"
            width={450}
            height={600}
            alt="image"
            className="rounded-[30px] rounded-br-[110px] shadow-xl "
          />
        </div>
        <div className="py-5 ">
          <h1 className="italic text-white text-2xl text-center  sm:text-left ">
            ‘‘ Minimalism is great. Maximalizsm is too. What we avoid is
            Medium-ism."
          </h1>
          <h1
            className={`font-primary font-bold text-white mb-10 sm:text-left  md:text-2xl text-center `}
          >
            &nbsp; ~ RACHNA DAND
          </h1>
          <p className="font-primary font-medium text-white text-[18px] sm:text-[22px] ml-5 max-w-3xl">
            Gifted with a sense of understanding people and a passion for
            creating joy around her, Rachna is the magic maker at Arch Events.
            <br />
            She believes there is something to celebrate in every moment.
          </p>
        </div>
        <Link
          href="/about"
          className="absolute right-[30px] bottom-[20px] hover:text-[#908d8b] z-10 text-white font-primary italic"
        >
          {" "}
          Learn More{" "}
        </Link>
      </section>
      <Line style="my-8" />
      <section className="gradient py-10 overflow-x-hidden">
        <h1 className="text-center text-white my-5 text-[22px] sm:text-[40px] font-primary ">
          Success Stories
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
              slidesPerView: 4, // Display 3 slides per view on PCs (>= 1024px)
            },
          }}
        >
          <div className="flex items-center justify-center">
            {data
              ? data.map((e, i) => {
                  return (
                    <SwiperSlide key={i}>
                      {" "}
                      <TestimonialCard styleIt="mx-auto" key={i} src={e} />{" "}
                    </SwiperSlide>
                  );
                })
              : null}
          </div>
        </Swiper>
        <div className="flex items-center justify-center mt-8">
          <Link href="https://www.google.com/maps/place/Arch+Events+Dubai/@25.212436,55.4121278,17z/data=!4m8!3m7!1s0x3e5f61a0efbb84bd:0x31b2b6a8432cdbb4!8m2!3d25.212436!4d55.4121278!9m1!1b1!16s%2Fg%2F11rtlbbmmx?entry=ttu" className={`hover:shadow-xl shadow-sm transition-all flex items-center font-primary bg-white py-2 px-4 rounded-lg text-green-600 text-xl font-medium`}>
            <Image
              src="/google-logo.png"
              width={30}
              height={30}
              alt="review on google"
              className="mx-2 "
            />
            More Reviews
          </Link>
        </div>
      </section>
      <h1
        className={`lg:text-[30px] italic text-[25px] text-center font-primary gradient-text mx-3 my-[2vw] `}
      >
        We don’t just plan an Event, We create an Experience.
        <br /> Let’s talk about making your Dream Event happen!
      </h1>
      <Line style="my-8" />
      <section>
        <ContactCard />
      </section>
    </>
  );
};

export default Home;
