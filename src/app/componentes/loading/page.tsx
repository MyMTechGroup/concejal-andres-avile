// src/app/componentes/Loading/page.tsx
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 90;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500); // Ajusta el intervalo según sea necesario

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        padding: 2,
        textAlign: "center",
      }}
    >
      {/* Circular Progress */}
      {/* <CircularProgress /> */}
      {/* Circular Progress with Percentage */}
      {/* <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={progress} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            progress,
          )}%`}</Typography>
        </Box>
      </Box> */}
      {/* Linear Progress */}
      {/* <Box sx={{ width: '100%', mt: 2 }}>
        <LinearProgress />
      </Box> */}
      {/* Linear Progress with Percentage */}
      <Box sx={{ width: "80%", maxWidth: 600, mt: 2 }}>
        <LinearProgress variant="determinate" value={progress} />
        <Box sx={{ position: "relative", width: "100%", mt: 1 }}>
          <Typography
            variant="caption"
            component="div"
            sx={{ width: "100%", textAlign: "center" }}
          >{`${Math.round(progress)}%`}</Typography>
        </Box>
      </Box>
      <Typography
        variant="h4"
        sx={{
          mt: 2,
          color: "#1976d2",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
        }}
      >
        Bienvenidos a mi sitio web
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mt: 1,
          color: "#1976d2",
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
        }}
      >
        Concejal Andrés Pata Avile
      </Typography>
    </Box>
  );
};

export default Loading;
