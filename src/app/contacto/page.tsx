import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import ContactForm from "../componentes/contactForm/ContactForm";

const Contacto: React.FC = () => {
  return (
    <Box
      id="contacto"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `grey`,
        minHeight: "60vh",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h3"
              sx={{ fontWeight: "bold" }}
              color="black"
            >
              CONTACTAME
            </Typography>
            <Typography color="white" variant="body1" component="p">
              Hoy tengo la responsabilidad de representar a los villenses y lo
              hago con mucho gusto y compromiso.
              <br /> Quiero realizar mis aportes para resolver los problemas que
              tenemos y tratar de lograr una mejor calidad de vida para todos.{" "}
              <br /> Estoy para escucharte y que tu inquietud se transforme en
              una iniciativa que nos ayude a mejorar nuestra ciudad.
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
