import { Stack, Typography, Button } from "@mui/material";
import { Call } from "@mui/icons-material";
import { myFont } from "./SectionOne";

export default function SectionEleven() {
  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent='center' maxWidth={'1200px'} margin={'0 auto'} spacing={5}>
      <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'35px'} textAlign={'center'}>
        Contact us immediately if you need help!
      </Typography>
      <Stack direction={'row'} alignItems={'center'} justifyContent='center' spacing={10}>
        <img src="https://cuoidichochi.my.canva.site/media/f0e9336bbb877c20c1244168767d529f.jpg" alt="phone" style={{ width: '400px', height: '250px', objectFit: 'cover', objectPosition: '-10% 10%' }} />
        <Stack direction={'column'} alignItems={'flex-start'} justifyContent='center' spacing={1}>
          <Typography variant="h3" fontWeight={500} className={myFont.className} color="white" fontSize={'50px'} textAlign={'center'} pb={5}>
            Quang Duy
          </Typography>
          <Typography variant="h3" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'} pb={3}>
            The groom
          </Typography>
          <Button startIcon={<Call fontSize="large" />} variant="contained" sx={{ backgroundColor: '#e0d7cf', color: '#590112', fontWeight: 600, fontFamily: '"Raleway", sans-serif', fontSize: '20px', padding: '10px 20px', borderRadius: '30px', "&:hover": { backgroundColor: '#e0d7cf', color: '#590112' } }}>Call Now</Button>
        </Stack>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} justifyContent='center' spacing={10}>
        <img src="https://cuoidichochi.my.canva.site/media/7648da573c84ba1509e1d7dd9062dc07.jpg" alt="phone" style={{ marginLeft: '36px', width: '400px', height: '250px', objectFit: 'cover', objectPosition: '-10% 20%' }} />
        <Stack direction={'column'} alignItems={'flex-start'} justifyContent='center' spacing={1}>
          <Typography variant="h3" fontWeight={500} className={myFont.className} color="white" fontSize={'50px'} textAlign={'center'} pb={5}>
            Thanh Huyen
          </Typography>
          <Typography variant="h3" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'} pb={3}>
            The bride
          </Typography>
          <Button startIcon={<Call fontSize="large" />} variant="contained" sx={{ backgroundColor: '#e0d7cf', color: '#590112', fontWeight: 600, fontFamily: '"Raleway", sans-serif', fontSize: '20px', padding: '10px 20px', borderRadius: '30px', "&:hover": { backgroundColor: '#e0d7cf', color: '#590112' } }}>Call Now</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}