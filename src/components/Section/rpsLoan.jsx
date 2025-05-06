"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SolarProfitCalculator() {
  const [capacity, setCapacity] = useState("");
  const [recWeight, setRecWeight] = useState("");
  const [recPrice, setRecPrice] = useState("");
  const [smpPrice, setSmpPrice] = useState("");
  const [sunHours, setSunHours] = useState("");
  const [costPerKw, setCostPerKw] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [graceMonths, setGraceMonths] = useState("");
  const [result, setResult] = useState(null);

  const parse = (v) => parseFloat(v || "0");
  const format = (v) => `₩${Math.round(v).toLocaleString()}`;

  const calculate = () => {
    const cap = parse(capacity);
    const recW = parse(recWeight);
    const recP = parse(recPrice);
    const smpP = parse(smpPrice);
    const hours = parse(sunHours);
    const cost = parse(costPerKw);
    const rate = parse(interestRate) / 100;
    const grace = Math.min(parse(graceMonths), 6);

    const principal = cap * cost;
    const monthlyRate = rate / 12;
    const termMonths = 120;
    const repaymentMonths = termMonths - grace;

    const monthlyPayment =
      repaymentMonths > 0
        ? (principal *
            monthlyRate *
            Math.pow(1 + monthlyRate, repaymentMonths)) /
          (Math.pow(1 + monthlyRate, repaymentMonths) - 1)
        : 0;

    let efficiency = 1;
    let data = [];
    let totalNetProfit = 0;
    let totalRepayment = 0;
    let repaidYear = null;

    for (let year = 1; year <= 20; year++) {
      efficiency -= year === 1 ? 0.02 : 0.0045;

      const smpIncome = smpP * hours * cap * 365 * efficiency;
      const recIncome = recP * recW * cap * hours * 365 * efficiency;
      const totalIncome = smpIncome + recIncome;
      const maintenance = (cap / 100) * 1680000;

      let annualPayment = 0;
      if (year <= 10) {
        const yearStart = (year - 1) * 12 + 1;
        const yearEnd = year * 12;
        let paymentMonths = 0;

        for (let m = yearStart; m <= yearEnd; m++) {
          if (m > grace) paymentMonths++;
        }

        const interestOnlyMonths = Math.min(
          12,
          Math.max(0, grace - (year - 1) * 12)
        );
        const interestOnly = interestOnlyMonths * monthlyRate * principal;
        annualPayment = interestOnly + paymentMonths * monthlyPayment;
      }

      const netProfit = totalIncome - annualPayment - maintenance;
      totalNetProfit += netProfit;

      if (!repaidYear && year <= 10) {
        totalRepayment += annualPayment;
        if (totalRepayment >= principal) repaidYear = year;
      }

      data.push({
        year,
        smpIncome,
        recIncome,
        totalIncome,
        payment: annualPayment,
        maintenance,
        netProfit,
      });
    }

    setResult({ data, totalNetProfit, repaidYear, principal });
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
        <InputBox
          label="설치용량 (kW)"
          onChange={(e) => setCapacity(e.target.value)}
        />
        <InputBox
          label="REC 가중치"
          onChange={(e) => setRecWeight(e.target.value)}
        />
        <InputBox
          label="REC 단가 (원)"
          onChange={(e) => setRecPrice(e.target.value)}
        />
        <InputBox
          label="SMP 단가 (원)"
          onChange={(e) => setSmpPrice(e.target.value)}
        />
        <InputBox
          label="발전시간 (h)"
          onChange={(e) => setSunHours(e.target.value)}
        />
        <InputBox
          label="공사비 (원/kW)"
          onChange={(e) => setCostPerKw(e.target.value)}
        />
        <InputBox
          label="이자율 (%)"
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <InputBox
          label="거치기간 (개월)"
          onChange={(e) => setGraceMonths(e.target.value)}
        />
        <div className="col-span-full text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={calculate}
            className="bg-green-950 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition w-full"
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
              <div className="text-lg font-bold text-gray-900">
                💰 총 순수익 (20년 합계):{" "}
                <span className="text-green-700">
                  {format(result.totalNetProfit)}
                </span>
              </div>
              <div className="text-md text-gray-900">
                💸 총 공사비:{" "}
                <span className="font-semibold">
                  {format(result.principal)}
                </span>
              </div>
              <div>🧾 VAT: 별도</div>
              <div>🔌 인입공사비: 별도</div>
              <div>🏋️ 구조보강비: 별도</div>
              <div className="text-green-700 font-medium">
                ✅ 공사비는{" "}
                <span className="font-bold">{result.repaidYear}년차</span>에
                모두 상환 완료!
              </div>
            </div>

            <div className="overflow-auto rounded-xl shadow-lg">
              <table className="min-w-[720px] w-full table-fixed text-sm text-center border-collapse">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="p-3">연도</th>
                    <th className="p-3">SMP 수익</th>
                    <th className="p-3">REC 수익</th>
                    <th className="p-3">총 수익</th>
                    <th className="p-3">상환금</th>
                    <th className="p-3">유지관리비</th>
                    <th className="p-3">순수익</th>
                  </tr>
                </thead>
                <tbody>
                  {result.data.map((row) => (
                    <tr key={row.year} className="bg-white even:bg-gray-50">
                      <td className="p-2">{row.year}</td>
                      <td className="p-2">{format(row.smpIncome)}</td>
                      <td className="p-2">{format(row.recIncome)}</td>
                      <td className="p-2">{format(row.totalIncome)}</td>
                      <td className="p-2">{format(row.payment)}</td>
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
