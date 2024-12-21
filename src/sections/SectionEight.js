import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";

const SectionEight = () => {
  const targetDate = new Date("2025-02-08T00:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isVisible, setIsVisible] = useState(false);

  function calculateTimeLeft() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) return { years: 0, months: 0, weeks: 0, days: 0 };

    const secondsInYear = 365 * 24 * 60 * 60 * 1000;
    const secondsInMonth = 30 * 24 * 60 * 60 * 1000;
    const secondsInWeek = 7 * 24 * 60 * 60 * 1000;
    const secondsInDay = 24 * 60 * 60 * 1000;

    const years = Math.floor(timeDifference / secondsInYear);
    const months = Math.floor((timeDifference % secondsInYear) / secondsInMonth);
    const weeks = Math.floor((timeDifference % secondsInMonth) / secondsInWeek);
    const days = Math.floor((timeDifference % secondsInWeek) / secondsInDay);

    return { years, months, weeks, days };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
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

    return () => section && observer.unobserve(section);
  }, []);

  function formatNumber(number) {
    return String(number).padStart(2, "0"); // Adds leading zero for single-digit numbers
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      maxWidth="1200px"
      margin="0 auto"
      id="section-eight"
      role="region"
      aria-labelledby="countdown-title"
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
          {["Years", "Months", "Weeks", "Days"].map((label, index) => {
            const value = [timeLeft.years, timeLeft.months, timeLeft.weeks, timeLeft.days][index];
            return (
              <Stack
                key={label}
                width="160px"
                direction="column"
                alignItems="center"
                justifyContent="center"
                border="2px solid #590112"
                borderRadius={5}
                padding={3}
                spacing={5}
              >
                <Typography
                  variant="h2"
                  fontWeight={700}
                  fontFamily='"Bodoni Moda", sans-serif'
                  color="#590112"
                  fontSize={'70px'}
                >
                  {formatNumber(value)}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  fontFamily={'"Bodoni Moda", sans-serif'}
                  color="#590112"
                  fontSize={'30px'}
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
