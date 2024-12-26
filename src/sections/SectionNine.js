import { Send } from "@mui/icons-material";
import { Stack, Typography, TextField, Box, Grid, Button } from "@mui/material";

export default function SectionNine() {
  return (
    <Stack direction="column" alignItems={'center'} justifyContent={'center'} maxWidth={'1200px'} margin={'0 auto'}>
      <Typography variant="h1" fontWeight={700} fontFamily={'"Dancing Script", cursive'} color="white" mb={10}>
        RSVP
      </Typography>
      <Stack spacing={1} backgroudColor={'white'} direction={'column'} sx={{ backgroundColor: 'white' }} maxWidth={'800px'} p={'20px'} textAlign={'center'} borderRadius={'10px'}>
        <Grid container justifyContent={'center'} alignContent={'center'} display={'flex'} flexDirection={'row'} spacing={3} textAlign={'right'}>
          <Grid item xs={6}>
            <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} color="black" fontSize={'20px'} fontWeight={600} >
              Name of Guest:
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign={'left'}>
            <TextField size="small" />
          </Grid>
        </Grid>
        <Grid container justifyContent={'center'} alignContent={'center'} display={'flex'} flexDirection={'row'} spacing={3} textAlign={'right'}>
          <Grid item xs={6}>
            <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} color="black" fontSize={'20px'} fontWeight={600}>
              Dietary requirements:
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign={'left'}>
            <TextField size="small" />
          </Grid>
        </Grid>
        <Grid container justifyContent={'center'} alignContent={'center'} display={'flex'} flexDirection={'row'} spacing={3} textAlign={'right'}>
          <Grid item xs={6}>
            <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} color="black" fontSize={'20px'} fontWeight={600}>
              Number of guests attending:
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign={'left'}>
            <TextField size="small" />
          </Grid>
        </Grid>
        <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} color="black" fontSize={'20px'} fontWeight={600} pt={3}>
          Kindly reply by 25/01/2025
        </Typography>
        <Stack direction={'row'} spacing={5} justifyContent={'center'} alignContent={'center'} pt={2}>
          <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
            <img src="/img/seeyou.png" alt="see-you" style={{ width: '200px' }} />
            <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} color="black" fontSize={'18px'} fontWeight={600} >
              Yes! Ready to go!
            </Typography>
          </Stack>
          <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
            <img src="/img/sorry.png" alt="sorry" style={{ width: '200px' }} />
            <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} color="black" fontSize={'18px'} fontWeight={600} >
              Oh! Sorry to miss it
            </Typography>
          </Stack>
        </Stack>
        <Box pt={5}>
          <Button variant="contained" startIcon={<Send sx={{ mr: '5px' }} fontSize="large" />} sx={{ fontSize: '20px', borderRadius: '25px', textTransform: 'none', backgroundColor: '#590112' }}>
            <Typography variant="body1" fontFamily={'"Bodoni Moda", sans-serif'} fontSize={'22px'} fontWeight={600}>
              Send it
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}