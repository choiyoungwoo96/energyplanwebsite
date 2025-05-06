"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Sidemenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <>
      {/* + 버튼 */}
      {!open && (
        <div
          onClick={toggleMenu}
          className="flex items-center justify-center rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] z-50 bg-green-950 fixed bottom-4 right-4 sm:bottom-5 sm:right-5 hover:scale-110 transition-all cursor-pointer"
        >
          <span className="text-white text-xl sm:text-2xl">+</span>
        </div>
      )}

      {/* 사이드 메뉴 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center w-[110px] sm:w-[130px] bg-white rounded-2xl shadow-md overflow-hidden fixed top-1/2 right-4 sm:right-5 z-40 -translate-y-1/2"
          >
            {/* 로고 영역 */}
            <div className="pt-4 sm:pt-6 flex flex-col gap-2 items-center">
              <Image
                src="/logo.svg"
                alt="EnergyPlan Logo"
                width={36}
                height={36}
              />
              <div className="text-[10px] sm:text-xs">ENERGY PLAN</div>
            </div>

            {/* SNS 링크 */}
            <div className="flex flex-col gap-3 sm:gap-4 items-center py-3 sm:py-4">
              {[
                { src: "/Youtube.png", label: "유튜브" },
                { src: "/Tistory.png", label: "티스토리" },
                { src: "/Instagram.png", label: "인스타" },
                { src: "/NaverBlog.jpg", label: "블로그" },
              ].map((item, idx) => (
                <Link
                  href=""
                  key={idx}
                  className="flex flex-col items-center hover:scale-110 transition-all"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={28}
                    height={28}
                    className="sm:w-[32px] sm:h-[32px]"
                  />
                  <span className="text-[10px] sm:text-xs mt-1">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* 모집 안내 */}
            <div className="w-full pb-5 sm:pb-6 flex flex-col items-center justify-center text-center text-[11px] sm:text-sm">
              <p className="text-red-600 font-semibold leading-tight">
                전국 EPC
                <br />
                태양광 영업자
                <br />
                항시 모집중
              </p>
              <div className="mt-2 flex flex-col items-center">
                <Image
                  src="/kakaotalk.svg"
                  alt="카카오톡"
                  width={48}
                  height={48}
                  className="sm:w-[60px] sm:h-[60px]"
                />
                <Link href="https://open.kakao.com/o/s5gyadsh">
                  <p className="rounded-2xl text-[11px] sm:text-ms mt-3 bg-red-500 text-white px-3 py-1 hover:bg-white hover:text-red-500 transition-all">
                    카카오톡 문의
                  </p>
                </Link>
              </div>
            </div>

            {/* 대표번호 */}
            <Link
              href="tel:1688-8096"
              className="bg-green-900 text-white w-full py-5 sm:py-6 flex flex-col items-center text-center"
            >
              <p className="text-base sm:text-lg font-bold text-white">
                대표번호
              </p>
              <p className="text-lg sm:text-xl font-bold mt-1 text-white">
                1688-8096
              </p>
              <p className="text-[9px] sm:text-[10px] mt-1 text-white">
                평일 : 오전 9:00 - 오후 6:00
              </p>
            </Link>

            {/* 닫기 버튼 */}
            <button
              onClick={toggleMenu}
              className="w-full py-3 text-center text-red-500 hover:bg-gray-200 transition-all text-[11px] sm:text-sm font-bold border-t border-gray-200"
            >
              닫기 ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
