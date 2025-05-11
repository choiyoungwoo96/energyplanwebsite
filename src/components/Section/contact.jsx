"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    type: "",
    message: "",
    agree: false,
  });

  const toggleSection = () => setVisible(!visible);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    alert("문의가 접수되었습니다.");
  };

  return (
    <>
      {/* 하단 고정 버튼 */}

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <div
          onClick={toggleSection}
          className="bg-gradient-to-r  bg-green-950 hover:bg-red-800 text-white font-bold px-6 py-3 rounded-full shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center text-lg"
        >
          {visible ? "상담 닫기" : "상담 예약하기"}
        </div>
      </div>

      {/* 상담예약 Section with Animation */}
      <AnimatePresence>
        {visible && (
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden z-40 mb-4"
          >
            <div className="flex flex-col lg:flex-row">
              {/* 왼쪽 배너 */}
              <div className="bg-blue-100 lg:w-1/3 flex flex-col items-center justify-center p-8">
                <p className="text-2xl font-bold text-gray-800 mb-4">
                  유지관리
                </p>
                <img
                  src="/banner-phone.png"
                  alt="유지관리 배너"
                  className="w-32 h-auto mb-4"
                />
                <a
                  href="#"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
                >
                  바로가기 →
                </a>
              </div>

              {/* 오른쪽 입력 폼 */}
              <form
                onSubmit={handleSubmit}
                className="lg:w-2/3 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="성함 (필수입력)"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="input-style"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="연락처 (필수입력)"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="input-style"
                />
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  className="input-style"
                >
                  <option value="">문의 유형 (필수 입력)</option>
                  <option value="시공견적">시공견적</option>
                  <option value="사업성검토">사업성검토</option>
                  <option value="영업자모집">영업자모집</option>
                  <option value="EPC모집">EPC모집</option>
                </select>
                <input
                  type="text"
                  name="address"
                  placeholder="주소지 (필수입력)"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="input-style"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="문의내용을 입력해주세요"
                  rows={3}
                  className="input-style md:col-span-2"
                />
                <div className="flex items-center md:col-span-2">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다.
                  </span>
                </div>
                <div className="md:col-span-2 text-right">
                  <button
                    type="submit"
                    className="bg-green-950 hover:bg-red-700 text-white text-center font-semibold px-6 py-2 rounded-lg transition"
                  >
                    무료견적 신청하기
                  </button>
                </div>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 입력박스 커스텀 스타일 */}
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #cbd5e1;
          border-radius: 8px;
          background-color: white;
          color: #1f2937;
          font-size: 0.95rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease-in-out;
        }
        .input-style:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
          outline: none;
        }
      `}</style>
    </>
  );
}
