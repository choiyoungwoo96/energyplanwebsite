import Image from "next/image";

export default function DirectionsSection() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">오시는길</h2>
      <p className="text-gray-500 mb-8">(Directions)</p>

      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/map.png" // 이미지 위치에 맞게 경로 수정
          alt="오시는 길 지도"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-8 bg-[#10221B] text-white inline-block px-6 py-3 rounded-full text-sm font-medium">
        서울특별시 강서구 마곡중앙로 161-8, 두산더랜드파크 B동 515호
      </div>
    </section>
  );
}
