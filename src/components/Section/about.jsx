export default function About() {
  return (
    <div className="w-screen px-4 bg-[#F5FFF7]">
      <div className="w-full max-w-[1440px] h-full mx-auto grid grid-cols-2 gap-4 py-20">
        <div>
          <div className="flex items-end justify-start">
            <p className="text-4xl font-bold text-[#393939]">회사소개</p>
            <p className="text-2xl font-normal">(Companyny Introduction)</p>
          </div>
          <div className="my-8 text-sm">
            에너지플랜은 태양광 발전소 설계, 시공, 유리관리, 수익 분석까지
            책임지는 전문업체로, <br />
            고객 맞춤형 솔루션을 제공합니다. 신뢰와 투명성을 바탕으로 최상의
            서비스르 제공하며, <br />
            지속 가능한 미래를 위한 태양광 에너지 솔루션을 실현합니다.
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-start gap-8">
              <div className="w-[100px] h-[100px] rounded-[100%] bg-[#0c4123] flex items-center justify-center">
                <img src="/design.svg" className="object-cover object-center" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-start">
                  <span className="border-b-2 border-[#0c4123]">
                    발전소 설계
                  </span>
                  <span className="border-b-2 border-[#0c4123]">
                    (Solar Power Plant Design)
                  </span>
                </div>
                <div className="text-xs">
                  태양광 발전소의 성능은 설계 단계에서 결정됩니다.
                  <br />
                  에너지플랜은 지형, 기후, 발전량 예측을 종합적으로
                  <br />
                  분석하여 최적의 패널 배치와 인버터 구성을 설계합니다.
                  <br />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-8">
              <div className="w-[100px] h-[100px] rounded-[100%] bg-[#0c4123] flex items-center justify-center">
                <img src="/o&m.svg" className="object-cover object-center" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-start">
                  <span className="border-b-2 border-[#0c4123]">유지관리</span>
                  <span className="border-b-2 border-[#0c4123]">
                    (Operation & Maintenance)
                  </span>
                </div>
                <div className="text-xs">
                  태양광 발전소는 장기적인 운영이 핵심입니다. <br />
                  에너지플랜은 정기 점검, 실시간 모니터링, <br />
                  패널 및 인버터 유지보수를 통해 발전 효율을 극대화합니다.{" "}
                  <br />
                  또한, 문제 발생 시 신속한 대응 시스템을 구축하여 안정적인 전력
                  생산을 지원합니다.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-8">
              <div className="w-[100px] h-[100px] rounded-[100%] bg-[#0c4123] flex items-center justify-center">
                <img src="/profit.svg" className="object-cover object-center" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-start">
                  <span className="border-b-2 border-[#0c4123]">수익 분석</span>
                  <span className="border-b-2 border-[#0c4123]">
                    (Profitability Analysis)
                  </span>
                </div>
                <div className="text-xs">
                  태양광 발전소의 경제성은 철저한 수익 분석을 통해 보장됩니다.
                  <br />
                  RPS/FIT 정책을 활용한 최적의 수익 모델을 제안합니다. <br />
                  이를 통해 투자 안정성을 확보하고 장기적인 수익 창출이
                  가능합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-blue-300 rounded-3xl overflow-hidden bg-[url('/about.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
}
