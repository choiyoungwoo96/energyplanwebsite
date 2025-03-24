import Link from "next/link";

export default function Header() {
  return (
    <div className="w-screen px-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="energyplanicon"
            className="w-[32px] h-auto"
          />
          <p className="text-xl text-[#0c4123] font-medium">ENERGYPLAN</p>
        </div>
        <div className="flex items-center gap-8 text-[#0c4123] font-medium">
          <Link href="#about">회사소개</Link>
          <Link href="#services">사업소개</Link>
          <Link href="#community">커뮤니티</Link>
          <Link href="#projects">시공사례</Link>
          <Link href="#qna">Q&A</Link>
          <Link href="#location">오시는길</Link>
        </div>
      </div>
    </div>
  );
}
