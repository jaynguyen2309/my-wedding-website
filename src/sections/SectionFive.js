import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function SectionFive() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack direction='column' alignItems='center' justifyContent='center' sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <img src="/img/title-section-5.png" alt="background5" style={{ width: '100%', marginTop: '50px' }} />
      {!isMobile ? (
        <Stack direction={'row'} alignItems='center' justifyContent='center' gap={2} maxWidth={'1000px'} mt={3} ml={2} mr={2}>
        <img src="/img/weeat.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
        <img src="/img/weparty.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
        <img src="/img/wevow.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
          <img src="/img/wephoto.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
        </Stack>
      ): (
        <Stack direction={'column'} alignItems='center' justifyContent='center' gap={2} maxWidth={'1000px'} mt={3} ml={2} mr={2}>
          <Stack direction={'row'} alignItems='center' justifyContent='center' gap={2} maxWidth={'1000px'} mt={3}>
            <img src="/img/weeat.png" alt="we-eat" style={{ maxWidth: '200px', width: '100%' }} />
            <img src="/img/weparty.png" alt="we-eat" style={{ maxWidth: '200px', width: '100%' }} />
          </Stack>
          <Stack direction={'row'} alignItems='center' justifyContent='center' gap={2} maxWidth={'1000px'} mt={3}>
            <img src="/img/wevow.png" alt="we-eat" style={{ maxWidth: '200px', width: '100%' }} />
            <img src="/img/wephoto.png" alt="we-eat" style={{ maxWidth: '200px', width: '100%' }} />
          </Stack>
        </Stack>
      )}
    </Stack>
  )
}