"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full px-4 bg-[#F5FFF7]" id="about">
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* 텍스트 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* 제목 */}
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#393939]">
              회사소개
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              (Company Introduction)
            </p>
          </div>

          {/* 설명 */}
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            에너지플랜은 태양광 발전소 설계, 시공, 유지관리, 수익 분석까지
            책임지는 전문업체로, 고객 맞춤형 솔루션을 제공합니다.{" "}
            <br className="hidden md:block" />
            신뢰와 투명성을 바탕으로 최상의 서비스를 제공하며, 지속 가능한
            미래를 위한 태양광 에너지 솔루션을 실현합니다.
          </p>

          {/* 아이템 리스트 */}
          <div className="flex flex-col gap-8">
            {[
              {
                icon: "/design.svg",
                title: "발전소 설계",
                subtitle: "(Solar Power Plant Design)",
                desc: `태양광 발전소의 성능은 설계 단계에서 결정됩니다.
에너지플랜은 지형, 기후, 발전량 예측을 종합적으로 분석하여 최적의 패널 배치와 인버터 구성을 설계합니다.`,
              },
              {
                icon: "/o&m.svg",
                title: "유지관리",
                subtitle: "(Operation & Maintenance)",
                desc: `태양광 발전소는 장기적인 운영이 핵심입니다.
정기 점검, 실시간 모니터링, 패널 및 인버터 유지보수, 문제 대응 시스템을 통해 발전 효율을 극대화합니다.`,
              },
              {
                icon: "/profit.svg",
                title: "수익 분석",
                subtitle: "(Profitability Analysis)",
                desc: `경제성 확보를 위해 RPS/FIT 정책 기반 수익 모델을 제안하며,
투자 안정성과 장기적인 수익 창출을 지원합니다.`,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 animate-fade-in-up"
              >
                <div className="w-[80px] h-[80px] bg-[#0c4123] rounded-full flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 font-semibold text-[#0c4123] text-base md:text-lg">
                    <span className="">{item.title}</span>
                    <span className="">{item.subtitle}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 이미지 영역 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden bg-[url('/about.jpg')] bg-cover bg-center shadow-lg"
        />
      </div>
    </section>
  );
}
