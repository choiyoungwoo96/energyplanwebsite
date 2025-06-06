"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const services = [
    {
      icon: "/production.svg",
      title: "태양광 상품 개발 및 솔루션 제공",
      description:
        "- 신재생에너지 사업 기획\n- 모듈 및 인버터 최적화\n- RE100 대응 솔루션",
    },
    {
      icon: "/cash.svg",
      title: "금융조달 및 투자 유치",
      description:
        "- 태양광 프로젝트 금융조달\n- 정부 및 공공 지원사업 연계\n- 민간 및 기관 투자 유치",
    },
    {
      icon: "/epc.svg",
      title: "EPC 및 O&M",
      description:
        "- 토탈 EPC 솔루션 제공\n- 스마트 O&M 관리 시스템\n- 장기적 안정성 및 수익 보장",
    },
  ];
  return (
    <section className="w-full h-full px-4 bg-white scroll-mt-16" id="about">
      {/* 텍스트 영역 */} {/* 이미지 영역 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto pt-16 pb-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"
      >
        <div className="relative w-full h-[300px] md:h-full rounded-3xl overflow-hidden shadow-lg order-1 md:order-1">
          <Image
            src="/about.webp"
            alt="회사 소개 이미지"
            fill
            className="object-cover"
            quality={70}
            priority
          />
        </div>
        <div className="flex flex-col gap-8 order-2 md:order-1">
          {/* 제목 */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#393939]">
              회사소개
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              (Company Introduction)
            </p>
          </div>

          {/* 설명 */}
          <p className="text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
            에너지플랜은 태양광 에너지를 기반으로 한 청정 에너지 보급을 통해,
            기후 위기에 적극 대응하고 지속 가능한 사회로의 전환을 이끄는 데
            앞장서고 있습니다. 기후 변화와 환경 문제 해결을 위한 실질적인
            대안으로서 신재생에너지의 중요성이 커지고 있는 지금, 에너지플랜은
            탄소 배출을 줄이고 에너지 자립률을 높이는 친환경 에너지 생태계를
            만들어가는 데 집중하고 있습니다.
          </p>

          {/* 아이템 리스트 */}
          <div className="flex flex-col gap-8">
            {[
              {
                title: "탄소중립(Net Zero) 실현을 위한 신재생에너지 확대",
                desc: `정부 및 지자체의 에너지 전환 정책과 연계해 탄소중립 실현을 위한 태양광 보급 확대에 주력하고 있으며,\n미래 세대를 위한 에너지 자립 기반을 다져나갑니다.`,
              },
              {
                title: "고객 중심의 맞춤형 태양광 발전 솔루션 제공",
                desc: `다양한 고객의 환경 조건과 요구사항을 반영한 맞춤형 설계를 통해, 효율성과 수익성을 모두 갖춘\n태양광 발전소를 구현합니다. 단순 시공을 넘어 사업 수익성 컨설팅까지 함께 제공하는 것이 에너지플랜의\n차별화된 강점입니다.`,
              },
              {
                title: "최신 기술과 노하우 기반의 효율적인 발전소 구축",
                desc: `수년간의 현장 경험과 기술력, 그리고 철저한 시공·운영 관리 역량을 바탕으로, 에너지 효율이 높은 스마트 태양광 발전소를 설계하고 구축합니다. 또한 발전 이후의 유지보수까지 고려한 전주기 솔루션을 통해 장기적인\n안정성과 수익성을 보장합니다.`,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 animate-fade-in-up"
              >
                <div className="flex flex-col gap-2">
                  <div className="font-semibold text-[#0c4123] text-base md:text-lg">
                    {item.title}
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <section
        className="w-full pb-10 px-4 md:px-10 scroll-mt-16"
        id="services"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* 상단 텍스트 & 버튼 */}
          <div className="flex flex-col md:flex-row justify-center items-center mb-5"></div>

          {/* 서비스 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white">
            {services.map((service, index) => (
              <div
                key={index}
                className=" border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col gap-4 items-center"
              >
                <div className="bg-green-950 w-[70px] h-[70px] rounded-full flex items-center justify-center">
                  <img
                    className="w-1/2 h-1/2 filter invert"
                    src={service.icon}
                  />
                </div>
                <h4 className="text-lg font-semibold  text-gray-800">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-500 whitespace-pre-line leading-8">
                  {service.description}
                </p>
                {/* <Link
                href="#"
                className="text-sm font-medium text-yellow-500 hover:underline mt-auto border border-green-950 p-4 max-w-[150] rounded-full group"
              >
                <span className="">Learn more →</span>
              </Link> */}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </section>
  );
}
