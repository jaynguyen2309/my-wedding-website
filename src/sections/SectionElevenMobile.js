import { Stack, Typography, Button, useTheme, useMediaQuery, Box } from "@mui/material";
import { Call } from "@mui/icons-material";
import { myFont } from "./SectionOne";
import { useEffect, useRef } from "react";

export default function SectionElevenMobile() {
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
      alignItems={'center'} 
      maxWidth={isMobile ? '400px' : '1200px'} 
      margin={'0 auto'} 
      spacing={3} 
      p={isMobile && '20px 0px'}
    >
      <Typography 
        className="animate-on-scroll"
        variant="body1" 
        fontWeight={600} 
        fontFamily={'"Raleway", sans-serif'} 
        fontSize={'30px'} 
        textAlign={'center'} 
        pt={5}
        sx={animationStyle}
      >
        Contact Us!
      </Typography>
      <Box
        className="animate-on-scroll"
        sx={{
          ...animationStyle,
          transitionDelay: '0.2s'
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent='center' spacing={isMobile ? 3 : 10}>
          <img 
            src="https://cuoidichochi.my.canva.site/media/b7005d279f3dbe557f6e085b060265d0.jpg" 
            alt="phone" 
            style={{ 
              width: '300px', 
              height: '300px', 
              objectFit: 'cover', 
              objectPosition: '-10% 40%', 
              borderRadius: '50%' 
            }} 
          />
          <Stack direction={'column'} justifyContent='center' spacing={3}>
            <Typography
              className={`${myFont.className} animate-on-scroll`}
              sx={{
                color: "#4A1010",
                fontSize: "40px",
                zIndex: 1000,
                textAlign: 'center',
                marginRight: '60px',
                marginBottom: '20px',
                ...animationStyle,
                transitionDelay: '0.4s'
              }}
            >
              Quang Duy &
            </Typography>
            <Typography
              className={`${myFont.className} animate-on-scroll`}
              sx={{
                color: "#4A1010",
                fontSize: "40px",
                zIndex: 1000,
                textAlign: 'center',
                marginLeft: '80px',
                ...animationStyle,
                transitionDelay: '0.6s'
              }}
            >
              Thanh Huyen
            </Typography>
            <Box
              className="animate-on-scroll"
              sx={{
                ...animationStyle,
                transitionDelay: '0.8s'
              }}
            >
              <Button 
                startIcon={<Call fontSize="large" />} 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#590112', 
                  color: '#e0d7cf', 
                  fontWeight: 600, 
                  fontFamily: '"Raleway", sans-serif', 
                  fontSize: '20px', 
                  padding: '10px 20px', 
                  borderRadius: '30px', 
                  "&:hover": { 
                    backgroundColor: '#e0d7cf', 
                    color: '#590112' 
                  },
                  width: '100%'
                }}
              >
                Call the groom
              </Button>
            </Box>
            <Box
              className="animate-on-scroll"
              sx={{
                ...animationStyle,
                transitionDelay: '1s'
              }}
            >
              <Button 
                startIcon={<Call fontSize="large" />} 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#590112', 
                  color: '#e0d7cf', 
                  fontWeight: 600, 
                  fontFamily: '"Raleway", sans-serif', 
                  fontSize: '20px', 
                  padding: '10px 20px', 
                  borderRadius: '30px', 
                  "&:hover": { 
                    backgroundColor: '#e0d7cf', 
                    color: '#590112' 
                  },
                  width: '100%'
                }}
              >
                Call the bride
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}