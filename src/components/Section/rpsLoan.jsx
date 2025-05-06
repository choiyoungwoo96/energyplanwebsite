"use client";

import { useState } from "react";

export default function RpsLoanWithGrace() {
  const [capacity, setCapacity] = useState("");
  const [weight, setWeight] = useState("");
  const [recPrice, setRecPrice] = useState("");
  const [smpPrice, setSmpPrice] = useState("");
  const [cashCost, setCashCost] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [graceMonths, setGraceMonths] = useState("");

  const parse = (v) => parseFloat(v || "0");

  const capacityNum = parse(capacity);
  const weightNum = parse(weight);
  const recNum = parse(recPrice);
  const smpNum = parse(smpPrice);
  const cashCostNum = parse(cashCost);
  const interestNum = parse(interestRate) / 100;
  const sunlightNum = parse(sunlight);
  const graceMonthsNum = Math.min(parse(graceMonths), 6);

  const totalYears = 20;
  const loanTermYears = 10;

  const principal = capacityNum * cashCostNum;

  const monthlyInterestOnly = (principal * interestNum) / 12;

  const monthlyRepayment =
    interestNum > 0 && loanTermYears > 0
      ? (((principal * interestNum) / 12) *
          Math.pow(1 + interestNum / 12, loanTermYears * 12)) /
        (Math.pow(1 + interestNum / 12, loanTermYears * 12) - 1)
      : 0;

  const getAnnualRepayment = (year) => {
    if (year === 1) {
      const monthsRepay = 12 - graceMonthsNum;
      return (
        monthlyInterestOnly * graceMonthsNum + monthlyRepayment * monthsRepay
      );
    } else if (year >= 2 && year <= loanTermYears) {
      return monthlyRepayment * 12;
    } else {
      return 0;
    }
  };

  let efficiency = 1;
  let cumulativeNet = 0;

  const data = Array.from({ length: totalYears }, (_, i) => {
    const year = i + 1;
    efficiency -= year === 1 ? 0.02 : 0.0045;
    const efficiencyPct = efficiency * 100;
    const smpRevenue = 365 * sunlightNum * smpNum * capacityNum * efficiency;
    const recRevenue =
      365 * sunlightNum * recNum * weightNum * capacityNum * efficiency;
    const revenue = smpRevenue + recRevenue;
    const repayment = getAnnualRepayment(year); // 상환금은 효율과 무관하게 고정
    const net = revenue - repayment;
    cumulativeNet += net;

    return {
      year,
      efficiency: efficiencyPct.toFixed(2),
      smpRevenue,
      recRevenue,
      revenue,
      repayment,
      net,
      cumulativeNet,
    };
  });

  const roi = principal > 0 ? (cumulativeNet / principal) * 100 : 0;
  const bep = data.find((d) => d.cumulativeNet >= principal)?.year || null;

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
        <Input
          label="이자율 (%)"
          value={interestRate}
          setValue={setInterestRate}
          placeholder="예: 4.5"
        />
        <Input
          label="거치기간 (개월)"
          value={graceMonths}
          setValue={setGraceMonths}
          placeholder="예: 6"
        />
      </div>

      {capacity && cashCost && interestRate && sunlight && (
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded space-y-1">
          <p>
            <strong>상환 총 공사비:</strong>{" "}
            {Math.floor(principal).toLocaleString("ko-KR")} 원
          </p>
          <p>
            <strong>월 이자:</strong>{" "}
            {Math.floor(monthlyInterestOnly).toLocaleString("ko-KR")} 원
          </p>
          <p>
            <strong>월 원리금:</strong>{" "}
            {Math.floor(monthlyRepayment).toLocaleString("ko-KR")} 원
          </p>
          <p>
            <strong>ROI:</strong> {Math.floor(roi).toLocaleString("ko-KR")}%
          </p>
          <p>
            <strong>투자 회수 시점:</strong>{" "}
            {bep ? `${bep}년차` : "20년 내 회수 불가"}
          </p>
        </div>
      )}

      {capacity && (
        <div className="overflow-x-auto">
          <table className="w-full border text-sm text-right mt-4">
            <thead className="bg-gray-200 text-center">
              <tr>
                <th className="border px-2 py-1">연도</th>
                <th className="border px-2 py-1">효율 (%)</th>
                <th className="border px-2 py-1">SMP 수익</th>
                <th className="border px-2 py-1">REC 수익</th>
                <th className="border px-2 py-1">연 수익</th>
                <th className="border px-2 py-1">상환금</th>
                <th className="border px-2 py-1">순수익</th>
                <th className="border px-2 py-1">누적 순수익</th>
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
                    {Math.floor(row.smpRevenue).toLocaleString("ko-KR")}
                  </td>
                  <td className="border px-2 py-1">
                    {Math.floor(row.recRevenue).toLocaleString("ko-KR")}
                  </td>
                  <td className="border px-2 py-1">
                    {Math.floor(row.revenue).toLocaleString("ko-KR")}
                  </td>
                  <td className="border px-2 py-1">
                    {Math.floor(row.repayment).toLocaleString("ko-KR")}
                  </td>
                  <td className="border px-2 py-1">
                    {Math.floor(row.net).toLocaleString("ko-KR")}
                  </td>
                  <td className="border px-2 py-1">
                    {Math.floor(row.cumulativeNet).toLocaleString("ko-KR")}
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
