"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Re100SubscriptionTable() {
  const [capacity, setCapacity] = useState();
  const [sunlight, setSunlight] = useState();
  const [kepcoRate, setKepcoRate] = useState();
  const [baseYears, setBaseYears] = useState();
  const [extraYears, setExtraYears] = useState();
  const [baseFixedRate, setBaseFixedRate] = useState();
  const [extraFixedRate, setExtraFixedRate] = useState();
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState(null);

  const parse = (v) => parseFloat(v || "0");
  const format = (v) => `₩${Math.round(v).toLocaleString()}`;

  const calculate = () => {
    const cap = parse(capacity);
    const hour = parse(sunlight);
    const baseY = parse(baseYears);
    const extraY = parse(extraYears);
    const baseF = parse(baseFixedRate);
    const extraF = parse(extraFixedRate);
    let kepco = parse(kepcoRate);

    let efficiency = 1;
    const results = [];
    let baseSaving = 0;
    let extraSaving = 0;
    let selfSaving = 0;

    for (let year = 1; year <= 20; year++) {
      efficiency -= year === 1 ? 0.02 : 0.0045;
      kepco = year === 1 ? kepco : kepco * 1.045;

      const production = cap * hour * 365 * efficiency;
      let fixed = 0;
      let saving = 0;
      let label = "";

      if (year <= baseY) {
        fixed = baseF;
        saving = (kepco - fixed) * production;
        baseSaving += saving;
        label = `${fixed.toFixed(2)}`;
      } else if (year <= baseY + extraY) {
        fixed = extraF;
        saving = (kepco - fixed) * production;
        extraSaving += saving;
        label = `${fixed.toFixed(2)}`;
      } else {
        saving = kepco * production;
        selfSaving += saving;
        label = "자가소비";
      }

      results.push({
        year,
        efficiency: (efficiency * 100).toFixed(2),
        kepco: kepco.toFixed(2),
        fixed: label,
        production: production.toFixed(2),
        saving: saving,
      });
    }

    setData(results);
    setSummary({
      baseSaving,
      extraSaving,
      selfSaving,
      total: baseSaving + extraSaving + selfSaving,
    });
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg">
        <InputBox
          label="설치용량 (kW)"
          onChange={(e) => setCapacity(e.target.value)}
        />
        <InputBox
          label="발전시간 (시간/일)"
          onChange={(e) => setSunlight(e.target.value)}
        />
        <InputBox
          label="한전 전기료 (원/kWh)"
          onChange={(e) => setKepcoRate(e.target.value)}
        />
        <InputBox
          label="기본 고정계약 연수"
          onChange={(e) => setBaseYears(e.target.value)}
        />
        <InputBox
          label="추가 고정계약 연수"
          onChange={(e) => setExtraYears(e.target.value)}
        />
        <InputBox
          label="기본 고정단가 (원/kWh)"
          onChange={(e) => setBaseFixedRate(e.target.value)}
        />
        <InputBox
          label="추가 고정단가 (원/kWh)"
          onChange={(e) => setExtraFixedRate(e.target.value)}
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

      {summary && (
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-sm sm:text-base text-gray-800 space-y-2">
          <div className="text-lg font-bold text-gray-900">📋 감추 요약</div>
          <p>
            ✅ <strong>기본 고정단가 계약기간 감추:</strong>{" "}
            <span className="text-blue-700 font-semibold">
              {format(summary.baseSaving)}
            </span>
          </p>
          <p>
            ✅ <strong>추가 고정단가 계약기간 감추:</strong>{" "}
            <span className="text-blue-700 font-semibold">
              {format(summary.extraSaving)}
            </span>
          </p>
          <p>
            ✅ <strong>계약 외 자가소비 감추:</strong>{" "}
            <span className="text-blue-700 font-semibold">
              {format(summary.selfSaving)}
            </span>
          </p>
          <p>
            💰 <strong>20년 총 감추금액:</strong>{" "}
            <span className="text-green-700 font-bold">
              {format(summary.total)}
            </span>
          </p>
        </div>
      )}

      {data.length > 0 && (
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-[720px] w-full table-fixed text-sm text-center border-collapse">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-3">연도</th>
                <th className="p-3">모듈효율 (%)</th>
                <th className="p-3">한전요금</th>
                <th className="p-3">고정단가</th>
                <th className="p-3">발전량 (kWh)</th>
                <th className="p-3">감축금액</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.year} className="bg-white even:bg-gray-50">
                  <td className="p-2">{row.year}</td>
                  <td className="p-2">{row.efficiency}</td>
                  <td className="p-2">₩{Number(row.kepco).toLocaleString()}</td>
                  <td className="p-2">{row.fixed}</td>
                  <td className="p-2">
                    {Number(row.production).toLocaleString()}
                  </td>
                  <td className="p-2">
                    ₩{Math.round(row.saving).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function InputBox({ label, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        step="any"
        className="px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={onChange}
      />
    </div>
  );
}
