import React, { useEffect, useState, useRef } from "react";
import { Stack, Typography, useTheme, useMediaQuery, Grid, Box } from "@mui/material";
import { myFont } from "./SectionOne";

const SectionEight = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const sectionRef = useRef(null);

  const targetDate = new Date("2025-02-08T00:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const secondsInDay = 24 * 60 * 60 * 1000;
    const secondsInHour = 60 * 60 * 1000;
    const secondsInMinute = 60 * 1000;

    const days = Math.floor(timeDifference / secondsInDay);
    const hours = Math.floor((timeDifference % secondsInDay) / secondsInHour);
    const minutes = Math.floor((timeDifference % secondsInHour) / secondsInMinute);
    const seconds = Math.floor((timeDifference % secondsInMinute) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        const elements = entry.target.querySelectorAll('.animate-bounce');
        
        if (entry.isIntersecting) {
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'scale(1)';
            }, index * 200);
          });
        } else {
          elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'scale(0.5)';
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

  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  const bounceStyle = {
    opacity: 0,
    transform: 'scale(0.5)',
    transition: 'opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    willChange: 'opacity, transform'
  };

  return (
    <Stack
      ref={sectionRef}
      direction="column"
      alignItems="center"
      maxWidth={isMobile ? '400px' : "1200px"}
      margin="0 auto"
      id="section-eight"
      role="region"
      aria-labelledby="countdown-title"
      marginTop={isMobile ? 5 : 10}
      justifyContent={!isMobile && 'center'}
    >
      <Typography
        id="countdown-title"
        variant={isMobile ? "h3" : "h2"}
        fontWeight={500}
        className={myFont.className}
        mb={isMobile ? 7 : 10}
        mt={isMobile && 3}
        color="#590112"
        textAlign={'center'}
      >
        Let's count down the time with us!
      </Typography>
      {isMobile ? (
        <Grid container spacing={4}>
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
            const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index];
            return (
              <Grid item xs={6} key={label}>
                <Box
                  className="animate-bounce"
                  sx={bounceStyle}
                >
                  <Stack
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    spacing={3}
                    border="3px solid #590112"
                    borderRadius={5}
                    height={'200px'}
                  >
                    <Typography
                      variant="h2"
                      fontWeight={700}
                      color="#590112"
                      fontSize={"50px"}
                    >
                      {formatNumber(value)}
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      color="#590112"
                      fontSize={"30px"}
                    >
                      {label}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={5}
          alignContent="center"
          justifyContent="center"
        >
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
            const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index];
            return (
              <Box
                key={label}
                className="animate-bounce"
                sx={bounceStyle}
              >
                <Stack
                  width="200px"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  border="3px solid #590112"
                  borderRadius={5}
                  padding={3}
                  spacing={9}
                >
                  <Typography
                    variant="h2"
                    fontWeight={700}
                    color="#590112"
                    fontSize={"95px"}
                  >
                    {formatNumber(value)}
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    color="#590112"
                    fontSize={"40px"}
                  >
                    {label}
                  </Typography>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};

export default SectionEight;
