import { LocationOn } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { myFont } from "./SectionOne";
import { useEffect, useRef } from "react";

export default function SectionSix() {
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
            el.style.transform = 'translateX(100px)'; // Start from right
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
    transform: 'translateX(100px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    willChange: 'opacity, transform'
  };

  return (
    <Stack 
      ref={sectionRef}
      spacing={3} 
      direction={{ xs: 'column', md: 'row' }} 
      justifyContent='space-between' 
      sx={{ maxWidth: isMobile ? '400px' : '1200px', margin: '0 auto' }}
    >
      <Box 
        className="animate-on-scroll"
        display={'flex'} 
        flexDirection={'column'} 
        gap={isMobile ? 2 : 5} 
        pt={isMobile ? 5 : 10} 
        pl={2} 
        pr={2}
        sx={animationStyle}
      >
        <Typography 
          variant={isMobile ? 'h2' : 'h1'} 
          fontWeight={500} 
          color={'#590112'} 
          className={myFont.className} 
          mb={{ xs: '30px', md: '100px' }} 
          textAlign={isMobile ? 'center' : 'left'}
        >
          Location
        </Typography>
        <Typography 
          variant="body1" 
          fontSize={isMobile ? '20px' : '40px'} 
          fontWeight={600} 
          color={'#590112'} 
          fontFamily={'"Raleway", sans-serif'}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LocationOn fontSize={isMobile ? '20px' : '40px'} color="#590112" />
            <span>Sheraton Hanoi Hotel</span>
          </span>
        </Typography>
        <Typography 
          variant="body1" 
          fontSize={isMobile ? '20px' : '40px'} 
          fontWeight={600} 
          color={'#590112'} 
          fontFamily={'"Raleway", sans-serif'}
        >
          K5 Nghi Tam, 11 Xuan Dieu Road, Tay Ho, Hanoi, Vietnam
        </Typography>
      </Box>
      <Box
        className="animate-on-scroll"
        sx={{
          ...animationStyle,
          transitionDelay: '0.2s'
        }}
      >
        <img 
          src="/img/sheraton.jpg" 
          alt="map" 
          style={{ 
            maxHeight: '550px', 
            height: '100%', 
            padding: isMobile ? '20px' : '50px' 
          }} 
        />
      </Box>
    </Stack>
  );
}