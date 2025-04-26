"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
export default function DirectionsSection() {
  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
  useEffect(() => {
    if (!kakaoKey) {
      console.log("카카오키가 없습니다.");
    }
    // 카카오 지도 스크립트 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5690039, 126.8272146),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 표시
        const markerPosition = new window.kakao.maps.LatLng(
          37.5690039,
          126.8272146
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    // 37.5690039!4d126.8272146
    document.head.appendChild(script);
  }, []);

  return (
    <section
      className="py-20 px-4 bg-white text-center scroll-mt-16"
      id="location"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* 타이틀 */}
        <h2 className="text-3xl font-bold text-gray-800 mb-1">오시는길</h2>
        <p className="text-gray-500 mb-8">(Directions)</p>

        {/* 카카오 지도 */}
        <div className="w-full h-[450px] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div id="map" className="w-full h-full" />
        </div>

        {/* 주소 텍스트 */}
        <div className="mt-8 bg-[#10221B] text-white inline-block px-6 py-3 rounded-full text-sm font-medium shadow">
          서울특별시 강서구 마곡중앙로 161-8, 두산더랜드파크 B동 515호
        </div>
      </motion.div>
    </section>
  );
}
