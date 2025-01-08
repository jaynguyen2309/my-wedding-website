import React, { useEffect, useRef } from 'react';
import { Stack, Grid, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const SectionThree = () => {
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
          // Start animation when entering viewport
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, index * 200);
          });
        } else {
          // Reset animation when leaving viewport
          elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
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

  const baseStyles = {
    opacity: 0,
    transform: 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    willChange: 'opacity, transform' // Optimize performance
  };

  return (
    <Box ref={sectionRef} sx={{ width: '100%', minHeight: '100vh' }}>
      <Grid
        container
        spacing={{ xs: 0, md: 5 }}
        display="flex"
        direction="row"
        sx={{ maxWidth: '1200px', margin: '0 auto 20px' }}
        color={'#590112'}
      >
        <Grid item xs={12} md={6} padding={isMobile && 5}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={'center'}>
            <Box
              component="img"
              className="animate-on-scroll"
              src="https://cuoidichochi.my.canva.site/media/d770a7800848903abda585a8302b4ec8.jpg"
              alt="Wedding couple side photo"
              sx={{
                height: '400px',
                width: 'auto',
                objectFit: 'cover',
                ...baseStyles
              }}
            />
            <Box
              className="animate-on-scroll"
              sx={baseStyles}
            >
              <Typography variant="h4" fontSize={'30px'} fontWeight={600} fontFamily={'"Bodoni Moda", sans-serif'} mb={2}>
                I'm Quang Duy
              </Typography>
              <Typography variant="body2" fontSize={'12px'} fontFamily={'"Raleway", sans-serif'} textTransform={'uppercase'} fontWeight={600}>
                I'm Duy. I'm a full-time Software Engineer in Sydney. In my free time, I enjoy playing games, playing sports, and swimming. I spent two years studying in Singapore. During my time there, I met the love of my life, Huyen. I was too shy to express my feelings for her—until a bottle of tequila led to our first kiss.
              </Typography>
              <Typography variant="body2" fontSize={'12px'} fontFamily={'"Raleway", sans-serif'} textTransform={'uppercase'} fontWeight={600}>
                We've been together for over five years now. Along the way, we've met many wonderful people, experienced both the highs and lows of life, and grown together as a couple. And now we are getting to a new chapter together, to become husband and wife.
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} mt={{ xs: 'unset', lg: 25 }} padding={isMobile && 5}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={'center'}>
            <Box
              component="img"
              className="animate-on-scroll"
              src="https://cuoidichochi.my.canva.site/media/b735eb9a521da269d078382c95e3752e.jpg"
              alt="Wedding couple side photo"
              sx={{
                height: '400px',
                width: 'auto',
                objectFit: 'cover',
                ...baseStyles
              }}
            />
            <Box
              className="animate-on-scroll"
              sx={baseStyles}
            >
              <Typography variant="h4" fontSize={'30px'} fontWeight={600} fontFamily={'"Bodoni Moda", sans-serif'} mb={2}>
                I'm Thanh Huyen
              </Typography>
              <Typography variant="body2" fontSize={'12px'} fontFamily={'"Raleway", sans-serif'} textTransform={'uppercase'} fontWeight={600}>
                I’m Huyen, a proud full-time wife to Duy—haha! Unlike Duy, I enjoy reading, watching movies, and sleeping during my free time. I’ve spent nearly five years living and studying abroad.
              </Typography>
              <Typography variant="body2" fontSize={'12px'} fontFamily={'"Raleway", sans-serif'} textTransform={'uppercase'} fontWeight={600}>
                Our love story began with a bottle of tequila, and soon, we’ll be starting a new chapter together. I look forward to building a happy and beautiful family with him.
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionThree;