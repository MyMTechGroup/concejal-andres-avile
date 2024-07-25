import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialMedia: React.FC = () => {
  return (
    <Box
      textAlign="center"
      sx={{
        backgroundColor: "#0d47a1", // Color principal
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#fff", // Texto blanco para mejor contraste
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}
      >
        Encontrame en las Redes Sociales
      </Typography>
      <Typography
        variant="body1"
        component="p"
        mb={2}
        sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
      >
        Conoceme mejor, enterate de las últimas novedades, proyectos y más.
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            color="inherit"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            color="inherit"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.twitter.com"
            target="_blank"
            color="inherit"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialMedia;
