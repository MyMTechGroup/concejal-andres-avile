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
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const isMenuOpen = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = usePathname();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const getSelectedTab = () => {
    switch (pathname) {
      case "/":
        return 0;
      case "/allNewsPage":
        return 1;
      case "/proyectos":
        return 2;
      case "/contacto":
        return 3;
      case "/mandato":
        return 4;
      default:
        return false;
    }
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
          zIndex: 1201,
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
            <Link href="/" passHref>
              <Typography
                variant="h6"
                style={{ color: "#fff", cursor: "pointer" }}
              >
                ANDRES PATA AVILE
              </Typography>
            </Link>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Tabs value={getSelectedTab()} textColor="inherit">
                <Link href="/" passHref>
                  <Tab
                    label="INICIO"
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                      "&.Mui-selected": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                    }}
                  />
                </Link>
                <Link href="/allNewsPage" passHref>
                  <Tab
                    label="NOTICIAS"
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                      "&.Mui-selected": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                    }}
                  />
                </Link>
                <Link href="/" passHref>
                  <Tab
                    label="PROYECTOS LEGISLATURA"
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                      "&.Mui-selected": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                    }}
                  />
                </Link>
                <Link href="/" passHref>
                  <Tab
                    label="CONTACTO"
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                      "&.Mui-selected": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                    }}
                  />
                </Link>
                <Link href="/" passHref>
                  <Tab
                    label="MANDATO CUMPLIDO"
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                      "&.Mui-selected": {
                        color: "#E3F2FD",
                        borderBottom: "2px solid #42A5F5",
                      },
                    }}
                  />
                </Link>
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
                  <Link href="/">Inicio</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
                  <Link href="/noticias">Noticias</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
                  <Link href="/proyectos">Proyectos Legislatura</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
                  <Link href="/contacto">Contacto</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
                  <Link href="/mandato">Mandato Cumplido</Link>
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
