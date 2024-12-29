import {
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { myFont } from "./SectionOne";

export default function SectionFour() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      id: "#15092019",
      title: "First Kiss",
      image:
        "https://cuoidichochi.my.canva.site/media/1e5d59f495b18bca34f222f3261a0d71.jpg",
      description:
        "Add short description of the speaker. Establish their credibility and expertise here.",
    },
    {
      id: "#24082024",
      title: "Special Proposal",
      image:
        "https://cuoidichochi.my.canva.site/media/cd29e8e8431b3e5f7b39253b255d3943.jpg",
      description:
        "Add short description of the speaker. Establish their credibility and expertise here.",
    },
    {
      id: "#08022025",
      title: "Wedding Day",
      image:
        "https://cuoidichochi.my.canva.site/media/0c36329d139477a20bc77b5b40c0c651.jpg",
      description:
        "Add short description of the speaker. Establish their credibility and expertise here.",
    },
  ];

  const handlePrevious = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const CardComponent = ({ card }) => (
    <Card
      sx={{
        minWidth: "300px", // Fixed card width
        maxWidth: "400px",
        height: "500px",
        borderRadius: "30px",
        bgcolor: "#591C1C",
        color: "white",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        marginRight: "16px", // Gap between cards
        padding: '35px'
      }}
    >
      <CardMedia
        component="img"
        image={card.image}
        alt="section-4"
        sx={{
          aspectRatio: "1",
          objectFit: "cover",
          minHeight: '300px',
          maxHeight: '300px',
          borderRadius: "24px",
        }}
      />
      <CardContent sx={{ padding: "20px 0" }}>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 1,
            fontFamily: '"Bodoni Moda", sans-serif',
            fontSize: "20px",
          }}
        >
          {card.id}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: 2,
            fontFamily: '"Raleway", sans-serif',
            fontSize: "18px",
          }}
        >
          {card.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "14px",
            lineHeight: 1.5,
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 500,
          }}
        >
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 0px" }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#591C1C", fontWeight: 500, mb: 2, fontFamily: '"Bodoni Moda", sans-serif', fontSize: isMobile ? '27px' : '50px', display: 'flex', flexDirection: 'row', gap: '10px' }}
      >
        Every couple has <span className={myFont.className} style={{ paddingLeft: '10px' }}>a story</span> <span><img src="/img/heart1.png" alt="heart" style={{ width: isMobile ? '60px' : '100px', rotate: '30deg', paddingLeft: '10px', paddingBottom: '5px' }} /></span>
      </Typography>

      {isMobile ? (
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton onClick={handlePrevious} sx={{ color: "#591C1C" }}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              width: "300px", // Fixed container width to match card
              height: "500px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${currentCard * 316}px)`, // 300px card + 16px margin
              }}
            >
              {cards.map((card, index) => (
                <CardComponent key={index} card={card} />
              ))}
            </Box>
          </Box>

          <IconButton onClick={handleNext} sx={{ color: "#591C1C" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      ) : (
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          {cards.map((card, index) => (
            <CardComponent key={index} card={card} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
