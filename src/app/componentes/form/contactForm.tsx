import React from "react";
import { TextField, Button, Grid, Box } from "@mui/material";

const ContactForm: React.FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off" color='#487ca0'>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Nombre"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Teléfono"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Asunto"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="¿Cómo puedo ayudarte?"
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
