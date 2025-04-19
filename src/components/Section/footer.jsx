"use client";

import Image from "next/image";
import { Youtube, Instagram, MessageCircleMore, Smile } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#10221B] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* Left: Company Info */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="에너지플랜 로고"
              width={20}
              height={20}
            />
            <span className="font-semibold">ENERGYPLAN</span>
          </div>
          <p>
            (주)에너지플랜
            <span className="md:hidden block">
              <br />
            </span>
            <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            서울특별시 강서구 마곡중앙로 161-8, 두산더랜드파크 B동 515호
          </p>
          <p>사업자등록번호: 422-07-03044 &nbsp;&nbsp; 대표자: 강성묵</p>
          <p>Copyright ⓒ ENERGYPLAN Co., Ltd. All rights reserved.</p>
        </div>

        {/* Right: Customer Center + Social */}
        <div className="space-y-3 text-sm md:text-right">
          <div className="text-lg font-bold">고객센터</div>
          <div>
            <Link href="tel:1688-8096" className="text-2xl font-bold">
              1688 - 8096
            </Link>
          </div>
          <div className="text-xs text-gray-300">
            평일 09:00 ~ 18:00 (주말/공휴일 제외)
          </div>
          <div className="flex gap-3 mt-3 md:justify-end justify-start">
            <div className="bg-white flex p-2 rounded-lg gap-4">
              <Link href="https://www.youtube.com/@energy_plan">
                <img
                  src="/Youtube.png"
                  className="bg-white  w-[25px] h-[25px]"
                />
              </Link>
              <Link href="https://blog.naver.com/liplip2014">
                <img
                  src="/NaverBlog.jpg"
                  className="bg-white  w-[25px] h-[25px]"
                />
              </Link>
              <Link href="https://www.instagram.com/energyplan_/">
                <img
                  src="/Instagram.png"
                  className="bg-white  w-[25px] h-[25px]"
                />
              </Link>
              <Link href="https://energyplan.tistory.com/">
                <img
                  src="/Tistory.png"
                  className="bg-white  w-[25px] h-[25px]"
                />
              </Link>
            </div>
            {/* <Youtube className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            <MessageCircleMore className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            <Smile className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            <Instagram className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
