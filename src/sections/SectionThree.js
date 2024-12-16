import React from 'react';
import { Stack, Grid, Typography } from '@mui/material';

const SectionThree = () => {
  return (
    <Grid container spacing={5} display="flex" direction="row" sx={{maxWidth: '1200px', margin: '0 auto 20px'}}>
      <Grid item xs={12} md={6}>
        <Stack direction="row" spacing={3} alignItems={'center'}>
          <img
            src="https://cuoidichochi.my.canva.site/media/d770a7800848903abda585a8302b4ec8.jpg"
            alt="Wedding couple side photo"
            style={{ height: '400px', width: 'auto', objectFit: 'cover' }}
          />
          <div>
            <Typography variant="h4" fontSize={'30px'} fontWeight={600} fontFamily={'"Bodoni Moda", sans-serif'} mb={2}>I'm Quang Duy</Typography>
            <Typography variant="body2" fontSize={'12px'} fontFamily={'"Raleway", sans-serif'} textTransform={'uppercase'} fontWeight={600}>
              I'm Duy. I'm a full-time Software Engineer in Sydney. In my free time, I enjoy playing games, playing sports, and swimming. I spent two years studying in Singapore. During my time there, I met the love of my life, Huyen. I was too shy to express my feelings for her—until a bottle of tequila led to our first kiss.
            </Typography>
            <Typography variant="body2" fontSize={'12px'} fontFamily={'"Raleway", sans-serif'} textTransform={'uppercase'} fontWeight={600}>
              We've been together for over five years now. Along the way, we've met many wonderful people, experienced both the highs and lows of life, and grown together as a couple. And now we are getting to a new chapter together, to become husband and wife.
            </Typography>
          </div>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} mt={25}>
        <Stack direction="row" spacing={3} alignItems={'center'}>
          <img
            src="https://cuoidichochi.my.canva.site/media/b735eb9a521da269d078382c95e3752e.jpg"
            alt="Wedding couple side photo"
            style={{ height: '400px', width: 'auto', objectFit: 'cover' }}
          />
          <div>
            <Typography variant="h4" fontSize={'30px'} fontWeight={600} fontFamily={'"Bodoni Moda", sans-serif'} mb={2}>I'm Thanh Huyen</Typography>
            <Typography variant="body2" fontSize={'12px'} fontFamily={'"Raleway", sans-serif'} textTransform={'uppercase'} fontWeight={600}>
              I'm Huyen. I'm a full-time Software Engineer in Sydney. In my free time, I enjoy playing games, playing sports, and swimming. I spent two years studying in Singapore. During my time there, I met the love of my life, Duy. I was too shy to express my feelings for him—until a bottle of tequila led to our first kiss.
            </Typography>
            <Typography variant="body2" fontSize={'12px'} fontFamily={'"Raleway", sans-serif'} textTransform={'uppercase'} fontWeight={600}>
              Your ideas have a purpose, so choose words that accurately express them. Ensure your grammar is flawless as it impacts your credibility. Use the active voice whenever possible as it makes any narrative easier to read.
            </Typography>
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SectionThree;