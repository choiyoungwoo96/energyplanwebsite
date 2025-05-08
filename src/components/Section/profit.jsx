"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RpsCash from "./rpsCash";
import RpsLoan from "./rpsLoan";
import RentalProfit from "./rentalProfit";
import Re100Profit from "./re100Profit";

// 모드 정의
const MODES = {
  RPS_CASH: "RPS (현금)",
  RPS_LOAN: "RPS (상환)",
  RENTAL: "임대수익",
  RE100: "RE100 구독형",
};

const TITLES = {
  [MODES.RPS_CASH]: "🌞 RPS 현금 수익 계산기",
  [MODES.RPS_LOAN]: "🌞 RPS 상환 수익 계산기",
  [MODES.RENTAL]: "🏢 태양광 임대수익 계산기",
  [MODES.RE100]: "⚡ RE100 구독형 절감 산출표",
};

export default function Profit() {
  const [mode, setMode] = useState(MODES.RPS_CASH);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-6">
      <motion.h1
        key={mode}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold mb-2 text-center text-[#393939]"
      >
        {TITLES[mode]}
      </motion.h1>

      <h3 className="text-center text-base text-gray-600">
        (Solar Profit Calculator)
      </h3>

      {/* 버튼 그룹 */}
      <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
        {Object.entries(MODES).map(([key, label]) => (
          <div
            key={key}
            className={`border rounded-lg transition ${
              mode === label
                ? "bg-green-950 text-white border-green-950"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            <button
              className="px-4 py-2 w-full sm:w-auto text-sm sm:text-base"
              onClick={() => setMode(label)}
            >
              {label}
            </button>
          </div>
        ))}
      </div>

      {/* 모드별 계산 컴포넌트 렌더링 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {mode === MODES.RPS_CASH && <RpsCash />}
          {mode === MODES.RPS_LOAN && <RpsLoan />}
          {mode === MODES.RENTAL && <RentalProfit />}
          {mode === MODES.RE100 && <Re100Profit />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
