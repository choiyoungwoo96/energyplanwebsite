"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Sidemenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* + 버튼 (메뉴가 닫혀있을 때만 표시) */}
      {!open && (
        <div
          onClick={toggleMenu}
          className="flex items-center justify-center rounded-full w-[60px] h-[60px] z-50 bg-green-950 fixed bottom-5 right-5 hover:scale-110 transition-all cursor-pointer"
        >
          <span className="text-white text-2xl">+</span>
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
            className="flex flex-col items-center w-[130px] bg-white rounded-2xl shadow-md overflow-hidden fixed top-1/2 right-5 z-40 -translate-y-1/2"
          >
            {/* 로고 영역 */}
            <div className="pt-6 flex flex-col gap-2 items-center">
              <Image
                src="/logo.svg"
                alt="EnergyPlan Logo"
                width={40}
                height={40}
              />
              <div className="text-xs">ENERGY PLAN</div>
            </div>

            {/* SNS 링크 영역 */}
            <div className="flex flex-col gap-4 items-center py-4">
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
                    width={32}
                    height={32}
                  />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* 모집 안내 */}
            <div className="w-full pb-6 flex flex-col items-center justify-center text-center text-sm">
              <p className="text-red-600 font-semibold">
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
                  width={60}
                  height={60}
                />
                <Link href="https://open.kakao.com/o/s5gyadsh">
                  <p className="rounded-2xl text-ms mt-4 bg-red-500 text-white p-2 hover:bg-white hover:text-red-500 transition-all">
                    카카오톡 문의
                  </p>
                </Link>
              </div>
            </div>

            {/* 대표번호 */}
            <Link
              href="tel:1688-8096"
              className="bg-green-900 text-white w-full py-6 flex flex-col items-center text-center"
            >
              <div className="text-white">
                <p className="text-lg font-bold">대표번호</p>
                <p className="text-xl font-bold mt-2">1688-8096</p>
                <p className="text-[10px] mt-2">평일 : 오전 9:00 - 오후 6:00</p>
              </div>
            </Link>

            {/* X 버튼 (메뉴 닫기) */}
            <button
              onClick={toggleMenu}
              className="w-full py-3 text-center text-red-500 hover:bg-gray-200 transition-all text-sm font-bold border-t border-gray-200"
            >
              닫기 ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
