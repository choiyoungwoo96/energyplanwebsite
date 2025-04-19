"use client";

import Link from "next/link";

export default function CommunitySection() {
  return (
    <section
      className="w-full bg-cover bg-center px-4 scroll-mt-16"
      style={{ backgroundImage: "url('/communitybg.png')" }}
      id="community"
    >
      <div className="max-w-7xl mx-auto py-16">
        <div className="flex flex-col items-center justify-center text-center text-white">
          {/* 제목 */}
          <h2 className="text-3xl md:text-4xl font-bold">커뮤니티</h2>
          <p className="text-base md:text-lg">(Community)</p>
          <p className="text-md md:text-xl font-light mt-4 mb-10 max-w-2xl">
            유튜브에서 쉽게 배우고, 블로그에서 정보 얻고, SNS에서 함께
            공유해보세요!
          </p>

          {/* 유튜브 썸네일 */}
          <div className="w-full max-w-5xl aspect-video mb-10 rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/-dab50NXiCU"
              title="태양광 사업 3가지 방식"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* 버튼 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
            {[
              {
                label: "유튜브",
                href: "https://www.youtube.com/@energy_plan",
                img: "/Youtube.png",
              },
              {
                label: "티스토리",
                href: "https://energyplan.tistory.com/",
                img: "/Tistory.png",
              },
              {
                label: "네이버블로그",
                href: "https://blog.naver.com/liplip2014",
                img: "/NaverBlog.jpg",
              },
              {
                label: "인스타",
                href: "https://www.instagram.com/energyplan_/",
                img: "/Instagram.png",
              },
            ].map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-4 bg-white font-semibold text-md rounded-lg border-4 border-white hover:border-green-950 transition-all duration-300 hover:scale-95"
              >
                <img
                  src={btn.img}
                  alt={btn.label}
                  className="w-[32px] h-[32px] object-contain"
                />
                <span className="text-[#0c4123]">{btn.label}</span>{" "}
                {/* ✅ 색상 강제 적용 */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
