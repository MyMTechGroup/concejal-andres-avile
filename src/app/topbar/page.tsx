import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function TopBar() {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#0d47a1', top: 0, left: 0, right: 0 }}>
      <Container maxWidth="lg" sx= {{alignItems:"center"}}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', minHeight: '40px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit" edge="start">
                <WhatsAppIcon />
              </IconButton>
              <Typography variant="body1" color="inherit">
                (+54) 2964 477098
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
              <Typography variant="body1" color="inherit">
                andresapataavile@gmail.com
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
