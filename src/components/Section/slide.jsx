"use client";

import Link from "next/link";
import { useState } from "react";

export default function FullScreenSlide() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="relative w-screen h-screen overflow-hidden scroll-mt-16">
      {/* 배경 이미지 */}
      <img
        src="/slide01.webp" // 실제 경로로 교체
        alt="슬라이드 배경"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 어두운 반투명 오버레이 */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

      {/* 가운데 텍스트 콘텐츠 */}
      <div className="relative z-10 w-full h-full flex items-center justify-start">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-white">
              태양이 만드는 미래, 지속 가능한 에너지!
            </h1>
            <p className="text-base md:text-lg mb-6 text-white">
              태양광 발전소 설계부터 시공까지, 맞춤형 솔루션 제공
            </p>
            <Link
              href="http://www.naver.com"
              className="bg-[#0c4123] px-6 py-2 rounded-lg text-sm md:text-base font-semibold group hover:bg-white   transition"
            >
              <span className="text-white group-hover:text-green-900">
                견적문의
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
