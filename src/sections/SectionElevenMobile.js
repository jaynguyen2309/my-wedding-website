import { Stack, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Call } from "@mui/icons-material";
import { myFont } from "./SectionOne";

export default function SectionElevenMobile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack direction={'column'} alignItems={'center'} maxWidth={isMobile ? '400px' : '1200px'} margin={'0 auto'} spacing={3} p={isMobile && '20px 0px'}>
      <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} fontSize={'30px'} textAlign={'center'} pt={5}>
        Contact Us!
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent='center' spacing={isMobile ? 3 : 10}>
        <img src="https://cuoidichochi.my.canva.site/media/b7005d279f3dbe557f6e085b060265d0.jpg" alt="phone" style={{ width: '300px', height: '300px', objectFit: 'cover', objectPosition: '-10% 40%', borderRadius: '50%' }} />
        <Stack direction={'column'} justifyContent='center' spacing={3}>
          <Typography
            className={myFont.className}
            sx={{
              color: "#4A1010",
              fontSize: "40px",
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
              fontSize: "40px",
              zIndex: 1000,
              textAlign: 'center',
              marginLeft: '80px'
            }}
          >
            Thanh Huyen
          </Typography>
          <Button startIcon={<Call fontSize="large" />} variant="contained" sx={{ backgroundColor: '#590112', color: '#e0d7cf', fontWeight: 600, fontFamily: '"Raleway", sans-serif', fontSize: '20px', padding: '10px 20px', borderRadius: '30px', "&:hover": { backgroundColor: '#e0d7cf', color: '#590112' } }}>Call the groom</Button>
          <Button startIcon={<Call fontSize="large" />} variant="contained" sx={{ backgroundColor: '#590112', color: '#e0d7cf', fontWeight: 600, fontFamily: '"Raleway", sans-serif', fontSize: '20px', padding: '10px 20px', borderRadius: '30px', "&:hover": { backgroundColor: '#e0d7cf', color: '#590112' } }}>Call the bride</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}