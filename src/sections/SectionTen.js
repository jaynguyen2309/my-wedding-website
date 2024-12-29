import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { myFont } from "./SectionOne";

export default function SectionTen() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent='space-between' maxWidth={isMobile ? '400px' : '1200px'} margin={'0 auto'} spacing={isMobile ? 2 : 10} padding={isMobile && '20px 0px'}>
      <Stack direction="column" alignItems={'center'} justifyContent={'center'} spacing={5}>
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent={'center'} spacing={isMobile ? 5 : 10}>
          <Stack direction="column" alignItems={'flex-start'} justifyContent={'center'} spacing={1}>
            <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'50px'}>
              CAPTURE
            </Typography>
            <Stack direction="row" alignItems={'center'} justifyContent={'center'} spacing={2}>
              <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'45px'}>THE</Typography>
              <Typography variant="h2" fontWeight={500} className={myFont.className} color="#590112" fontSize={'35px'}>Moment</Typography>
            </Stack>
            <img src="../img/capturethemoment.png" alt="capture-the-moment" width={'240px'} />
          </Stack>
          <Stack direction="column" alignItems={'flex-start'} justifyContent={'center'} spacing={1}>
            <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'50px'}>
              SHARE
            </Typography>
            <Stack direction="row" alignItems={'center'} justifyContent={'center'} spacing={2}>
              <Typography variant="h2" fontWeight={500} className={myFont.className} color="#590112" fontSize={'45px'}>The</Typography>
              <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'45px'}>Love</Typography>
            </Stack>
            <img src="../img/scanme.png" alt="scan-me" width={'240px'} style={{ marginTop: '32px' }} />
          </Stack>

        </Stack>
        <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'30px'} textAlign={'center'}>
          Please scan the QR code to share pictures and videos with us!
        </Typography>
      </Stack>
      {!isMobile && <img src="../img/phone.png" alt="capture-the-moment" height={'600px'} />}
    </Stack>

  );
}
