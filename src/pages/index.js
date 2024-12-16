import TopNavBar from "@/components/TopNavBar";
import { styled } from "@mui/system";
import SectionOne from "@/sections/SectionOne";
import SectionTwo from "@/sections/SectionTwo";
import SectionThree from "@/sections/SectionThree";
import SectionFive from "@/sections/SectionFive";
import SectionSix from "@/sections/SectionSix";

const BackgroundSectionOneStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background-section1.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  minHeight: "100vh",
}));

const BackgroundSectionTwoStyle = styled("div")(() => ({
  minHeight: "100vh",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const BackgroundSectionThreeStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background3.png")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const BackgroundSectionFiveStyle = styled("div")(() => ({
  backgroundColor: '#590112',
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const BackgroundSectionSixStyle = styled("div")(() => ({
  minHeight: "100vh",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export default function Home() {
  return (
    <>
      <BackgroundSectionOneStyle>
        <TopNavBar />
        <SectionOne />
      </BackgroundSectionOneStyle>
      <BackgroundSectionTwoStyle>
        <SectionTwo />
      </BackgroundSectionTwoStyle>
      <BackgroundSectionThreeStyle>
        <SectionThree />
      </BackgroundSectionThreeStyle>
      <BackgroundSectionFiveStyle>
        <SectionFive />
      </BackgroundSectionFiveStyle>
      <BackgroundSectionSixStyle>
        <SectionSix />
      </BackgroundSectionSixStyle>
    </>
  );
}
