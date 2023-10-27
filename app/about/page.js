"use client";
import Hero from "components/Hero";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Line from "components/Line";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
  const images = [
    "/team/1.jpg",
    "/team/2.jpg",
    "/team/3.jpg",
    "/team/4.jpg",
    "/team/5.jpg",
    "/team/6.jpg",
    "/team/7.jpg",
  ];
  return (
    <>
      <Hero primary="Meet The Team" />
      <Line style=" my-8 " />
      <section className="flex p-4 sm:flex-row flex-col items-center justify-evenly gradient py-6 relative relative">
        <Image
          src="/team/rachna image 4.png"
          alt="image"
          width={300}
          height={500}
          className="md:mx-12 rounded-[30px] rounded-br-[110px] shadow-xl "
        />
        <div className="px-12 py-2 text-white ">
          <h1 className="font-primary text-[22px]">RACHNA DAND</h1>
          <p className="font-primary text-[20px] mb-4">
            Owner & Creative Director
          </p>
          <p className="">
            <span className="text-2xl font-primary italic ">
              {" "}
              Rachna = Creation{" "}
            </span>{" "}
            <br />
            As her name says, she is a wizard when it comes to creative ideas
            and thinking out of the box. It's her speciality to understand the
            requirements and chisel the rough rock into a breathtaking
            sculpture. Attention to details and perfection are her strengths
            which transcends every celebration into a beautiful memory. Her
            belief that Life is full of moments and she ensures through her work
            that these moments will forever be etched in your remembrance.
          </p>
        </div>
      </section>
      <hr className="mx-20 my-5" />
      <section className="flex items-center justify-center sm:flex-row  flex-col-reverse relative ">
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          className="aspect-square rounded-3xl overflow-hidden max-w-lg  drop-shadow-2xl"
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          {images.map((e, i) => {
            return (
              <Image
                key={i}
                src={e}
                alt="image"
                width={450}
                height={450}
                className=""
              />
            );
          })}
        </Carousel>
        <div className="px-12 py-2  ">
          <h1 className="text-2xl md:text-6xl  italic text-[#005b71]">
            {" "}
            Meet The Team{" "}
          </h1>
        </div>
      </section>
    </>
  );
};

export default About;
