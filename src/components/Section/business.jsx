"use client";
import { useState } from "react";

export default function Business() {
  const businessBox = [
    {
      id: 0,
      kr_title: "선투자",
      en_title: "RPS",
    },
    { id: 1, kr_title: "임대", en_title: "Leasing Business" },
    { id: 2, kr_title: "RE100 구독형", en_title: "RE100 Subscription" },
  ];
  const businessTypes = [
    {
      id: 0,
      key: "rps",
      title: "선투자(RPS)",
      img: "/business01.png",
      subtitle:
        "건물지붕, 토지 등에 직접 태양광을 설치하여 전력을 판매하고 고수익을 창출할 수 있는 사업",
      details: [
        {
          key: "target",
          label: "사업대상",
          description:
            "설비용량 제한없음 / SGI서울보증보험 이행보증서 발행이 가능한 사업자",
        },
        {
          key: "loan",
          label: "대출이력",
          description: "대출, 부채로 진행시 대출이력이 남지 않습니다.",
        },
        {
          key: "profit",
          label: "고수익 창출",
          description:
            "발전된 전력을 전력거래소, 한국 전력에 판매하여 고수익 창출",
        },
      ],
    },
    {
      id: 1,
      key: "leasing",
      title: "임대(Leasing Business)",
      img: "/business02.png",
      subtitle:
        "20년 동안 비어 있는 유휴부지를 빌려주고, 임대료를 받을 수 있는 사업",
      details: [
        {
          key: "no-invest",
          label: "무자본 참여",
          description:
            "유휴공간을 활용한 무자본참여 / 설치비, 투자비, 관리비, 유지비 0원",
        },
        {
          key: "stable-rent",
          label: "안정형 임대수익",
          description: "매년 임대 수익만을 수익확보가능",
        },
        {
          key: "long-benefit",
          label: "노후자금 보장 / 방수",
          description:
            "20년간 지붕관리 / 지붕 수명 연장 및 방수관리 / 공장 단열 효과",
        },
      ],
    },
    {
      id: 2,
      key: "re100",
      title: "RE100 구독형(RE100 Subscription)",
      img: "/business03.png",
      subtitle:
        "20년간 일정한 유휴부지를 제공하여 전기로 전환, RE100 혜택 등으로 경제적 이익을 창출할 수 있는 사업",
      details: [
        {
          key: "target",
          label: "사업대상",
          description:
            "신용등급 B0 사업자 / SGI 서울보증에 이행보증서 발행이 가능한 사업자",
        },
        {
          key: "needs",
          label: "필요성",
          description:
            "지속적인 상승하는 전기료 대처 / RE100 참여 및 기업 맞춤 ESG 경영",
        },
        {
          key: "contract",
          label: "계약 종료 후",
          description:
            "계약기간 종료 이후 자가소비가 아닌 전력판매로 추가수익창출",
        },
      ],
    },
  ];

  const [activeBoxId, setActiveBoxId] = useState(0);
  const activeBusiness = businessTypes[activeBoxId];
  return (
    <div className="w-screen">
      <div className="w-full max-w-[1200px] m-auto py-20">
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
        <div className="flex items-center justify-center gap-4 mt-5">
          {businessBox.map((businessBoxItem) => {
            const isActive = activeBoxId === businessBoxItem.id;
            return (
              <div
                key={businessBoxItem.id}
                className={`flex flex-col items-center justify-between  rounded-2xl w-[400px] py-4 ${
                  isActive
                    ? "bg-[#0c4123] text-white"
                    : "text-[#393939] border border-[#0c4123]"
                }`}
                onClick={() => setActiveBoxId(businessBoxItem.id)}
              >
                <span>{businessBoxItem.kr_title}</span>
                <span>{businessBoxItem.en_title}</span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-4 py-10">
          <div className="">
            <img className="w-full h-full" src={activeBusiness.img} />
          </div>
          <div className="flex flex-col items-start justify-between gap-5 p-8 shadow-2xl rounded-[50px]">
            <div className="flex flex-col gap-1 rounded-3xl text-gray-900 w-full">
              <span className="text-xl">{activeBusiness.title}</span>
              <span className="text-sm font-light">
                {activeBusiness.subtitle}
              </span>
            </div>
            {activeBusiness.details.map((detail) => (
              <div key={detail.key} className="flex flex-col gap-4">
                <div className="text-lg bg-[#0c4123] w-[200px] p-2 flex items-center justify-center text-white rounded-3xl">
                  {detail.label}
                </div>
                <span className="text-md text-gray-600">
                  {detail.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
