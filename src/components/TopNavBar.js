import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';

const ToolbarStyle = styled(Toolbar)(({ isMobile }) => ({
  backgroundColor: 'transparent !important',
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: isMobile ? 'space-evenly' : 'flex-start',
}));

export default function TopNavBar({ onOurStoryClick, onRSVPClick, onContactUsClick, isMobile }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ToolbarStyle>
        <Toolbar>
          <Button color="inherit" sx={{ fontSize: '14px', fontWeight: '700', color: '#590112', fontFamily: '"Raleway", sans-serif' }} onClick={onOurStoryClick}>Our Story</Button>
          <Button color="inherit" sx={{ fontSize: '14px', fontWeight: '700', color: '#590112', fontFamily: '"Raleway", sans-serif' }} onClick={onRSVPClick}>RSVP</Button>
          <Button color="inherit" sx={{ fontSize: '14px', fontWeight: '700', color: '#590112', fontFamily: '"Raleway", sans-serif' }} onClick={onContactUsClick}>Contact Us</Button>
        </Toolbar>
      </ToolbarStyle>
    </Box>
  );
}
