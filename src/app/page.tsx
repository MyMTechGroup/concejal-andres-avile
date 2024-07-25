"use client";
import Header from "./header/page";
import TopBar from "./topbar/page";
import NavBar from "./navbar/page";
import Contacto from "./contacto/page";
import SocialMedia from "./componentes/redes/socialMedia";
import ThankYou from "./componentes/agradecimiento/agradecimiento";
import NewsPage from "./noticias-seccion/page";
import { Box, Fab, Tooltip } from "@mui/material";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "./componentes/footer/footer";


export default function Home() {
  const handleWhatsAppClick = () => {
    // Reemplaza '123456789' con el número de teléfono que deseas usar
    window.open("https://wa.me/123456789", "_blank");
  };

  return (
    <main>
      <TopBar />
      <NavBar />
      <Header />
      <SocialMedia />
      <NewsPage />
      <ThankYou />
      <Contacto />
      <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
        <Tooltip title="Comunicate con nosotros" arrow>
          <Fab
            color="primary"
            aria-label="WhatsApp"
            onClick={handleWhatsAppClick}
            sx={{
              backgroundColor: "#25D366",
              "&:hover": {
                backgroundColor: "#1DA851",
              },
              color: "white",
            }}
          >
            <WhatsAppIcon />
          </Fab>
        </Tooltip>
      </Box>
      <Footer />
    </main>
  );
}
