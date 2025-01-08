import { Typography, Box } from "@mui/material";
import { myFont } from "./SectionOne";
import { useEffect, useRef } from "react";

export default function SectionTwelve() {
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
          elements.forEach((el) => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
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

  return (
    <Box ref={sectionRef}>
      <Typography 
        className={`${myFont.className} animate-on-scroll`}
        variant="body1" 
        fontWeight={500} 
        color="#590112" 
        fontSize={'60px'} 
        textAlign={'center'}
        sx={animationStyle}
        lineHeight={'2.2'}
      >
        Hope to see you at our wedding!
      </Typography>
    </Box>
  );
}