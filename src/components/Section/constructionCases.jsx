"use client";

import Slider from "react-slick";
import Image from "next/image";

const constructionData = [
  {
    image: "/images/project1.jpg",
    location: "경기도",
    capacity: "300KW",
    type: "임대",
  },
  {
    image: "/images/project2.jpg",
    location: "경기도",
    capacity: "300KW",
    type: "임대",
  },
  {
    image: "/images/project3.jpg",
    location: "경기도",
    capacity: "300KW",
    type: "임대",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ConstructionCases() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800">시공사례</h2>
      <p className="text-gray-600 mt-2 mb-8">
        태양광 발전소 설치부터 운영까지, 고객이 직접 경험한 성공적인 프로젝트를
        소개합니다.
        <br />
        발전량 데이터와 설치 환경을 비교해보고 나에게 맞는 태양광 솔루션을
        찾아보세요!
      </p>

      <Slider {...settings}>
        {constructionData.map((item, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={item.image}
                alt={`시공사례 ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="bg-green-900 text-white px-3 py-1 rounded-full">
                    주소
                  </span>
                  <span className="text-gray-700">{item.location}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="bg-green-900 text-white px-3 py-1 rounded-full">
                    설치용량
                  </span>
                  <span className="text-gray-700">{item.capacity}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="bg-green-900 text-white px-3 py-1 rounded-full">
                    사업종류
                  </span>
                  <span className="text-gray-700">{item.type}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
