import { Stack, Typography, Grid } from "@mui/material";

export default function SectionTwo() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={5} textAlign={'center'}>
        <img src="https://cuoidichochi.my.canva.site/media/300d7fd3eabc42a56f85b459a47fb46d.jpg" alt="Wedding couple side photo" style={{ height: '100vh' }} />
      </Grid>
      <Grid item xs={7} textAlign={'center'}>
        <img src="../../img/savethedate.png" alt="Save the date" style={{ height: '100vh', padding: '5px 0px' }} />
      </Grid>
    </Grid>
  )
}
