import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';

const ToolbarStyle = styled(Toolbar)(() => ({
  backgroundColor: 'transparent !important',
  color: 'black',
}));

export default function TopNavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ToolbarStyle position="static">
        <Toolbar>
          <Button color="inherit" sx={{ fontSize: '16px', fontWeight: '700', color: '#590112', fontFamily: '"Raleway", sans-serif' }}>Home</Button>
          <Button color="inherit" sx={{ fontSize: '16px', fontWeight: '700', color: '#590112', fontFamily: '"Raleway", sans-serif' }}>Our Story</Button>
          <Button color="inherit" sx={{ fontSize: '16px', fontWeight: '700', color: '#590112', fontFamily: '"Raleway", sans-serif' }}>RSVP</Button>
        </Toolbar>
      </ToolbarStyle>
    </Box>
  );
}
