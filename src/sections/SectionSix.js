import { LocationOn } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export default function SectionSix() {
  return (
    <Stack spacing={3} direction='row' alignItems='center' justifyContent='space-between' sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Typography variant="h1" fontWeight={700} color={'#590112'} fontFamily={'"Dancing Script", cursive'} mb={'100px'}>Location</Typography>
        <Typography variant="body1" fontSize={'40px'} fontWeight={600} color={'#590112'} fontFamily={'"Raleway", sans-serif'}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LocationOn fontSize="40px" color="#590112" />
            <span>Sheraton Hanoi Hotel</span>
          </span>
        </Typography>
        <Typography variant="body1" fontSize={'40px'} fontWeight={600} color={'#590112'} fontFamily={'"Raleway", sans-serif'}>
          K5 Nghi Tam, 11 Xuan Dieu Road, Tay Ho, Hanoi, Vietnam
        </Typography>
      </Box>
      <img src="/img/sheraton.jpg" alt="map" style={{ maxHeight: '100vh', height: '100%' }} />
    </Stack>
  )
}