"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

export default function ImageSlider() {
  const slides = [
    {
      img: "/assets/b1.png",
      title: "Learn from Expert Tutors",
      desc: "Book online sessions with qualified teachers anytime, anywhere.",
    },
    {
      img: "/assets/b2.png",
      title: "Flexible Learning Schedule",
      desc: "Choose your preferred time and manage your study routine easily.",
    },
    {
      img: "/assets/b3.png",
      title: "Boost Your Academic Success",
      desc: "Get personalized guidance and improve your performance faster.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* RESPONSIVE HEIGHT WRAPPER */}
            <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
              
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                sizes=" (max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px "
                className="object-cover object-center"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-end">
                
                <div className="text-white px-4 sm:px-6 md:px-10 pb-5 sm:pb-10 max-w-2xl">
                  
                  <h2 className="text-base sm:text-xl md:text-3xl font-bold mb-2 sm:mb-3">
                    
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base opacity-90 mb-3 sm:mb-5">
                    
                    {slide.desc}
                  </p>
                  <Link href="/tutors">
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm md:text-base px-4 sm:px-5 py-2 rounded-lg transition active:scale-95">
                      
                      Tutors Page
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
