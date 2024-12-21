import { Stack, Typography, TextField } from "@mui/material";

export default function SectionNine() {
  return (
    <Stack direction="column" alignItems={'center'} justifyContent={'center'} maxWidth={'1200px'} margin={'0 auto'}>
      <Typography variant="h1" fontWeight={700} fontFamily={'"Dancing Script", cursive'} color="white" mb={10}>
        RSVP
      </Typography>
      <Stack direction="row" spacing={3} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} color="white" fontSize={'20px'}>
          Name of Guest:
        </Typography>
        <TextField label="Name" variant="standard"  size="small"/>
      </Stack>
    </Stack>
  );
}