"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function ConstructionCases() {
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const constructionData = [
    {
      image: "/construction01.webp",
      location: "충청도",
      capacity: "388KW",
      type: "RPS",
    },
    {
      image: "/construction02.webp",
      location: "경기도",
      capacity: "183KW",
      type: "임대",
    },
    {
      image: "/construction03.webp",
      location: "경기도",
      capacity: "287KW",
      type: "RPS",
    },
    {
      image: "/construction04.webp",
      location: "경상남도",
      capacity: "272KW",
      type: "RPS",
    },
    {
      image: "/construction05.webp",
      location: "충청북도",
      capacity: "125KW",
      type: "RPS",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: isPlaying,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section
        className="max-w-7xl mx-auto px-4 py-16 scroll-mt-16"
        id="projects"
      >
        <h2 className="text-3xl font-bold text-[#0c4123]">시공사례</h2>
        <h3 className="text-1xl text-[#393939]  mb-2">(Construction Cases)</h3>
        {/* 커스텀 컨트롤 */}
        <div className="flex items-end justify-between gap-3 py-4">
          <div>
            태양광 발전소 설치부터 운영까지, 고객이 직접 경험한 성공적인
            프로젝트를 소개합니다. <br />
            발전량 데이터와 설치 환경을 비교해보며 나에게 맞는 태양광 솔루션을
            찾아보세요!
          </div>
          <div className="flex">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-full border-2 border-[#0c4123] text-[#0c4123] flex items-center justify-center hover:bg-[#0c4123] hover:text-white transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full border-2 border-[#0c4123] text-[#0c4123] flex items-center justify-center hover:bg-[#0c4123] hover:text-white transition"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 rounded-full border-2 border-[#0c4123] text-[#0c4123] flex items-center justify-center hover:bg-[#0c4123] hover:text-white transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {constructionData.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                  <div className="relative w-full h-[260px]">
                    <Image
                      src={item.image}
                      alt={`시공사례 ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-4 text-sm">
                    <div className="bg-[#0c4123] max-w-[100px] text-white text-center rounded-full py-1 font-semibold">
                      주소
                    </div>
                    <div className="bg-gray-100 text-center rounded-full py-1 text-[#0c4123] col-span-2">
                      {item.location}
                    </div>
                    <div className="bg-[#0c4123] max-w-[100px] text-white text-center rounded-full py-1 font-semibold">
                      설치용량
                    </div>
                    <div className="bg-gray-100 text-center rounded-full py-1 text-[#0c4123] col-span-2">
                      {item.capacity}
                    </div>
                    <div className="bg-[#0c4123] max-w-[100px] text-white text-center rounded-full py-1 font-semibold">
                      사업종류
                    </div>
                    <div className="bg-gray-100 text-center rounded-full py-1 text-[#0c4123] col-span-2">
                      {item.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </motion.div>
  );
}
