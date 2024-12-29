import { LocationOn } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { myFont } from "./SectionOne";

export default function SectionSix() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' sx={{ maxWidth: isMobile ? '400px' : '1200px', margin: '0 auto' }}>
      <Box display={'flex'} flexDirection={'column'} gap={isMobile ? 2 : 5} pt={isMobile ? 5 : 10} pl={2} pr={2}>
        <Typography variant={isMobile ? 'h2' : 'h1'} fontWeight={500} color={'#590112'} className={myFont.className} mb={{ xs: '30px', md: '100px' }} textAlign={isMobile ? 'center' : 'left'}>Location</Typography>
        <Typography variant="body1" fontSize={isMobile ? '20px' : '40px'} fontWeight={600} color={'#590112'} fontFamily={'"Raleway", sans-serif'}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LocationOn fontSize={isMobile ? '20px' : '40px'} color="#590112" />
            <span>Sheraton Hanoi Hotel</span>
          </span>
        </Typography>
        <Typography variant="body1" fontSize={isMobile ? '20px' : '40px'} fontWeight={600} color={'#590112'} fontFamily={'"Raleway", sans-serif'}>
          K5 Nghi Tam, 11 Xuan Dieu Road, Tay Ho, Hanoi, Vietnam
        </Typography>
      </Box>
      <img src="/img/sheraton.jpg" alt="map" style={{ maxHeight: '700px', height: '100%', padding: isMobile ? '20px' : '50px' }} />
    </Stack>
  )
}