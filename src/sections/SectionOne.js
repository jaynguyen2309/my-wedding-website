import { Grid, Typography, Box, Stack, useTheme, useMediaQuery } from "@mui/material";

export default function SectionOne() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'xl'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {/* Photo Grid */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 8 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <img
          src="../../img/image1.jpg"
          alt="Wedding couple side photo"
          style={{
            width: "100%",
            height: isLargeScreen ? '500px' : isMediumScreen ? '400px' : '300px',
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
        <img
          src="https://cuoidichochi.my.canva.site/media/44421081d029c10ac3bbffcd6b94f368.jpg"
          alt="Wedding couple main photo"
          style={{
            width: "100%",
            height: isLargeScreen ? '600px' : isMediumScreen ? '500px' : '400px',
            objectFit: "cover",
            borderRadius: "4px"
          }}
        />
        <img
          src="https://cuoidichochi.my.canva.site/media/99cb877294d37824423cb7ef7ab80f86.jpg"
          alt="Bride photo"
          style={{
            width: "100%",
            height: isLargeScreen ? '500px' : isMediumScreen ? '400px' : '300px',
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </Stack>

      {/* Couple Names */}
      <Typography
        sx={{
          color: "#4A1010",
          fontSize: "3rem",
          fontFamily: "'Dancing Script', cursive",
          margin: "-10rem 0 6rem 0",
          zIndex: 1000
        }}
      >
        Quang Duy & Thanh Huyen
      </Typography>

      {/* Quote */}
      <Typography
        sx={{
          color: "#4A1010",
          fontSize: "1rem",
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}
      >
        "Two hearts in love need no words."
      </Typography>
    </Box>
  );
}