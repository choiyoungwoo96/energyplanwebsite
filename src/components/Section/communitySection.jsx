"use client";

import Link from "next/link";

export default function CommunitySection() {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/communitybg.png')" }}
    >
      <div className="w-full max-w-[1200px] m-auto py-20">
        {/* 반투명 오버레이 */}

        <div className=" flex flex-col items-center justify-center h-full text-center">
          {/* 섹션 타이틀 */}
          <div className="text-white">
            <h2 className="text-4xl font-bold ">커뮤니티</h2>
            <p>(Community)</p>
            <p className="text-xl font-light my-8">
              유튜브에서 쉽게 배우고, 블로그에서 정보 얻고, SNS에서 함께
              공유해보세요!
            </p>
          </div>
          {/* 유튜브 영상 썸네일 */}
          <div className="max-w-[1200px] w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/-dab50NXiCU" // 여기에 실제 영상 ID를 넣으세요
              title="태양광 사업 3가지 방식"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* 버튼 4개 */}
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 w-full">
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
                className="text-md bg-white text-[#0c4123] font-semibold p-4 rounded-lg flex gap-4 items-center justify-center border-white hover:border-green-950 border-4 transition-all duration-300 hover:scale-90"
              >
                <img src={btn.img} className="w-[40px]" />
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
