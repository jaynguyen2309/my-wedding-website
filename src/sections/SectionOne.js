import { Grid, Typography, Box, Stack } from "@mui/material";

export default function SectionOne() {
  return (
    <Box
      sx={{
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 40px"
      }}
    >
      {/* Photo Grid */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 8 }} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
        // maxWidth: "1200px",
        // padding: "0 40px",
      }}
      >
        <img
          src="../../img/image1.jpg"
          alt="Wedding couple side photo"
          style={{
            maxWidth: "270px",
            width: "100%",
            height: '400px',
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
        <img
          src="https://cuoidichochi.my.canva.site/media/44421081d029c10ac3bbffcd6b94f368.jpg"
          alt="Wedding couple main photo"
          style={{
            width: "100%",
            height: '500px',
            objectFit: "cover",
            borderRadius: "4px"
          }}
        />
        <img
          src="https://cuoidichochi.my.canva.site/media/99cb877294d37824423cb7ef7ab80f86.jpg"
          alt="Bride photo"
          style={{
            maxWidth: "270px",
            width: "100%",
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