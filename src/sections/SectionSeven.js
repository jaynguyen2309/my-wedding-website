import { Stack, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { myFont } from "./SectionOne";
import { useEffect, useRef } from "react";

export default function SectionSeven() {
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
      direction="column" 
      maxWidth={isMobile ? '400px' : "1200px"} 
      margin="0 auto" 
      p={isMobile && '30px 0px'}
    >
      <Typography 
        className={`${myFont.className} animate-on-scroll`}
        variant="h2" 
        color="white" 
        fontWeight={500} 
        mb={10} 
        mt={isMobile && 5} 
        textAlign={isMobile ? 'center' : 'left'}
        sx={animationStyle}
        lineHeight={1.5}
      >
        Dresscode
      </Typography>
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        alignItems={isMobile && 'center'} 
        spacing={5} 
        justifyContent={'space-between'}
      >
        <Box
          className="animate-on-scroll"
          sx={{
            ...animationStyle,
            transitionDelay: '0.2s'
          }}
        >
          <img 
            src="/img/dresscode-puzzle.png" 
            alt="dresscode" 
            width={isMobile ? '250px' : 'auto'} 
          />
        </Box>
        <Stack 
          className="animate-on-scroll"
          direction="column" 
          justifyContent="space-between"
          sx={{
            ...animationStyle,
            transitionDelay: '0.4s'
          }}
        >
          <Typography 
            variant="body1" 
            fontFamily={'"Raleway", sans-serif'} 
            fontWeight={500} 
            color="white" 
            fontStyle={'italic'} 
            fontSize={isMobile ? '20px' : '35px'}
          >
            We kindly encourage our guests to
            join us in wearing the following
            colors to our special day.
          </Typography>
          <Box pt={3}>
            <Typography 
              variant="body2" 
              fontFamily={'"Raleway", sans-serif'} 
              fontWeight={500} 
              color="white" 
              fontStyle={'italic'} 
              fontSize={isMobile ? '20px' : '30px'}
            >
              with love,
            </Typography>
            <Typography 
              variant="body2" 
              fontFamily={'"Raleway", sans-serif'} 
              fontWeight={500} 
              color="white" 
              fontStyle={'italic'} 
              fontSize={isMobile ? '20px' : '30px'}
            >
              D&H
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
