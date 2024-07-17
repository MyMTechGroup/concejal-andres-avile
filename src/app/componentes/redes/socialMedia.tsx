import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialMedia: React.FC = () => {
  return (
    <Box
      textAlign="center"
      mt={4}
      sx={{
        backgroundColor: "#D8D8D8",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
        Encontrame en las Redes Sociales
      </Typography>
      <Typography variant="body1" component="p" mb={2}>
        Conoceme mejor, enterate de las últimas novedades, proyectos y más.
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <IconButton href="https://www.facebook.com" target="_blank" color="primary">
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.instagram.com" target="_blank" color="secondary">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.twitter.com" target="_blank" color="default">
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialMedia;
