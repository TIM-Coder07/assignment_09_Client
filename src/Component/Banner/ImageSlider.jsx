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
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden">

              {/* Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                unoptimized
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-end pb-5">
                <div className="text-white px-10 max-w-xl">
                  <h2 className="text-3xl font-bold mb-3">
                    {slide.title}
                  </h2>
                  <p className="mb-5 text-sm opacity-90">
                    {slide.desc}
                  </p>

                  <Link href="/tutors">
                    <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition">
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