import { Stack, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";

export default function SectionTwo() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'xl'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const imageHeight = isLargeScreen ? '100vh' : isMediumScreen ? '630px' : '400px';

  return (
    <Stack
      direction={'row'}
      spacing={5}
      alignItems='center'
      justifyContent='center'
      sx={{
        height: 'fit-content',
        minHeight: imageHeight,
        maxWidth: '1200px',
      }}
    >
      <img
        src="https://cuoidichochi.my.canva.site/media/300d7fd3eabc42a56f85b459a47fb46d.jpg"
        alt="Wedding couple side photo"
        style={{
          height: '100vh',
          maxWidth: '100%',
          objectFit: 'cover'
        }}
      />
      <img
        src="../../img/calendar.png"
        alt="Save the date"
        style={{
          height: imageHeight,
          maxWidth: '100%',
          objectFit: 'contain'
        }}
      />
    </Stack>
  );
}