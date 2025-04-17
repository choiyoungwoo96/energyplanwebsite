"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const qaList = [
  {
    question: "태양광 설치까지 얼마나 걸리나요?",
    answer: `
1. 부지 조사 및 설계 – 설치 가능 여부 확인 및 발전량 예측
2. 인허가 진행 – 전력 사용 승인 및 정부 지원금 신청
3. 설치 공사 – 태양광 패널, 인버터, 구조물 설치
4. 전력공사 연계 – 한전과 연계하여 발전한 전기 판매 가능
5. 운영 및 유지보수 – 발전 모니터링 및 정기 점검
    `,
  },
  {
    question: "태양광 발전을 설치하려면 어떤 절차가 필요할까요?",
    answer: `
1. 부지 조사 및 설계 – 설치 가능 여부 확인 및 발전량 예측
2. 인허가 진행 – 전력 사용 승인 및 정부 지원금 신청
3. 설치 공사 – 태양광 패널, 인버터, 구조물 설치
4. 전력공사 연계 – 한전과 연계하여 발전한 전기 판매 가능
5. 운영 및 유지보수 – 발전 모니터링 및 정기 점검
    `,
  },
  {
    question: "태양광 발전의 경제성은 어떤가요?",
    answer: `
1. 발전된 전기를 한국전력에 판매하여 수익 창출 가능
2. 정부 RPS/FIT 지원 정책으로 초기 투자 안정성 확보
3. 최소 20년 이상 장기 수익 모델로 활용 가능
    `,
  },
  {
    question: "태양광 설치 비용은 얼마나 드나요?",
    answer: `
1. 설치 용량, 위치, 구조물 조건에 따라 다름
2. 평균적으로 100KW 기준 1억~1억 5천만원 수준
3. 정부 보조금 및 세제 혜택 적용 가능
    `,
  },
  {
    question: "태양광 발전 시스템의 유지보수는 어떻게 하나요?",
    answer: `
1. 정기 점검 (연 2~4회)
2. 패널 청소, 인버터 점검
3. 원격 모니터링 시스템을 통한 실시간 관리 가능
    `,
  },
];

export default function QAAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#10221B] py-20 px-6 text-white" id="qna">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Q&amp;A</h2>
        <p className="text-gray-300 text-sm mt-2">
          태양광 발전, 어렵지 않아요! 가장 많이 하는 질문들
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto relative">
        {qaList.map((qa, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="overflow-hidden rounded-md">
              {/* 질문 */}
              <div
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                className={`w-full text-left px-6 py-4 flex justify-between items-center transition-all duration-300 ${
                  isOpen
                    ? "bg-[#FDBA12] text-black font-semibold"
                    : "bg-[#58756A] text-white"
                }`}
              >
                <span className="text-base">Q. {qa.question}</span>
                {isOpen ? (
                  <ChevronUp className={isOpen ? "text-black" : "text-white"} />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>

              {/* 답변 */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#FDBA12] text-black px-6 pb-2 text-sm whitespace-break-spaces"
                  >
                    {qa.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
