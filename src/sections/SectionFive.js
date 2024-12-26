import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function SectionFive() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack direction='column' alignItems='center' sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* <img src="/img/title-section-5.png" alt="background5" style={{ width: '100%', marginTop: '50px' }} /> */}
      <Typography variant="h2" fontWeight={600} fontFamily={'"Raleway", sans-serif'} color="white" fontSize={'30px'} textAlign={'center'} pb={3}>Here's a sneak peak of</Typography>
      <Typography variant="h2" fontWeight={600} fontFamily={'"Dancing Script", cursive'} color="white" fontSize={'90px'} textAlign={'center'} pb={5}>Our Special Day's Schedule</Typography>
      {!isMobile ? (
        <Stack direction={'row'} alignItems='center' justifyContent='center' spacing={5} maxWidth={'1000px'} mt={3} ml={2} mr={2}>
          <img src="/img/wephoto.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
          <img src="/img/wevow.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
          <img src="/img/weeat.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
          <img src="/img/weparty.png" alt="we-eat" style={{ maxWidth: '250px', width: '100%' }} />
        </Stack>
      ) : (
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