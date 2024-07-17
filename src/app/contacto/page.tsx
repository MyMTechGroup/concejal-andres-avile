import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Image from "next/image";
import ContactForm from "../componentes/form/contactForm";

const Contacto: React.FC = () => {
  return (
    <Box
      style={{
        position: "relative",
        color: "#fff",
        height: "100vh",
        textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
        backgroundColor: `grey`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        paddingTop: "128px", // Para compensar la altura del TopBar y NavBar
      }}
    >
      <Container maxWidth="lg" style={{}}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h3"
              sx={{ fontWeight: "bold"}}
              color='black'
            >
              CONTACTAME
            </Typography>
            <Typography color='#487ca0' variant="body1" component="p">
              Hoy tengo la responsabilidad de representar a los villenses y lo
              hago con mucho gusto y compromiso.<br/> Quiero realizar mis aportes
              para resolver los problemas que tenemos y tratar de lograr una
              mejor calidad de vida para todos. <br/> Estoy para escucharte y que tu
              inquietud se transforme en una iniciativa que nos ayude a mejorar
              nuestra ciudad.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacto;
