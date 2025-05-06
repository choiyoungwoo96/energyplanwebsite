"use client";

import { useState } from "react";

export default function Re100Calculator() {
  const [kepcoRate, setKepcoRate] = useState(200);
  const [contractYears, setContractYears] = useState(15);
  const [baseContractYears, setBaseContractYears] = useState(10);
  const [baseFixedRate, setBaseFixedRate] = useState(160);
  const [extendedFixedRate, setExtendedFixedRate] = useState(180);
  const [capacity, setCapacity] = useState(100);
  const [sunlight, setSunlight] = useState(3.5);
  const [showTable, setShowTable] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const parse = (v) => parseFloat(v || "0");

  const data = [];
  let efficiency = 1;
  let kepcoPrice = parse(kepcoRate);
  let totalSaving = 0;
  let saving10 = 0;
  let saving20 = 0;

  for (let year = 1; year <= 20; year++) {
    efficiency -= year === 1 ? 0.02 : 0.0045;
    const production = 365 * parse(capacity) * parse(sunlight) * efficiency;
    kepcoPrice = year === 1 ? kepcoPrice : kepcoPrice * 1.045;

    let currentFixedRate;
    let saving = 0;

    if (year <= parse(baseContractYears)) {
      currentFixedRate = parse(baseFixedRate);
      const diff = Math.max(kepcoPrice - currentFixedRate, 0);
      saving = production * diff;
    } else if (year <= parse(contractYears)) {
      currentFixedRate = parse(extendedFixedRate);
      const diff = Math.max(kepcoPrice - currentFixedRate, 0);
      saving = production * diff;
    } else {
      currentFixedRate = kepcoPrice;
      saving = production * kepcoPrice;
    }

    if (year <= 10) saving10 += saving;
    else saving20 += saving;

    totalSaving += saving;

    data.push({
      year,
      efficiency: Math.round(efficiency * 100),
      kepco: Math.round(kepcoPrice),
      fixed: Math.round(currentFixedRate),
      production: Math.round(production),
      saving: Math.round(saving),
    });
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Input
          label="초기 한전 전기료 (원/kWh)"
          value={kepcoRate}
          setValue={setKepcoRate}
        />
        <Input
          label="기본 고정단가 계약 연도"
          value={baseContractYears}
          setValue={setBaseContractYears}
        />
        <Input
          label="기본 고정단가 (원/kWh)"
          value={baseFixedRate}
          setValue={setBaseFixedRate}
        />
        <Input
          label="고정단가 계약 연도"
          value={contractYears}
          setValue={setContractYears}
        />
        <Input
          label="추가 고정단가 (원/kWh)"
          value={extendedFixedRate}
          setValue={setExtendedFixedRate}
        />
        <Input label="설치용량 (kW)" value={capacity} setValue={setCapacity} />
        <Input
          label="발전시간 (시간/일)"
          value={sunlight}
          setValue={setSunlight}
        />
      </div>

      <button
        onClick={() => setShowSummary(!showSummary)}
        className="mb-4 px-4 py-2 w-full sm:w-auto bg-green-600 text-white rounded hover:bg-green-700"
      >
        {showSummary ? "감축 요약 숨기기" : "감축 요약 보기"}
      </button>

      {showSummary && (
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded mb-6 space-y-1">
          <p>
            <strong>1~10년 감축 합계:</strong>{" "}
            {Math.round(saving10).toLocaleString()} 원
          </p>
          <p>
            <strong>11~20년 감축 합계:</strong>{" "}
            {Math.round(saving20).toLocaleString()} 원
          </p>
          <p>
            <strong>20년 총 감축 합계:</strong>{" "}
            {Math.round(totalSaving).toLocaleString()} 원
          </p>
        </div>
      )}

      <button
        onClick={() => setShowTable(!showTable)}
        className="mb-4 px-4 py-2 w-full sm:w-auto bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showTable ? "감축표 숨기기" : "감축표 보기"}
      </button>

      {showTable && (
        <div className="overflow-x-auto">
          <table className="w-full border text-sm text-right">
            <thead className="bg-gray-200 text-center">
              <tr>
                <th className="border px-2 py-1">연도</th>
                <th className="border px-2 py-1">모듈효율 (%)</th>
                <th className="border px-2 py-1">한전요금</th>
                <th className="border px-2 py-1">고정단가</th>
                <th className="border px-2 py-1">예상 발전량</th>
                <th className="border px-2 py-1">전기료 감축금액</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.year}>
                  <td className="border px-2 py-1 text-center">{row.year}</td>
                  <td className="border px-2 py-1 text-center">
                    {row.efficiency}
                  </td>
                  <td className="border px-2 py-1">
                    {row.kepco.toLocaleString()}
                  </td>
                  <td className="border px-2 py-1">
                    {row.fixed.toLocaleString()}
                  </td>
                  <td className="border px-2 py-1">
                    {row.production.toLocaleString()}
                  </td>
                  <td className="border px-2 py-1">
                    {row.saving.toLocaleString()}
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

function Input({ label, value, setValue }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
