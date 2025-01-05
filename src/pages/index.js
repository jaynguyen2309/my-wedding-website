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
import { useMediaQuery, useTheme } from "@mui/material";
import SectionElevenMobile from "@/sections/SectionElevenMobile";

const BackgroundSectionOneStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background-section1.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  minHeight: "100vh",
  backgroundColor: '#ffffff'
}));

const BackgroundSectionTwoStyle = styled("div")(() => ({
  minHeight: "100vh",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
}));

const BackgroundSectionThreeStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background3.png")',
  backgroundRepeat: "repeat-y",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: "100vh",
  backgroundColor: '#ffffff'
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
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  alignItems: 'center'
}));

const BackgroundSectionSevenStyle = styled("div")(({ isMobile }) => ({
  backgroundColor: '#590112',
  padding: "0 40px",
  display: 'flex',
  alignItems: !isMobile && 'center',
  justifyContent: 'center',
  minHeight: "100vh"
}));

const BackgroundSectionEightStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background8.jpg")',
  backgroundRepeat: "repeat-y",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  display: 'flex',
  minHeight: "100vh",
  opacity: 0.9,
  backgroundColor: '#ffffff'
}));

const BackgroundSectionNineStyle = styled("div")(({ isMobile }) => ({
  backgroundColor: '#590112',
  padding: "0 40px",
  display: 'flex',
  alignItems: !isMobile && 'center',
  justifyContent: 'center',
  minHeight: "100vh"
}));

const BackgroundSectionTenStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background-section1.jpg")',
  backgroundRepeat: "repeat-y",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: "100vh",
  backgroundColor: '#ffffff'
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      <BackgroundSectionSevenStyle isMobile={isMobile}>
        <SectionSeven />
      </BackgroundSectionSevenStyle>
      <BackgroundSectionEightStyle>
        <SectionEight />
      </BackgroundSectionEightStyle>
      <BackgroundSectionNineStyle isMobile={isMobile}>
        <SectionNine />
      </BackgroundSectionNineStyle>
      {!isMobile && <BackgroundSectionTenStyle>
        <SectionTen />
      </BackgroundSectionTenStyle>}

      {isMobile ? <BackgroundSectionOneStyle><SectionElevenMobile /></BackgroundSectionOneStyle> : <BackgroundSectionFiveStyle>
        <SectionEleven />
      </BackgroundSectionFiveStyle>}

      <BackgroundSectionThreeStyle>
        <SectionTwelve />
      </BackgroundSectionThreeStyle>
    </>
  );
}
