"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const qaList = [
  {
    question: "태양광 설치까지 얼마나 걸리나요?",
    answer: "",
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
    answer: "",
  },
  {
    question: "태양광 설치 비용은 얼마나 드나요?",
    answer: "",
  },
  {
    question: "태양광 발전 시스템의 유지보수는 어떻게 하나요?",
    answer: "",
  },
];

export default function QAAccordion() {
  const [openIndex, setOpenIndex] = useState(null); // JSX용: 타입 제거

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#10221B] py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Q&amp;A</h2>
        <p className="text-gray-300 text-sm mt-2">
          태양광 발전, 어렵지 않아요! 가장 많이 하는 질문들
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {qaList.map((qa, index) => (
          <div key={index}>
            <button
              onClick={() => toggleIndex(index)}
              className={`w-full text-left px-6 py-4 rounded-md transition-colors flex justify-between items-center ${
                openIndex === index
                  ? "bg-[#FDBA12] text-black font-semibold"
                  : "bg-[#4C665D] text-white"
              }`}
            >
              <span className="text-base">Q. {qa.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>

            <AnimatePresence>
              {openIndex === index && qa.answer && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-[#FDBA12] text-black px-6 py-4 text-sm rounded-b-md whitespace-pre-line"
                >
                  {qa.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
