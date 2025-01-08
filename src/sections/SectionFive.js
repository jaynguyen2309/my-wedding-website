import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { myFont } from "./SectionOne";
import { useEffect, useRef } from "react";

export default function SectionFive() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        const elements = entry.target.querySelectorAll('.animate-on-scroll');
        
        if (entry.isIntersecting) {
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateX(0)';
            }, index * 200);
          });
        } else {
          elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateX(-100px)'; // Start from left
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationStyle = {
    opacity: 0,
    transform: 'translateX(-100px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    willChange: 'opacity, transform'
  };

  return (
    <Stack 
      ref={sectionRef}
      direction='column' 
      alignItems='center' 
      sx={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile && '20px 0px' }}
    >
      <Typography 
        className="animate-on-scroll"
        variant="h2" 
        fontWeight={600} 
        fontFamily={'"Raleway", sans-serif'} 
        color="white" 
        fontSize={isMobile ? '20px' : '30px'} 
        textAlign={'center'} 
        pb={6}
        sx={animationStyle}
      >
        Here's a sneak peak of
      </Typography>
      <Typography 
        className={`${myFont.className} animate-on-scroll`}
        variant="h2" 
        fontWeight={600} 
        color="white" 
        fontSize={isMobile ? '25px' : '60px'} 
        textAlign={'center'}
        sx={animationStyle}
      >
        Our Special Day's Schedule
      </Typography>
      {!isMobile ? (
        <Stack direction={'row'} alignItems='center' justifyContent='center' spacing={5} maxWidth={'1000px'} mt={3} ml={2} mr={2}>
          <img src="/img/wephoto.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
          <img src="/img/wevow.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
          <img src="/img/weeat.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
          <img src="/img/weparty.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
        </Stack>
      ) : (
        <Stack direction={'column'} alignItems='center' justifyContent='center' gap={2} maxWidth={'1000px'}>
          <Stack direction={'row'} alignItems='center' justifyContent='center' gap={2} maxWidth={'1000px'} mt={3}>
            <img src="/img/weeat.png" alt="we-eat" style={{ maxWidth: '150px', width: '100%' }} />
            <img src="/img/weparty.png" alt="we-eat" style={{ maxWidth: '150px', width: '100%' }} />
          </Stack>
          <Stack direction={'row'} alignItems='center' justifyContent='center' gap={2} maxWidth={'1000px'} mt={3}>
            <img src="/img/wevow.png" alt="we-eat" style={{ maxWidth: '150px', width: '100%' }} />
            <img src="/img/wephoto.png" alt="we-eat" style={{ maxWidth: '150px', width: '100%' }} />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}