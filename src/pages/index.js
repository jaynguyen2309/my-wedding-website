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
import { useRef, useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Fab from "@mui/material/Fab";

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
  backgroundImage: 'url("../img/background-section1.jpg")',
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sectionFourRef = useRef(null);
  const sectionNineRef = useRef(null);
  const sectionElevenRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToSectionFour = () => {
    if (sectionFourRef.current) {
      sectionFourRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToSectionNine = () => {
    if (sectionNineRef.current) {
      sectionNineRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToSectionEleven = () => {
    if (sectionElevenRef.current) {
      sectionElevenRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BackgroundSectionOneStyle>
        <TopNavBar
          isMobile={isMobile}
          onOurStoryClick={handleScrollToSectionFour}
          onRSVPClick={handleScrollToSectionNine}
          onContactUsClick={handleScrollToSectionEleven}
        />
        <SectionOne />
      </BackgroundSectionOneStyle>
      <BackgroundSectionTwoStyle>
        <SectionTwo />
      </BackgroundSectionTwoStyle>
      <BackgroundSectionThreeStyle>
        <SectionThree />
      </BackgroundSectionThreeStyle>
      <BackgroundSectionTwoStyle ref={sectionFourRef}>
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
      <BackgroundSectionNineStyle isMobile={isMobile} ref={sectionNineRef}>
        <SectionNine />
      </BackgroundSectionNineStyle>
      {!isMobile && (
        <BackgroundSectionTenStyle>
          <SectionTen />
        </BackgroundSectionTenStyle>
      )}
      {isMobile ? (
        <BackgroundSectionTwoStyle ref={sectionElevenRef}>
          <SectionElevenMobile />
        </BackgroundSectionTwoStyle>
      ) : (
        <BackgroundSectionFiveStyle ref={sectionElevenRef}>
          <SectionEleven />
        </BackgroundSectionFiveStyle>
      )}
      <BackgroundSectionThreeStyle>
        <SectionTwelve />
      </BackgroundSectionThreeStyle>
      {showScrollButton && (
        <Fab
          color="primary"
          size="small"
          onClick={handleScrollToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  );
}
