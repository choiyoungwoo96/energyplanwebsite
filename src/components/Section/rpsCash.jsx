"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RpsCash() {
  const [capacity, setCapacity] = useState("");
  const [weight, setWeight] = useState("");
  const [recPrice, setRecPrice] = useState("");
  const [smpPrice, setSmpPrice] = useState("");
  const [cashCost, setCashCost] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [showResult, setShowResult] = useState(false);

  const parse = (v) => parseFloat(v || "0");
  const format = (v) => `₩${Math.round(v).toLocaleString("ko-KR")} 원`;

  const totalConstructionCost = () => parse(cashCost) * parse(capacity);

  const generateProfitData = () => {
    const smp = parse(smpPrice);
    const rec = parse(recPrice);
    const w = parse(weight);
    const cap = parse(capacity);
    const sun = parse(sunlight);

    let efficiency = 1;
    let cumulative = 0;
    const rows = [];

    for (let year = 1; year <= 20; year++) {
      efficiency -= year === 1 ? 0.02 : 0.0045;

      const smpIncome = smp * sun * cap * 365 * efficiency;
      const recIncome = rec * w * sun * 365 * efficiency * cap;
      const maintenance = (cap / 100) * 1680000;

      const totalIncome = smpIncome + recIncome;
      const netProfit = totalIncome - maintenance;
      cumulative += netProfit;

      rows.push({
        year,
        efficiency: (efficiency * 100).toFixed(2),
        smpIncome,
        recIncome,
        totalIncome,
        maintenance,
        netProfit,
        cumulative,
      });
    }

    return rows;
  };

  const data = generateProfitData();
  const constructionCost = totalConstructionCost();
  const totalProfit = data.reduce((sum, item) => sum + item.netProfit, 0);
  const bep = data.find((d) => d.cumulative >= constructionCost)?.year || null;

  return (
    <div className="p-6 max-w-screen-xl mx-auto space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg">
        <Input
          label="설치용량 (kW)"
          value={capacity}
          setValue={setCapacity}
          placeholder="예: 100"
        />
        <Input
          label="REC 가중치"
          value={weight}
          setValue={setWeight}
          placeholder="예: 1.5"
        />
        <Input
          label="REC 단가 (원)"
          value={recPrice}
          setValue={setRecPrice}
          placeholder="예: 76"
        />
        <Input
          label="SMP 단가 (원)"
          value={smpPrice}
          setValue={setSmpPrice}
          placeholder="예: 128"
        />
        <Input
          label="발전시간 (시간/일)"
          value={sunlight}
          setValue={setSunlight}
          placeholder="예: 3.6"
        />
        <Input
          label="현금 공사비 (원/kW)"
          value={cashCost}
          setValue={setCashCost}
          placeholder="예: 1300000"
        />
        <div className="col-span-full text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowResult(true)}
            className="w-full bg-green-950 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition"
          >
            계산하기
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showResult && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 px-2 sm:px-0"
          >
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-sm text-gray-800 space-y-2">
              <div>
                <strong>💸 총 공사비:</strong> {format(constructionCost)}
              </div>
              <div>
                <strong>💰 20년 총 순수익:</strong> {format(totalProfit)}
              </div>
              <div className="text-gray-600">
                ※ 인입공사비 별도 · 구조보강비 별도 · VAT 별도
              </div>
              <div className="text-green-700 font-medium">
                ✅ 투자 회수 시점:{" "}
                <strong>{bep ? `${bep}년차` : "20년 내 회수 불가"}</strong>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="min-w-[720px] w-full table-fixed text-sm text-center border-collapse">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="p-3">연도</th>
                    <th className="p-3">모듈 효율 (%)</th>
                    <th className="p-3">SMP 수익</th>
                    <th className="p-3">REC 수익</th>
                    <th className="p-3">총 수익</th>
                    <th className="p-3">유지관리비</th>
                    <th className="p-3">순수익</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row) => (
                    <tr
                      key={row.year}
                      className={
                        row.year === bep
                          ? "bg-green-100 font-semibold"
                          : "bg-white even:bg-gray-50"
                      }
                    >
                      <td className="p-2">{row.year}년차</td>
                      <td className="p-2">{row.efficiency}</td>
                      <td className="p-2">{format(row.smpIncome)}</td>
                      <td className="p-2">{format(row.recIncome)}</td>
                      <td className="p-2">{format(row.totalIncome)}</td>
                      <td className="p-2">{format(row.maintenance)}</td>
                      <td className="p-2">{format(row.netProfit)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Input({ label, value, setValue, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        className="px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
