import TopNavBar from "@/components/TopNavBar";
import { styled } from "@mui/system";
import SectionOne from "@/sections/SectionOne";
import SectionTwo from "@/sections/SectionTwo";
import SectionThree from "@/sections/SectionThree";

const BackgroundSectionOneStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background-section1.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  padding: "0 40px",
  minHeight: "100vh"
}));

const BackgroundSectionThreeStyle = styled("div")(() => ({
  backgroundImage: 'url("../img/background3.png")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  objectFit: "cover",
  minHeight: "100vh",
  padding: "0 40px"
}));

export default function Home() {
  return (
    <>
      <BackgroundSectionOneStyle>
        <TopNavBar />
        <SectionOne />
      </BackgroundSectionOneStyle>
      <SectionTwo />
      <BackgroundSectionThreeStyle>
        <SectionThree />
      </BackgroundSectionThreeStyle>
    </>
  );
}
