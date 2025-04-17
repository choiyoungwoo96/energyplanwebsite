"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-screen fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-4 md:px-8 transition-colors duration-300">
        {/* 로고 */}
        <div className="flex items-center gap-2">
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
        </div>

        {/* 메뉴 */}
        <nav
          className={`hidden md:flex items-center gap-8 font-medium transition-colors duration-300 ${
            isScrolled ? "text-[#0c4123]" : "text-white"
          }`}
        >
          {[
            { label: "회사소개", href: "#about" },
            { label: "사업소개", href: "#services" },
            { label: "커뮤니티", href: "#community" },
            { label: "시공사례", href: "#projects" },
            { label: "Q&A", href: "#qna" },
            { label: "오시는길", href: "#location" },
          ].map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="relative group transition"
            >
              <span className="transition-colors duration-300 group-hover:text-green-300">
                {menu.label}
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-[#0c4123]" : "bg-white"
                } w-0`}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
