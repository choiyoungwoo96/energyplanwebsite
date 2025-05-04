"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Service() {
  return (
    <section
      className="w-full bg-white py-16 px-4 md:px-10 scroll-mt-16"
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <div className="text-center md:text-left flex flex-col gap-2">
            <h2 className="text-3xl font-bold">
              <span className="text-[#393939] text-3xl">서비스</span>{" "}
            </h2>
            <div className="text-xl">(Service)</div>
          </div>
        </div>

        {/* 서비스 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col gap-4"
            >
              <div className="bg-green-950 w-[70px] h-[70px] rounded-full flex items-center justify-center">
                <img className="w-1/2 h-1/2 filter invert" src={service.icon} />
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
  );
}
