import { Send } from "@mui/icons-material";
import { Stack, Typography, TextField, Box, Grid, Button, useMediaQuery, useTheme, styled } from "@mui/material";
import { myFont } from "./SectionOne";
import { useState } from "react";

export default function SectionNine() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [dietaryRequirements, setDietaryRequirements] = useState("");

  const [going, setGoing] = useState(false);
  const [miss, setMiss] = useState(false);

  const handleClickGoing = () => {
    setMiss(false)
    setGoing(true)
  }

  const handleClickMiss = () => {
    setMiss(true)
    setGoing(false)
  }

  const textFieldWidth = isMobile ? 'auto' : '335px';

  const handleSubmit = async () => {
    // Form validation
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!going && !miss) {
      alert('Please select whether you are attending or not');
      return;
    }

    if (going && !guests.trim()) {
      alert('Please enter number of guests');
      return;
    }

    try {
      // Prepare the data
      const formData = {
        name,
        going,
        guests: going ? guests : null,
        dietaryRequirements: going ? dietaryRequirements : null
      };

      // Replace DEPLOY_ID with your Google Apps Script deployment ID
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbw5IFAZ1s_JbtVHSMKC0zqrykcIbrF_RvTrZCM2vXNE41N_6pUBjAm6x-SLUFXzeY3P/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await response.json();

      if (result.status === 'success') {
        alert('Thank you for your RSVP!');
        // Reset form
        setName('');
        setGuests('');
        setDietaryRequirements('');
        setGoing(false);
        setMiss(false);
      } else {
        throw new Error(result.message || 'Failed to submit RSVP');
      }
    } catch (error) {
      alert('Sorry, there was an error submitting your RSVP. Please try again.');
      console.error('RSVP submission error:', error);
    }
  };

  return (
    <Stack alignItems={'center'} maxWidth={'1200px'} margin={'0 auto'}>

      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={20}>
        {!isMobile && (<img src="/img/rsvp.jpg" alt="rsvp" style={{ maxHeight: '600px', height: '100%', borderRadius: '20px' }} />)}

        <Stack direction={'column'} spacing={5} alignItems={'center'} justifyContent={'center'}>
          <Typography variant="h2" fontWeight={700} className={myFont.className} color="white" fontSize={'30px'}>
            RSVP
          </Typography>
          <Stack direction={'column'} spacing={2} alignItems={'center'} justifyContent={'center'} width={isMobile ? 'auto' : '500px'} sx={{ backgroundColor: 'white' }} borderRadius={'20px'} padding={2}>
            <Stack direction={'column'} spacing={1} alignItems={'center'} justifyContent={'center'}>
              <Typography variant="body1" fontFamily={'"Raleway", sans-serif'} fontWeight={600} color={'#590112'}>
                Name of Guest
              </Typography>
              <TextField
                size="small"
                sx={{ width: textFieldWidth }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={2}>
              <Stack onClick={handleClickGoing} backgroundColor={going && '#ffffff'} direction={'column'} alignItems={'center'} justifyContent={'center'} spacing={2} p={2} border={going ? '2px solid #590112' : '1px solid #d3d3d3'} borderRadius={5} sx={{ ':hover': { cursor: 'pointer' } }}>
                <img src="/img/seeyou.png" alt="see-you" style={{ maxWidth: '100px', width: '100%' }} />
                <Typography variant="body1" fontFamily={'"Raleway", sans-serif'} color={'#590112'}>Yes! Ready to go!</Typography>
              </Stack>
              <Stack onClick={handleClickMiss} backgroundColor={miss && '#ffffff'} direction={'column'} alignItems={'center'} justifyContent={'center'} spacing={2} p={2} border={miss ? '2px solid #590112' : '1px solid #d3d3d3'} borderRadius={5} sx={{ ':hover': { cursor: 'pointer' } }}>
                <img src="/img/sorry.png" alt="sorry" style={{ maxWidth: '100px', width: '100%' }} />
                <Typography variant="body1" fontFamily={'"Raleway", sans-serif'} color={'#590112'}>Sorry! I missed it</Typography>
              </Stack>
            </Stack>
            {going && (
              <>
                <Stack direction={'column'} spacing={1} alignItems={'center'} justifyContent={'center'}>
                  <Typography variant="body1" fontFamily={'"Raleway", sans-serif'} fontWeight={600} color={'#590112'}>
                    Number of guests
                  </Typography>
                  <TextField
                    size="small"
                    sx={{ width: textFieldWidth }}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </Stack>
                <Stack direction={'column'} spacing={1} alignItems={'center'} justifyContent={'center'}>
                  <Typography variant="body1" fontFamily={'"Raleway", sans-serif'} fontWeight={600} color={'#590112'}>
                    Dietary requirements
                  </Typography>
                  <TextField
                    size="small"
                    sx={{ width: textFieldWidth }}
                    value={dietaryRequirements}
                    onChange={(e) => setDietaryRequirements(e.target.value)}
                  />
                </Stack>
              </>
            )}
            <Box>
              <Button onClick={handleSubmit} variant="contained" startIcon={<Send sx={{ mr: '5px' }} fontSize="large" />} sx={{ fontSize: '20px', borderRadius: '25px', textTransform: 'none', backgroundColor: '#590112', ':hover': { backgroundColor: '#590112' } }}>
                <Typography variant="body1" fontFamily={'"Raleway", sans-serif'} fontSize={'20px'} fontWeight={600}>
                  Send it
                </Typography>
              </Button>
            </Box>
          </Stack>
        </Stack>

      </Stack>
    </Stack>
  );
}