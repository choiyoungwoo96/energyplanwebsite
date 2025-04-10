import Header from "@/components/Header/header";
import About from "@/components/Section/about";
import Business from "@/components/Section/business";
import CommunitySection from "@/components/Section/communitySection";
import ConstructionCases from "@/components/Section/constructionCases";
import DirectionSection from "@/components/Section/directionSection";
import Footer from "@/components/Section/footer";
import QAAccordion from "@/components/Section/QAAccordion";
import Slide from "@/components/Section/slide";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Slide></Slide>
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
