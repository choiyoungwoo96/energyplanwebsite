export default function DirectionsSection() {
  return (
    <section className="py-20 px-4 bg-white text-center" id="location">
      {/* 타이틀 */}
      <h2 className="text-3xl font-bold text-gray-800 mb-1">오시는길</h2>
      <p className="text-gray-500 mb-8">(Directions)</p>

      {/* 구글 지도 */}
      <div className="w-full h-[450px] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9572928985077!2d126.8283400758932!3d37.56603912425917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9d8a72dfe4d5%3A0x1868f4bc6db64c1e!2z7ISc7Jq47Yq567OE7IucIOu2gOybkOyLnCDsgqzslYTrj5kgMTYxLTgsIOq0keyCvOyLnOuwqOygleq1rCDsiJjsoJXroZwgQmTtg5zshLHqs7XsnY0gNTE16ri4!5e0!3m2!1sko!2skr!4v1713340420330!5m2!1sko!2skr"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        ></iframe>
      </div>

      {/* 주소 텍스트 */}
      <div className="mt-8 bg-[#10221B] text-white inline-block px-6 py-3 rounded-full text-sm font-medium shadow">
        서울특별시 강서구 마곡중앙로 161-8, 두산더랜드파크 B동 515호
      </div>
    </section>
  );
}
