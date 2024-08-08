import React from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";

const ContactForm: React.FC = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      color="#487ca0"
      sx={{
        backgroundColor: "#808080",
        padding: { xs: "10px", md: "20px" },
        borderRadius: "8px",
        width: "100%", 
      }}
    >
      <Typography variant="h4" gutterBottom>
        CONTACTAME
      </Typography>
      <Typography variant="body1" paragraph>
        Hoy tengo la responsabilidad de representar a los villenses y lo hago
        con mucho gusto y compromiso. Quiero realizar mis aportes para resolver
        los problemas que tenemos y tratar de lograr una mejor calidad de vida
        para todos. Estoy para escucharte y que tu inquietud se transforme en
        una iniciativa que nos ayude a mejorar nuestra ciudad.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            label="Nombre"
            variant="outlined"
            sx={{ width: "100%" }} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Teléfono"
            variant="outlined"
            sx={{ width: "100%" }} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            variant="outlined"
            sx={{ width: "100%" }} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Asunto"
            variant="outlined"
            sx={{ width: "100%" }} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="¿Cómo puedo ayudarte?"
            variant="outlined"
            multiline
            rows={4}
            sx={{ width: "100%" }} 
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%" }} 
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
