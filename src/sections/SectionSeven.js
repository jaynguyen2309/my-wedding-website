import { Stack, Typography, Box } from "@mui/material";

export default function SectionSeven() {
  return (
    <Stack direction="column" maxWidth="1200px" margin="0 auto">
      <Typography variant="h2" color="white" fontWeight={600} fontFamily='"Raleway", sans-serif' mb={10}>DRESSCODE</Typography>
      <Stack direction="row" spacing={5}>
        <img src="/img/dresscode-puzzle.png" alt="dresscode" />
        <Stack direction="column" justifyContent="space-between">
          <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} fontWeight={500} color="white" fontStyle={'italic'} fontSize={'35px'}>We kindly encourage our guests to
            join us in wearing the following
            colors to our special day.</Typography>
          <Box>
            <Typography variant="body2" fontFamily={'"Bodoni Moda", sans-serif'} fontWeight={500} color="white" fontStyle={'italic'} fontSize={'30px'}>with love,</Typography>
            <Typography variant="body2" fontFamily={'"Bodoni Moda", sans-serif'} fontWeight={500} color="white" fontStyle={'italic'} fontSize={'30px'}>D&H</Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}
