import Header from "@/components/Header/header";
import About from "@/components/Section/about";
import Business from "@/components/Section/business";
import CommunitySection from "@/components/Section/communitySection";
import ConstructionCases from "@/components/Section/constructionCases";
import DirectionSection from "@/components/Section/directionSection";
import Footer from "@/components/Section/footer";
import QAAccordion from "@/components/Section/QAAccordion";
import Service from "@/components/Section/service";
import Sidemenu from "@/components/Section/sidemenu";
import Slide from "@/components/Section/slide";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        {/* 기본 메타 */}
        <title>에너지플랜 | 태양광 전문 기업 | ENERGYPLAN</title>
        <meta
          name="description"
          content="신재생에너지 개발 및 태양광 지붕임대, RE100 구독형 서비스를 제공하는 태양광 전문 기업 에너지플랜입니다."
        />
        <meta
          name="keywords"
          content="에너지플랜, energyplan,ENERGYPLAN, 태양광 전문 기업, esg경영, 신재생에너지 개발, 태양광 개발사, 태양광 설치문의, 태양광문의, RPS, 태양광 지붕임대, 태양광임대, 태양광 리스사업, 태양광 RE100 구독형, 탄소중립, 재생에너지 솔루션, 태양광 컨설팅, 태양광 발전사업, 태양광 EPC"
        />
        <meta name="author" content="에너지플랜" />
        {/* Open Graph (SNS 공유용) */}
        <meta property="og:title" content="에너지플랜 | 태양광 전문 기업" />
        <meta
          property="og:description"
          content="태양광 설치, RE100 구독형, 태양광 임대 등 신재생에너지 솔루션 전문 기업 에너지플랜입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.energyplan-kr.com" />
        <meta
          property="og:image"
          content="https://www.energyplan-kr.com/og-thumbnail.jpg"
        />{" "}
        {/* 실제 이미지로 변경 필요 */}
        {/* Favicon 및 기타 */}
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Sidemenu></Sidemenu>
      <Header></Header>
      <Slide></Slide>
      <Service></Service>
      <About></About>
      <Business></Business>
      <CommunitySection></CommunitySection>
      <ConstructionCases></ConstructionCases>
      <QAAccordion></QAAccordion>
      <DirectionSection></DirectionSection>
      <Footer></Footer>
    </div>
  );
}
