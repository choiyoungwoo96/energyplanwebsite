import Image from "next/image";
import { Youtube, Instagram, MessageCircleMore, Smile } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#10221B] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Company Info */}
        <div className="space-y-5 text-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="에너지플랜 로고"
              width={20}
              height={20}
            />
            <span className="font-semibold">ENERGYPLAN</span>
          </div>
          <p>
            (주)에너지플랜 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 서울특별시
            강서구 마곡중앙로 161-8, 두산더랜드파크 B동 515호
          </p>
          <p>사업자등록번호: 422-07-03044 &nbsp;&nbsp; 대표자: 강성묵</p>
          <p>Copyright ⓒ ENERGYPLAN Co., Ltd. All rights reserved.</p>
        </div>

        {/* Right: Customer Center + Social */}
        <div className="space-y-3 text-right text-sm">
          <div className="text-lg font-bold">고객센터</div>
          <div className="text-2xl font-bold">1688 - 8096</div>
          <div className="text-xs text-gray-300">
            평일 09:00 ~ 18:00 (주말/공휴일 제외)
          </div>
          <div className="flex justify-end gap-3 mt-3">
            <Youtube className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            <MessageCircleMore className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            <Smile className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            <Instagram className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
