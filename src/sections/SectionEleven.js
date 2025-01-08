import { Stack, Typography, Button, useTheme, useMediaQuery, Box } from "@mui/material";
import { Call } from "@mui/icons-material";
import { myFont } from "./SectionOne";
import { useEffect, useRef } from "react";

export default function SectionEleven() {
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
      direction={'column'} 
      alignItems={isMobile ? 'center' : 'flex-start'} 
      justifyContent='center' 
      maxWidth={isMobile ? '400px' : '1200px'} 
      margin={'0 auto'} 
      spacing={5} 
      p={isMobile && '20px 0px'}
    >
      <Typography 
        className="animate-on-scroll"
        variant="body1" 
        fontWeight={600} 
        fontFamily={'"Raleway", sans-serif'} 
        color="white" 
        fontSize={'35px'} 
        textAlign={'center'}
        sx={animationStyle}
      >
        Contact us immediately if you need help!
      </Typography>
      <Box 
        className="animate-on-scroll"
        sx={{
          ...animationStyle,
          transitionDelay: '0.2s'
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent='center' spacing={isMobile ? 5 : 10}>
          <img src="https://cuoidichochi.my.canva.site/media/f0e9336bbb877c20c1244168767d529f.jpg" alt="phone" style={{ width: isMobile ? '300px' : '400px', height: '250px', objectFit: 'cover', objectPosition: '-10% 10%' }} />
          <Stack direction={'column'} alignItems={'flex-start'} justifyContent='center' spacing={1}>
            <Typography variant="h3" fontWeight={500} className={myFont.className} color="white" fontSize={'50px'} textAlign={'center'} pb={5}>
              Quang Duy
            </Typography>
            <Typography variant="h3" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'} pb={3}>
              The groom
            </Typography>
            <Button startIcon={<Call fontSize="large" />} variant="contained" sx={{ backgroundColor: '#e0d7cf', color: '#590112', fontWeight: 600, fontFamily: '"Raleway", sans-serif', fontSize: '20px', padding: '10px 20px', borderRadius: '30px', "&:hover": { backgroundColor: '#e0d7cf', color: '#590112' } }}>Call Now</Button>
          </Stack>
        </Stack>
      </Box>
      <Box 
        className="animate-on-scroll"
        sx={{
          ...animationStyle,
          transitionDelay: '0.4s'
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent='center' spacing={isMobile ? 5 : 10}>
          <img src="https://cuoidichochi.my.canva.site/media/7648da573c84ba1509e1d7dd9062dc07.jpg" alt="phone" style={{ width: isMobile ? '300px' : '400px', height: '250px', objectFit: 'cover', objectPosition: '-10% 20%' }} />
          <Stack direction={'column'} alignItems={'flex-start'} justifyContent='center' spacing={1}>
            <Typography variant="h3" fontWeight={500} className={myFont.className} color="white" fontSize={'50px'} textAlign={'center'} pb={5}>
              Thanh Huyen
            </Typography>
            <Typography variant="h3" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'} pb={3}>
              The bride
            </Typography>
            <Button startIcon={<Call fontSize="large" />} variant="contained" sx={{ backgroundColor: '#e0d7cf', color: '#590112', fontWeight: 600, fontFamily: '"Raleway", sans-serif', fontSize: '20px', padding: '10px 20px', borderRadius: '30px', "&:hover": { backgroundColor: '#e0d7cf', color: '#590112' } }}>Call Now</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}