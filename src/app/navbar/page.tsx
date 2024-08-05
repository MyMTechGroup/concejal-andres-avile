"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Menu, MenuItem, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = usePathname();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position={isMobile ? "fixed" : "sticky"}
        style={{
          backgroundColor: "#1a237e",
          top: isMobile ? 0 : "64px",
          left: 0,
          right: 0,
          zIndex: 1201  // Asegura de que el NavBar esté encima del contenido
        }}
      >
        <Container maxWidth="xl">
          <Toolbar style={{ minHeight: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" style={{ color: '#fff' }}>
              ANDRES PATA AVILE
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Tabs value={0} textColor="inherit">
                <Tab 
                  label="INICIO" 
                  component={Link}
                  href="/#inicio"
                  sx={{ color: '#fff' }} 
                />
                <Tab 
                  label="PROYECTOS LEGISLATURA" 
                  component={Link}
                  href="/#proyectos"
                  sx={{ color: '#fff' }} 
                />
                <Tab 
                  label="CONTACTO" 
                  component={Link}
                  href="/#contacto"
                  sx={{ color: '#fff' }} 
                />
                <Tab 
                  label="MANDATO CUMPLIDO" 
                  component={Link}
                  href="/#mandato"
                  sx={{ color: '#fff' }} 
                />
              </Tabs>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  style: { maxHeight: 400, width: '250px', padding: '16px', backgroundColor: '#fff' }
                }}
              >
                <MenuItem onClick={handleMenuClose} component={Link} href="/#inicio" sx={{ color: '#000' }}>Inicio</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} href="/#proyectos" sx={{ color: '#000' }}>Proyectos Legislatura</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} href="/#contacto" sx={{ color: '#000' }}>Contacto</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} href="/#mandato" sx={{ color: '#000' }}>Mandato Cumplido</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
