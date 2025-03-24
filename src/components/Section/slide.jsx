"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="w-screen px-4 pb-20">
      <div className="w-full max-w-[1440px] h-[720px] relative mx-auto rounded-2xl overflow-hidden">
        <Slider {...setting}>
          {/* 슬라이드 1 */}
          <div>
            <div className="w-full h-[720px]">
              <img
                className="w-full h-full object-cover object-center"
                src="/slide01.jpg"
                alt="slide1"
              />
            </div>
          </div>

          {/* 슬라이드 2 */}
          <div>
            <div className="w-full h-[720px]">
              <img
                className="w-full h-full object-cover object-center"
                src="/slide02.jpg"
                alt="slide2"
              />
            </div>
          </div>

          {/* 슬라이드 3 */}
          <div>
            <div className="w-full h-[720px]">
              <img
                className="w-full h-full object-cover object-center"
                src="/slide03.jpg"
                alt="slide3"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
