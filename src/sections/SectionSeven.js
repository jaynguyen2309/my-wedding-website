import { Stack, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { myFont } from "./SectionOne";

export default function SectionSeven() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack direction="column" maxWidth={isMobile ? '400px' : "1200px"} margin="0 auto" p={isMobile && '30px 0px'}>
      <Typography variant="h2" color="white" fontWeight={500} className={myFont.className} mb={10} mt={isMobile && 5} textAlign={isMobile ? 'center' : 'left'}>Dresscode</Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems={isMobile && 'center'} spacing={5} justifyContent={'space-between'}>
        <img src="/img/dresscode-puzzle.png" alt="dresscode" width={isMobile ? '300px' : 'auto'} />
        <Stack direction="column" justifyContent="space-between">
          <Typography variant="body1" fontFamily={'"Raleway", sans-serif'} fontWeight={500} color="white" fontStyle={'italic'} fontSize={isMobile ? '27px' : '35px'}>We kindly encourage our guests to
            join us in wearing the following
            colors to our special day.</Typography>
          <Box pt={3}>
            <Typography variant="body2" fontFamily={'"Raleway", sans-serif'} fontWeight={500} color="white" fontStyle={'italic'} fontSize={isMobile ? '27px' : '30px'}>with love,</Typography>
            <Typography variant="body2" fontFamily={'"Raleway", sans-serif'} fontWeight={500} color="white" fontStyle={'italic'} fontSize={isMobile ? '27px' : '30px'}>D&H</Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}
