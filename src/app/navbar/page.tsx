"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
  TextField,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search"; // Importar el ícono de búsqueda
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false); // Estado para controlar la visibilidad del campo de búsqueda
  const isMenuOpen = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen); // Alternar la visibilidad del campo de búsqueda
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
          zIndex: 1201, // Asegúra de que el NavBar esté encima del contenido
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            style={{
              minHeight: "64px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href={"/"} >
              <Typography variant="h6" style={{ color: "#fff" }}>
                ANDRES PATA AVILE
              </Typography>
            </Link>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Tabs value={0} textColor="inherit">
                <Tab label="INICIO" sx={{ color: "#fff" }} />
                <Tab label="PROYECTOS LEGISLATURA" sx={{ color: "#fff" }} />
                <Tab label="CONTACTO" sx={{ color: "#fff" }} />
                <Tab label="MANDATO CUMPLIDO" sx={{ color: "#fff" }} />
              </Tabs>
              <Box
                sx={{ marginLeft: 2, display: "flex", alignItems: "center" }}
              >
                <IconButton color="inherit" onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
                {searchOpen && (
                  <TextField
                    variant="outlined"
                    placeholder="Buscar..."
                    size="small"
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: 1,
                      marginLeft: 1,
                    }}
                  />
                )}
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                slotProps={{
                  paper: {
                    style: {
                      maxHeight: 400,
                      width: "250px",
                      padding: "16px",
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <Box sx={{ marginBottom: 2 }}>
                  <TextField
                    variant="outlined"
                    placeholder="Buscar..."
                    size="small"
                    fullWidth
                    sx={{ marginBottom: 1 }}
                  />
                  <Button variant="contained" color="primary" fullWidth>
                    Buscar
                  </Button>
                </Box>
                <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
                  Inicio
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
                  Mis Proyectos
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
                  Contacto
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
                  Mandato Cumplido
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
