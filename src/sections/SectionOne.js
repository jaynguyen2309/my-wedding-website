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
        padding: isLargeScreen ? "40px 0" : "10px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {/* Photo Grid */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 8 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <img
          src="../../img/image1.jpg"
          alt="Wedding couple side photo"
          style={{
            width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
            height: isLargeScreen ? '550px' : isMediumScreen ? '450px' : '250px',
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
        <img
          src="https://cuoidichochi.my.canva.site/media/44421081d029c10ac3bbffcd6b94f368.jpg"
          alt="Wedding couple main photo"
          style={{
            width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
            height: isLargeScreen ? '650px' : isMediumScreen ? '550px' : '300px',
            objectFit: "cover",
            borderRadius: "4px"
          }}
        />
        <img
          src="https://cuoidichochi.my.canva.site/media/99cb877294d37824423cb7ef7ab80f86.jpg"
          alt="Bride photo"
          style={{
            width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
            height: isLargeScreen ? '550px' : isMediumScreen ? '450px' : '250px',
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </Stack>

      {!isMobileScreen ? (
        <>
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
        </>
      ) :
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Typography
            sx={{
              color: "#4A1010",
              fontSize: "40px",
              fontFamily: "'Dancing Script', cursive",
              margin: "4rem 0 12rem 0",
              zIndex: 1000,
              textAlign: 'center'
            }}
          >
            Quang Duy & Thanh Huyen
          </Typography>

          {/* Quote */}
          <Typography
            sx={{
              color: "#4A1010",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: 'center'
            }}
          >
            "Two hearts in love need no words."
          </Typography>
        </div>
      }
    </Box>
  );
}