import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";

const SectionEight = () => {
  const targetDate = new Date("2025-02-08T00:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isVisible, setIsVisible] = useState(false);

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("section-eight");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
      observer.disconnect();
    };
  }, []);

  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  return (
    <Stack
      direction="column"
      alignItems="center"
      maxWidth="1200px"
      margin="0 auto"
      id="section-eight"
      role="region"
      aria-labelledby="countdown-title"
      marginTop={10}
    >
      <Typography
        id="countdown-title"
        variant="h2"
        fontWeight={600}
        fontFamily='"Dancing Script", cursive'
        mb={10}
        color="#590112"
      >
        Let's count down the time with us!
      </Typography>
      {isVisible && (
        <Stack
          direction="row"
          spacing={5}
          alignContent="center"
          justifyContent="center"
        >
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
            const value = [
              timeLeft.days,
              timeLeft.hours,
              timeLeft.minutes,
              timeLeft.seconds,
            ][index];
            return (
              <Stack
                key={label}
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
                  fontFamily='"Bodoni Moda", sans-serif'
                  color="#590112"
                  fontSize={"95px"}
                >
                  {formatNumber(value)}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  fontFamily={'"Bodoni Moda", sans-serif'}
                  color="#590112"
                  fontSize={"40px"}
                >
                  {label}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};

export default SectionEight;
