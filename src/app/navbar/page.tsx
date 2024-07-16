"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Menu, MenuItem, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#1a237e', top: '48px', left: 0, right: 0 }}>
      <Container maxWidth="lg">
        <Toolbar style={{ minHeight: '64px' }}>
          <Typography variant="h6" style={{ flexGrow: 1, color: '#fff' }}>
            ANDRES PATA AVILE
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tabs value={0} textColor="inherit">
              <Tab label="INICIO" sx={{ transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#303f9f' } }} />
              <Tab label="PROYECTOS LEGISLATURA" sx={{ transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#303f9f' } }} />
              <Tab label="CONTACTO" sx={{ transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#303f9f' } }} />
              <Tab label="MANDATO CUMPLIDO" sx={{ transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#303f9f' } }} />
            </Tabs>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>INICIO</MenuItem>
              <MenuItem onClick={handleMenuClose}>PROYECTOS LEGISLATURA</MenuItem>
              <MenuItem onClick={handleMenuClose}>CONTACTO</MenuItem>
              <MenuItem onClick={handleMenuClose}>MANDATO CUMPLIDO</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
