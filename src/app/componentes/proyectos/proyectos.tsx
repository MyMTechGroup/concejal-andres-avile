import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const proyectos = [
  {
    titulo: "Los afectados por los UVA necesitan una solución definitiva",
    fecha: "22 junio, 2024",
    descripcion: "Proyectos presentados en la Legislatura",
    imagen: "/path-to-image1.jpg",
  },
  {
    titulo: "Gran Premio de la Hermandad: Identidad Fueguina",
    fecha: "22 junio, 2024",
    descripcion: "Proyectos presentados en la Legislatura",
    imagen: "/path-to-image2.jpg",
  },
  {
    titulo: "La investigación científica debe ser reconocida",
    fecha: "6 junio, 2024",
    descripcion: "Proyectos presentados en la Legislatura",
    imagen: "/path-to-image3.jpg",
  },
];

const ProyectosCarrusel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      id="proyectos"
      sx={{
        backgroundColor: "#222533",
        padding: "20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        MIS ÚLTIMOS PROYECTOS
      </Typography>
      <Slider {...settings}>
        {proyectos.map((proyecto, index) => (
          <Box key={index} sx={{ padding: "0 10px", boxSizing: "border-box" }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                height: { xs: "400px", md: "300px" }, // Ajusta la altura en modo móvil y escritorio
              }}
            >
              <Image
                src={proyecto.imagen}
                alt={proyecto.titulo}
                width={500}
                height={300}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ajusta la imagen para cubrir todo el contenedor
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                <Typography variant="h6" component="h3" gutterBottom>
                  {proyecto.titulo}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {proyecto.fecha} | {proyecto.descripcion}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
        Ver Todos
      </Button>
    </Box>
  );
};

export default ProyectosCarrusel;
