"use client";

import { useState } from "react";
import { FaPause, FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FullScreenSlide() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <img
        src="/slide01.jpg" // 실제 경로로 교체
        alt="슬라이드 배경"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 어두운 반투명 오버레이 */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

      {/* 가운데 텍스트 콘텐츠 */}
      <div className="relative z-10 w-full h-full flex items-center justify-start">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 text-white">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              태양이 만드는 미래, 지속 가능한 에너지!
            </h1>
            <p className="text-base md:text-lg mb-6">
              태양광 발전소 설계부터 시공까지, 맞춤형 솔루션 제공
            </p>
            <button className="bg-[#0c4123] text-white px-6 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-[#09351b] transition">
              견적 상담하기
            </button>
          </div>
        </div>
      </div>

      {/* 우측 하단 컨트롤 */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-20">
        <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
          <FaArrowLeft className="text-green-900" />
        </button>
        <button
          className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <FaPause className="text-green-900" />
          ) : (
            <FaPlay className="text-green-900" />
          )}
        </button>
        <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
          <FaArrowRight className="text-green-900" />
        </button>
      </div>
    </div>
  );
}
