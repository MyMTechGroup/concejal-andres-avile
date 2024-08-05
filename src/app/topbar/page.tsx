import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Box,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Clock from "../componentes/clock/Clock";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const TikTok: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="currentColor"
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
  </svg>
);

function TopBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#0d47a1", top: 0, left: 0, right: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Clock /> {/* Aquí se agrega el componente Clock */}
          </Box>

          {/* Elementos de WhatsApp y Correo, ocultos en tablet */}
          <Box
            sx={{
              display: {
                xs: "none", // No mostrar en mobile
                sm: "flex", // Mostrar en tablet y arriba
              },
              alignItems: "center",
              mb: { xs: 1, sm: 0 },
            }}
          >
            <IconButton color="inherit" edge="start">
              <WhatsAppIcon />
            </IconButton>
            <Typography variant="body1" color="inherit" sx={{ ml: 1 }}>
              (+54) 2964 477098
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none", // No mostrar en mobile
                sm: "flex", // Mostrar en tablet y arriba
              },
              alignItems: "center",
              mb: { xs: 1, sm: 0 },
            }}
          >
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
            <Typography variant="body1" color="inherit" sx={{ ml: 1 }}>
              andresapataavile@gmail.com
            </Typography>
          </Box>

          {/* Botones de redes sociales */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="https://x.com/home?lang=es" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  startIcon={<XIcon />}
                  sx={{ color: "#e0e0e0" }}
                ></Button>
              </a>
            </Link>
            <Link href="https://www.facebook.com/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  startIcon={<FacebookIcon />}
                  sx={{ color: "#e0e0e0" }}
                ></Button>
              </a>
            </Link>
            <Link
              href="https://www.instagram.com/?hl=en"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  startIcon={<InstagramIcon />}
                  sx={{ color: "#e0e0e0" }}
                ></Button>
              </a>
            </Link>
            <Link
              href="https://www.tiktok.com/?lang=es"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  startIcon={<TikTok />}
                  sx={{ color: "#e0e0e0" }}
                ></Button>
              </a>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
