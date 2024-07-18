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
        overflow:"hidden",
        width: "100%",
        paddingTop: "128px", // Para compensar la altura del TopBar y NavBar
      }}
    >
      <Container maxWidth="lg" style={{ height: "100%" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              {" "}
              Unidos por un futuro con valores de familia y vida
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ textAlign: "center", alignSelf: "flex-end" }}
          >
            <Image
              src="/header-img/user-bg-transparent.png"
              width={500}
              height={800}
              alt="concejal"
              style={{ maxWidth: "100%", height: "auto", marginBottom: 0 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
