import { Stack, Typography } from "@mui/material";

export default function SectionTen() {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent='space-between' maxWidth={'1200px'} margin={'0 auto'} spacing={10}>
      <Stack direction="column" alignItems={'center'} justifyContent={'center'} spacing={5}>
        <Stack direction="row" alignItems={'center'} justifyContent={'center'} spacing={10}>
          <Stack direction="column" alignItems={'flex-start'} justifyContent={'center'}>
            <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'50px'}>
              CAPTURE
            </Typography>
            <Stack direction="row" alignItems={'center'} justifyContent={'center'} spacing={2}>
              <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'45px'}>THE</Typography>
              <Typography variant="h2" fontWeight={600} fontFamily={'"Dancing Script", cursive'} color="#590112" fontSize={'45px'}>MOMENT</Typography>
            </Stack>
            <img src="../img/capturethemoment.png" alt="capture-the-moment" width={'240px'} />
          </Stack>
          <Stack direction="column" alignItems={'flex-start'} justifyContent={'center'}>
            <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'50px'}>
              SHARE
            </Typography>
            <Stack direction="row" alignItems={'center'} justifyContent={'center'} spacing={2}>
              <Typography variant="h2" fontWeight={600} fontFamily={'"Dancing Script", cursive'} color="#590112" fontSize={'45px'}>THE</Typography>
              <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'45px'}>LOVE</Typography>
            </Stack>
            <img src="../img/scanme.png" alt="scan-me" width={'240px'} style={{ marginTop: '32px' }} />
          </Stack>

        </Stack>
        <Typography variant="body1" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="#590112" fontSize={'30px'} textAlign={'center'}>
          Please scan the QR code to share pictures and videos with us!
        </Typography>
      </Stack>
      <img src="https://cuoidichochi.my.canva.site/media/0c36329d139477a20bc77b5b40c0c651.jpg" alt="capture-the-moment" width={'400px'} />
    </Stack>

  );
}
