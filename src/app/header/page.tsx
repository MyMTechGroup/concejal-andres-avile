import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Image from "next/image";

function Header() {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        height: "100vh",
        textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
        backgroundImage: `url(/header-img/ciudad-vc.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        width: "100%",
        paddingTop: "128px", // Para compensar la altura del TopBar y NavBar
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semitransparente
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ height: "100%", position: "relative", zIndex: 2 }}
      >
        <Grid container spacing={2} alignItems="center" sx={{ height: "100%" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
                padding: { xs: "0 16px", md: "0" },
                maxWidth: { md: "75%" }, // Limita el ancho del texto en pantallas grandes
              }}
            >
              Unidos por un futuro con valores de familia y vida
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              textAlign: "center",
            }}
          >
            <Image
              src="/header-img/user-bg-transparent.png"
              width={500}
              height={800}
              alt="concejal"
              style={{
                maxWidth: "100%",
                height: "auto",
                // transform: { xs: "scale(0.8)", md: "scale(1)" }, // Ajuste de escala en pantallas móviles
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
