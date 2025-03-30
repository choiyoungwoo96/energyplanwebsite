"use client";
import { useState } from "react";

export default function Business() {
  const businessBox = [
    { id: 0, kr_title: "선투자", en_title: "RPS" },
    { id: 1, kr_title: "임대", en_title: "Leasing Business" },
    { id: 2, kr_title: "RE100 구독형", en_title: "RE100 Subscription" },
  ];
  const [active, setActive] = useState(true);

  return (
    <div className="w-screen">
      <div className="w-full max-w-[1440px] m-auto py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl">사업소개</div>
            <div className="text-2xl">(Business Introduction)</div>
          </div>
          <div className="text-center">
            에너지플랜은 태양광 발전소 설계, 시공, 유지관리, 수익 분석까지
            책임지는 전문업체로,
            <br />
            고객 맞춤형 솔루션을 제공합니다. 신뢰와 투명성을 바탕으로 최상의
            서비스를 제공하며,
            <br />
            지속 가능한 미래를 위한 태양광 에너지 솔루션을 실현합니다.
          </div>
        </div>
        {/* 선투자,  */}
        {/* <div className="flex items-center justify-center gap-4 mt-5">
          {businessBox.map((businessBoxItem) => {
            const isActive = activeBoxId === businessBoxItem.id;

            return (
              <div
                key={businessBoxItem.id}
                className={`flex flex-col items-center justify-between rounded-2xl w-[400px] py-6 px-4 cursor-pointer transition-all duration-300 border
                  ${isActive ? "bg-[#0c4123] text-white" : "text-[#393939] border-[#0c4123] bg-white"}`}
                onClick={() => setActiveBoxId(businessBoxItem.id)}
              >
                <span className="text-xl font-semibold">{businessBoxItem.kr_title}</span>
                <span className="text-sm">{businessBoxItem.en_title}</span>
              </div>
            );
          })}
        </div> */}
        <div className="flex items-center justify-center gap-4 mt-5">
          {businessBox.map((businessBoxItem, index) => {
            <div
              key={businessBoxItem.id}
              className={`flex flex-col items-center justify-between  rounded-2xl w-[400px] py-4 ${
                active
                  ? "text-[#393939] border border-[#0c4123]"
                  : "bg-[#0c4123] text-white"
              }`}
              onClick={() => setActive(!active)}
            >
              <span>{businessBoxItem.kr_title}</span>
              <span>{businessBoxItem.en_title}</span>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
