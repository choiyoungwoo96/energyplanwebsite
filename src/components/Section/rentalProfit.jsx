"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RentalProfit() {
  const [capacity, setCapacity] = useState("");
  const [baseFee, setBaseFee] = useState("");
  const [prepaidFee, setPrepaidFee] = useState("");
  const [prepaidYears, setPrepaidYears] = useState("");
  const [supportFee, setSupportFee] = useState("");
  const [result, setResult] = useState(null);

  const parse = (v) => parseFloat(v || "0");
  const format = (v) => `₩${Math.round(v).toLocaleString()}`;

  const calculate = () => {
    const cap = parse(capacity);
    const base = parse(baseFee);
    const prepaid = parse(prepaidFee);
    const years = parse(prepaidYears);
    const support = parse(supportFee);

    const supportTotal = support * cap;
    const baseAnnual = base * cap;
    const baseTotal = baseAnnual * 20;
    const baseTotalWithSupport = baseTotal + supportTotal;

    const prepaidPart = prepaid * cap * years;
    const remainingPart = base * cap * (20 - years);
    const prepaidTotal = prepaidPart + remainingPart;
    const prepaidTotalWithSupport = prepaidTotal + supportTotal;

    setResult({
      baseAnnual,
      baseTotal,
      baseTotalWithSupport,
      prepaidPart,
      remainingPart,
      prepaidTotal,
      prepaidTotalWithSupport,
      years,
      support,
    });
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg">
        <InputBox
          label="설치용량 (kW)"
          onChange={(e) => setCapacity(e.target.value)}
          placeholder="예: 100"
        />
        <InputBox
          label="기본료 (원/kW)"
          onChange={(e) => setBaseFee(e.target.value)}
          placeholder="예: 40000"
        />
        <InputBox
          label="선납료 (원/kW)"
          onChange={(e) => setPrepaidFee(e.target.value)}
          placeholder="예: 35000"
        />
        <InputBox
          label="선납년수 (년)"
          onChange={(e) => setPrepaidYears(e.target.value)}
          placeholder="예: 5"
        />
        <InputBox
          label="경영지원금 (원/kW)"
          onChange={(e) => setSupportFee(e.target.value)}
          placeholder="예: 100000"
        />
        <div className="col-span-full text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={calculate}
            className="w-full bg-green-950 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition"
          >
            계산하기
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 px-2 sm:px-0"
          >
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-sm sm:text-base text-gray-800 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                📄 기본형 계산 결과
              </h2>
              <p>
                💰 <strong>1년 임대료:</strong>{" "}
                <span className="text-blue-700 font-medium">
                  {format(result.baseAnnual)}
                </span>
              </p>
              <p>
                💰 <strong>20년 총 임대수익:</strong>{" "}
                <span className="font-bold">{format(result.baseTotal)}</span>
              </p>
              {result.support > 0 && (
                <p>
                  ✅ <strong>경영지원금 포함:</strong>{" "}
                  <span className="text-green-700 font-bold">
                    {format(result.baseTotalWithSupport)}
                  </span>
                </p>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-sm sm:text-base text-gray-800 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                📄 선납형 계산 결과
              </h2>
              <p>
                💰 <strong>{result.years}년 선납 수익:</strong>{" "}
                <span className="text-blue-700">
                  {format(result.prepaidPart)}
                </span>
              </p>
              <p>
                🚪 <strong>{20 - result.years}년 기본료 수익:</strong>{" "}
                <span className="text-blue-700">
                  {format(result.remainingPart)}
                </span>
              </p>
              <p>
                💰 <strong>20년 총 임대수익:</strong>{" "}
                <span className="font-bold">{format(result.prepaidTotal)}</span>
              </p>
              {result.support > 0 && (
                <p>
                  ✅ <strong>경영지원금 포함:</strong>{" "}
                  <span className="text-green-700 font-bold">
                    {format(result.prepaidTotalWithSupport)}
                  </span>
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InputBox({ label, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        step="any"
        className="px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
