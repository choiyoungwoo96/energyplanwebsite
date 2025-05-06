"use client";

import { useState } from "react";

export default function RpsCash() {
  const [capacity, setCapacity] = useState("");
  const [weight, setWeight] = useState("");
  const [recPrice, setRecPrice] = useState("");
  const [smpPrice, setSmpPrice] = useState("");
  const [cashCost, setCashCost] = useState("");
  const [sunlight, setSunlight] = useState("");

  const parse = (v) => parseFloat(v || "0");

  const baseProfitPerYear = () => {
    const smp = parse(smpPrice);
    const rec = parse(recPrice);
    const w = parse(weight);
    const cap = parse(capacity);
    const sun = parse(sunlight);
    return (smp + rec * w) * 365 * cap * sun;
  };

  const totalConstructionCost = () => {
    return parse(cashCost) * parse(capacity);
  };

  const generateProfitData = () => {
    const base = baseProfitPerYear();
    let efficiency = 1;
    let cumulative = 0;
    const rows = [];

    for (let year = 1; year <= 20; year++) {
      efficiency -= year === 1 ? 0.02 : 0.0045;
      const profit = base * efficiency;
      cumulative += profit;

      rows.push({
        year,
        efficiency: Math.floor(efficiency * 100),
        profit,
        cumulative,
      });
    }

    return rows;
  };

  const data = generateProfitData();
  const constructionCost = totalConstructionCost();
  const totalProfit = data.reduce((sum, item) => sum + item.profit, 0);
  const roi = constructionCost > 0 ? (totalProfit / constructionCost) * 100 : 0;
  const bep = data.find((d) => d.cumulative >= constructionCost)?.year || null;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
          placeholder="예: 1.2"
        />
        <Input
          label="REC 단가 (원)"
          value={recPrice}
          setValue={setRecPrice}
          placeholder="예: 70"
        />
        <Input
          label="SMP 단가 (원)"
          value={smpPrice}
          setValue={setSmpPrice}
          placeholder="예: 110"
        />
        <Input
          label="발전시간 (시간/일)"
          value={sunlight}
          setValue={setSunlight}
          placeholder="예: 3.5"
        />
        <Input
          label="현금 공사비 (원/kW)"
          value={cashCost}
          setValue={setCashCost}
          placeholder="예: 1300000"
        />
      </div>

      {capacity && cashCost && sunlight && (
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded space-y-1">
          <p>
            <strong>총 공사비:</strong>{" "}
            {Math.floor(constructionCost).toLocaleString("ko-KR")} 원
          </p>
          <p className="text-sm text-gray-700">
            ※ 인입공사비 별도 · 구조보강비 별도 · VAT 별도
          </p>
          <p>
            <strong>ROI 수익률 (20년 기준):</strong> {roi.toFixed(2)}%
          </p>
          <p>
            <strong>투자 회수 시점:</strong>{" "}
            {bep ? `${bep}년차` : "20년 내 회수 불가"}
          </p>
        </div>
      )}

      {capacity && (
        <div className="p-4 bg-gray-100 rounded">
          <p>
            <strong>1년차 예상 수익:</strong>{" "}
            {Math.floor(data[0]?.profit).toLocaleString("ko-KR")} 원
          </p>
          <p>
            <strong>20년 총 수익:</strong>{" "}
            {Math.floor(totalProfit).toLocaleString("ko-KR")} 원
          </p>
          <p className="text-sm text-gray-500">
            ※ 1년차 -2%, 이후 매년 -0.45% 모듈 효율 감소 반영
          </p>
        </div>
      )}

      {capacity && (
        <div className="overflow-x-auto">
          <table className="w-full border text-sm text-right">
            <thead className="bg-gray-200 text-center">
              <tr>
                <th className="border px-2 py-1">연도</th>
                <th className="border px-2 py-1">모듈 효율 (%)</th>
                <th className="border px-2 py-1">연간 수익 (원)</th>
                <th className="border px-2 py-1">누적 수익 (원)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.year}
                  className={
                    row.year === bep ? "bg-green-100 font-semibold" : ""
                  }
                >
                  <td className="border px-2 py-1 text-center">
                    {row.year}년차
                  </td>
                  <td className="border px-2 py-1 text-center">
                    {row.efficiency}
                  </td>
                  <td className="border px-2 py-1">
                    {Math.floor(row.profit).toLocaleString("ko-KR")}
                  </td>
                  <td className="border px-2 py-1">
                    {Math.floor(row.cumulative).toLocaleString("ko-KR")}
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

function Input({ label, value, setValue, placeholder }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        className="w-full p-2 border rounded"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
