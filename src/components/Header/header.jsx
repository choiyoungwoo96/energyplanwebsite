"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "서비스", href: "#services" },
    { label: "회사소개", href: "#about" },
    { label: "사업소개", href: "#business" },
    { label: "커뮤니티", href: "#community" },
    { label: "시공사례", href: "#projects" },
    { label: "Q&A", href: "#qna" },
    { label: "오시는길", href: "#location" },
  ];

  return (
    <header
      className={`w-screen fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-4 md:px-8 transition-colors duration-300">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="energyplanicon"
            className="w-[32px] h-auto"
          />
          <p
            className={`text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-[#0c4123]" : "text-white"
            }`}
          >
            ENERGYPLAN
          </p>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav
          className={`hidden md:flex items-center gap-10 font-medium transition-colors duration-300 ${
            isScrolled ? "text-[#0c4123]" : "text-white"
          }`}
        >
          {menuItems.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="relative group transition"
            >
              <span className="transition-colors duration-300">
                {menu.label}
              </span>
              <span
                className={`pointer-events-none absolute left-1/2 -bottom-1 h-[2px] w-full max-w-0 transform -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:max-w-full ${
                  isScrolled ? "bg-[#0c4123]" : "bg-white"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className={`md:hidden text-2xl transition-colors duration-300 ${
            isScrolled ? "text-[#0c4123]" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center gap-8 text-[#0c4123] text-xl font-semibold transition-all duration-300">
          {/* 닫기 버튼 */}
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {/* 모바일 메뉴 항목 */}
          {menuItems.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
