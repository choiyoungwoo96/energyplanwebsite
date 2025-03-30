import Header from "@/components/Header/header";
import About from "@/components/Section/about";
import Business from "@/components/Section/business";
import CommunitySection from "@/components/Section/communitySection";
import Slide from "@/components/Section/slide";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Slide></Slide>
      <About></About>
      <Business></Business>
      <CommunitySection></CommunitySection>
    </div>
  );
}
