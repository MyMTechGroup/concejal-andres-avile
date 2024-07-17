import React from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const ThankYou: React.FC = () => {
  return (
    <Box
      textAlign="center"
      mt={4}
      mb={4}
      sx={{
        backgroundColor: "#222533",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box>
        <FavoriteIcon color="error" fontSize="large" />
        <EmojiPeopleIcon color="primary" fontSize="large" />
      </Box>
      <Typography variant="h5" component="p" mt={2}>
        ¡Gracias por visitar mi página!
      </Typography>
    </Box>
  );
};

export default ThankYou;
