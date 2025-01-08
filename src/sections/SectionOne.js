import { Grid, Typography, Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import localFont from 'next/font/local';
import { useEffect, useRef } from "react";

export const myFont = localFont({ src: '../../public/fonts/BrittanySignature.ttf' })

export default function SectionOne() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'xl'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
              el.style.transform = 'translateY(0)';
            }, index * 200);
          });
        } else {
          elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)'; // Start from bottom
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
    transform: 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    willChange: 'opacity, transform'
  };

  const floatingAnimation = {
    '@keyframes floating': {
      '0%': {
        transform: 'translateY(0px)',
      },
      '50%': {
        transform: 'translateY(-10px)',
      },
      '100%': {
        transform: 'translateY(0px)',
      },
    },
  };

  const imageStyle = {
    animation: 'floating 3s ease-in-out infinite',
    transition: 'transform 0.3s ease-out',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    ...floatingAnimation,
    ...animationStyle
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        padding: isLargeScreen ? "40px 0" : "10px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={{ xs: 3, sm: 8 }} 
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'}
      >
        {!isMobileScreen && (
          <Box
            className="animate-on-scroll"
            component="img"
            src="../../img/thegroom.jpg"
            alt="Wedding couple side photo"
            sx={{
              width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
              height: isLargeScreen ? '550px' : isMediumScreen ? '450px' : '250px',
              objectFit: "cover",
              borderRadius: "20px",
              ...imageStyle
            }}
          />
        )}

        <Box
          className="animate-on-scroll"
          component="img"
          src="https://cuoidichochi.my.canva.site/media/44421081d029c10ac3bbffcd6b94f368.jpg"
          alt="Wedding couple main photo"
          sx={{
            width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
            height: isLargeScreen ? '650px' : isMediumScreen ? '550px' : '370px',
            objectFit: "cover",
            borderRadius: "20px",
            ...imageStyle,
            transitionDelay: '0.2s'
          }}
        />

        {!isMobileScreen && (
          <Box
            className="animate-on-scroll"
            component="img"
            src="https://cuoidichochi.my.canva.site/media/99cb877294d37824423cb7ef7ab80f86.jpg"
            alt="Bride photo"
            sx={{
              width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
              height: isLargeScreen ? '550px' : isMediumScreen ? '450px' : '250px',
              objectFit: "cover",
              borderRadius: "20px",
              ...imageStyle,
              transitionDelay: '0.4s'
            }}
          />
        )}
      </Stack>

      {!isMobileScreen ? (
        <>
          <Typography
            className={`${myFont.className} animate-on-scroll`}
            sx={{
              color: "#4A1010",
              fontSize: "3rem",
              margin: "-10rem 0 6rem 0",
              zIndex: 1000,
              ...animationStyle,
              transitionDelay: '0.6s'
            }}
          >
            Quang Duy & Thanh Huyen
          </Typography>

          <Typography
            className="animate-on-scroll"
            sx={{
              color: "#4A1010",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              ...animationStyle,
              transitionDelay: '0.8s'
            }}
          >
            "Two hearts in love need no words."
          </Typography>
        </>
      ) : (
        <div>
          <div style={{ margin: '40px 0 35px' }}>
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
                transitionDelay: '0.6s'
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
                transitionDelay: '0.8s'
              }}
            >
              Thanh Huyen
            </Typography>
          </div>

          <Typography
            className="animate-on-scroll"
            sx={{
              color: "#4A1010",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: 'center',
              ...animationStyle,
              transitionDelay: '1s'
            }}
          >
            "Two hearts in love need no words."
          </Typography>
        </div>
      )}
    </Box>
  );
}