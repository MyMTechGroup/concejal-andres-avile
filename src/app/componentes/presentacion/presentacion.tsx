import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

const Presentacion: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return null; // No renderiza el componente en dispositivos móviles
  }

  return (
    <Box
      mt={4}
      mb={4}
      sx={{
        backgroundColor: "#222533",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        padding: { xs: "5px 16px", md: '5px 92px' },
        visibility: 'visible',
        width: '100%',
        margin: '5px 0',
        borderTopWidth: '5px',
        borderBottomWidth: '5px',
        zIndex: 98,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box textAlign="left" sx={{ paddingLeft: { xs: 0, md: '92px' }, paddingRight: { xs: 0, md: '92px' } }}>
            <Typography variant="h3" component="p" paragraph>
              ¡HOLA VILLENSES!
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              Nos conocemos hace mucho, desde que inicié mi primera gestión en la ciudad.
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              Saben del compromiso y responsabilidad con la que llevé adelante mi trabajo durante todos estos años.
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              Desde diciembre de 2023 me tocó asumir una nueva responsabilidad, la de representar a todos los villenses desde el consejo deliberante.
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              Tengo el compromiso de trabajar, como lo hice siempre, con el objetivo de mejorar la calidad de vida de quienes habitamos Villa Constitucion.
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              ¡Acompañame a construir la ciudad que soñamos!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img
              src="/header-img/user-bg-transparent.png"
              alt="Imagen del Concejal"
              style={{
                maxWidth: "50%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Presentacion;
