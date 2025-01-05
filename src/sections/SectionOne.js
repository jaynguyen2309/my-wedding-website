import { Grid, Typography, Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import localFont from 'next/font/local';
// import font from '../../fonts/Playlist_Script.otf'

export const myFont = localFont({ src: '../../public/fonts/BrittanySignature.ttf' })

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
        {!isMobileScreen &&
          <img
            src="../../img/image1.jpg"
            alt="Wedding couple side photo"
            style={{
              width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
              height: isLargeScreen ? '550px' : isMediumScreen ? '450px' : '250px',
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />}

        <img
          src="https://cuoidichochi.my.canva.site/media/44421081d029c10ac3bbffcd6b94f368.jpg"
          alt="Wedding couple main photo"
          style={{
            width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
            height: isLargeScreen ? '650px' : isMediumScreen ? '550px' : '500px',
            objectFit: "cover",
            borderRadius: "20px"
          }}
        />
        {!isMobileScreen &&
          <img
            src="https://cuoidichochi.my.canva.site/media/99cb877294d37824423cb7ef7ab80f86.jpg"
            alt="Bride photo"
            style={{
              width: isLargeScreen ? "100%" : isMediumScreen ? "50%" : "auto",
              height: isLargeScreen ? '550px' : isMediumScreen ? '450px' : '250px',
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />}

      </Stack>

      {!isMobileScreen ? (
        <>
          {/* Couple Names */}
          <Typography
            className={myFont.className}
            sx={{
              color: "#4A1010",
              fontSize: "3rem",
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
        <div>
          <div style={{ margin: '40px 0 35px' }}>
            <Typography
              className={myFont.className}
              sx={{
                color: "#4A1010",
                fontSize: "45px",
                zIndex: 1000,
                textAlign: 'center',
                marginRight: '60px',
                marginBottom: '20px'
              }}
            >
              Quang Duy &
            </Typography>
            <Typography
              className={myFont.className}
              sx={{
                color: "#4A1010",
                fontSize: "45px",
                zIndex: 1000,
                textAlign: 'center',
                marginLeft: '80px'
              }}
            >
              Thanh Huyen
            </Typography>
          </div>


          {/* Quote */}
          <Typography
            sx={{
              color: "#4A1010",
              fontSize: "0.7rem",
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