"use client";

import { useState } from "react";

export default function RentalProfit() {
  const [capacity, setCapacity] = useState("");
  const [baseFee, setBaseFee] = useState("");
  const [prepaidFee, setPrepaidFee] = useState("");
  const [prepaidYears, setPrepaidYears] = useState("");
  const [supportFee, setSupportFee] = useState("");

  const parse = (v) => parseFloat(v || "0");

  const capacityNum = parse(capacity);
  const base = parse(baseFee);
  const prepaid = parse(prepaidFee);
  const yearsPrepaid = parse(prepaidYears);
  const support = parse(supportFee);

  const supportTotal = support * capacityNum;

  const baseAnnual = base * capacityNum;
  const baseTotal = baseAnnual * 20;
  const baseTotalWithSupport = baseTotal + supportTotal;

  const prepaidPart = prepaid * capacityNum * yearsPrepaid;
  const remainingPart = base * capacityNum * (20 - yearsPrepaid);
  const prepaidTotal = prepaidPart + remainingPart;
  const prepaidTotalWithSupport = prepaidTotal + supportTotal;

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
          label="기본료 (원/kW)"
          value={baseFee}
          setValue={setBaseFee}
          placeholder="예: 200000"
        />
        <Input
          label="선납료 (원/kW)"
          value={prepaidFee}
          setValue={setPrepaidFee}
          placeholder="예: 180000"
        />
        <Input
          label="선납년수 (년)"
          value={prepaidYears}
          setValue={setPrepaidYears}
          placeholder="예: 5"
        />
        <Input
          label="경영지원금 (원/kW)"
          value={supportFee}
          setValue={setSupportFee}
          placeholder="예: 100000"
        />
      </div>

      {capacity && baseFee && (
        <>
          <div className="bg-gray-100 p-4 rounded space-y-1">
            <h2 className="text-lg font-semibold mb-2">📌 기본형 계산</h2>
            <p>
              <strong>1년 임대료:</strong> {baseAnnual.toLocaleString("ko-KR")}{" "}
              원
            </p>
            <p>
              <strong>20년 총 임대수익:</strong>{" "}
              {baseTotal.toLocaleString("ko-KR")} 원
            </p>
            {support > 0 && (
              <p>
                <strong>경영지원금 포함:</strong>{" "}
                {baseTotalWithSupport.toLocaleString("ko-KR")} 원
              </p>
            )}
          </div>

          <div className="bg-gray-100 p-4 rounded space-y-1">
            <h2 className="text-lg font-semibold mb-2">📌 선납형 계산</h2>
            <p>
              <strong>{yearsPrepaid}년 선납 수익:</strong>{" "}
              {prepaidPart.toLocaleString("ko-KR")} 원
            </p>
            <p>
              <strong>{20 - yearsPrepaid}년 기본료 수익:</strong>{" "}
              {remainingPart.toLocaleString("ko-KR")} 원
            </p>
            <p>
              <strong>20년 총 임대수익:</strong>{" "}
              {prepaidTotal.toLocaleString("ko-KR")} 원
            </p>
            {support > 0 && (
              <p>
                <strong>경영지원금 포함:</strong>{" "}
                {prepaidTotalWithSupport.toLocaleString("ko-KR")} 원
              </p>
            )}
          </div>
        </>
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
