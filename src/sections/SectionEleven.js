import { Stack, Typography } from "@mui/material";

export default function SectionEleven() {
  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent='center' maxWidth={'1200px'} margin={'0 auto'} spacing={5}>
      <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'35px'} textAlign={'center'}>
        Contact us immediately if you need help!
      </Typography>
      <Stack direction={'row'} alignItems={'center'} justifyContent='center' spacing={20}>
        <img src="https://cuoidichochi.my.canva.site/media/f0e9336bbb877c20c1244168767d529f.jpg" alt="phone" style={{ width: '400px', height: '250px', objectFit: 'cover', objectPosition: '-10% 10%' }} />
        <Stack direction={'column'} alignItems={'flex-start'} justifyContent='center' spacing={1}>
          <Typography variant="h3" fontWeight={600} fontFamily={'"Dancing Script", cursive'} color="white" fontSize={'50px'} textAlign={'center'} pb={5}>
            Quang Duy
          </Typography>
          <Typography variant="h3" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'} pb={3}>
            The groom
          </Typography>
          <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'}>
            AU: +61 420 633 939
          </Typography>
          <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'}>
            VN: +84 862 746 930
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} justifyContent='center' spacing={20}>

        <img src="https://cuoidichochi.my.canva.site/media/7648da573c84ba1509e1d7dd9062dc07.jpg" alt="phone" style={{ width: '400px', height: '250px', objectFit: 'cover', objectPosition: '-10% 10%' }} />
        <Stack direction={'column'} alignItems={'flex-start'} justifyContent='center' spacing={1}>
          <Typography variant="h3" fontWeight={600} fontFamily={'"Dancing Script", cursive'} color="white" fontSize={'50px'} textAlign={'center'} pb={5}>
            Thanh Huyen
          </Typography>
          <Typography variant="h3" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'} pb={3}>
            The bride
          </Typography>
          <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'}>
            AU: +61 450 940 019
          </Typography>
          <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'25px'} textAlign={'center'}>
            VN: +84 357 129 484
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}