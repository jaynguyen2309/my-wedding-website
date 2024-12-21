import TopNavBar from "@/components/TopNavBar";
import SectionEight from "@/sections/SectionEight";
import SectionFive from "@/sections/SectionFive";
import SectionFour from "@/sections/SectionFour";
import SectionNine from "@/sections/SectionNine";
import SectionOne from "@/sections/SectionOne";
import SectionSeven from "@/sections/SectionSeven";
import SectionSix from "@/sections/SectionSix";
import SectionThree from "@/sections/SectionThree";
import SectionTwo from "@/sections/SectionTwo";
import SectionTen from "@/sections/SectionTen";
import SectionEleven from "@/sections/SectionEleven";
import SectionTwelve from "@/sections/SectionTwelve";
import { styled } from "@mui/system";

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
  justifyContent: 'center',
  minHeight: "100vh"
}));

const BackgroundSectionFiveStyle = styled("div")(() => ({
  backgroundColor: '#590112',
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: "100vh"
}));

const BackgroundSectionSixStyle = styled("div")(() => ({
  minHeight: "100vh",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const BackgroundSectionEightStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background8.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: "100vh",
  opacity: 0.9
}));

const BackgroundSectionTenStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background10.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: "100vh",
  opacity: 0.9
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
      <BackgroundSectionTwoStyle>
        <SectionFour />
      </BackgroundSectionTwoStyle>
      <BackgroundSectionFiveStyle>
        <SectionFive />
      </BackgroundSectionFiveStyle>
      <BackgroundSectionSixStyle>
        <SectionSix />
      </BackgroundSectionSixStyle>
      <BackgroundSectionFiveStyle>
        <SectionSeven />
      </BackgroundSectionFiveStyle>
      <BackgroundSectionEightStyle>
        <SectionEight />
      </BackgroundSectionEightStyle>
      {/* <BackgroundSectionFiveStyle>
        <SectionNine />
      </BackgroundSectionFiveStyle> */}
      <BackgroundSectionTenStyle>
        <SectionTen />
      </BackgroundSectionTenStyle>
      <BackgroundSectionFiveStyle>
        <SectionEleven />
      </BackgroundSectionFiveStyle>
      <BackgroundSectionThreeStyle>
        <SectionTwelve />
      </BackgroundSectionThreeStyle>
    </>
  );
}
