"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopBar from "../topbar/page";
import NavBar from "../navbar/page";

const proyectos = [
  {
    id: 1,
    titulo: "Apoyo Integral a las Familias de Nuestra Comunidad",
    fecha: "22 junio, 2024",
    descripcion: "Proyectos presentados en la Legislatura",
    imagen: "proyectos/comunidad.jpg",
    tags: ["Familia", "Comunidad"],
    content:
      "Este proyecto busca brindar apoyo integral a las familias de nuestra comunidad, con programas de asistencia social, educativas y de salud.",
    autor: "Raúl Von der Thusen",
  },
  {
    id: 2,
    titulo: "Plan de Seguridad Ciudadana",
    fecha: "15 julio, 2024",
    descripcion: "Proyectos presentados en la Legislatura",
    imagen: "proyectos/seguridad.jpg",
    tags: ["Seguridad", "Ciudadanía"],
    content:
      "El Plan de Seguridad Ciudadana incluye medidas de vigilancia, patrullaje y campañas de concientización para mejorar la seguridad en la ciudad.",
    autor: "Raúl Von der Thusen",
  },
  {
    id: 3,
    titulo: "Reforma Económica para el Crecimiento Sostenible",
    fecha: "30 junio, 2024",
    descripcion: "Proyectos presentados en la Legislatura",
    imagen: "proyectos/economia-sustentable.jpg",
    tags: ["Economía", "Desarrollo"],
    content:
      "Este proyecto de reforma económica busca impulsar el crecimiento sostenible a través de políticas fiscales responsables y apoyo a emprendedores.",
    autor: "Federico Val",
  },
  {
    id: 4,
    titulo: "Mejoras en el Sistema de Salud Pública",
    fecha: "12 agosto, 2024",
    descripcion: "Proyectos presentados en la Legislatura",
    imagen: "proyectos/salud-publica.jpg",
    tags: ["Salud", "Bienestar"],
    content:
      "Nuestro objetivo es mejorar el sistema de salud pública con nuevas instalaciones, equipamientos modernos y mejor atención al paciente.",
    autor: "Ana Pérez",
  },
];


const AllProjectsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <TopBar />
      <NavBar />
      <Container maxWidth="xl" sx={{ marginTop: "80px", marginBottom: "50px" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Proyectos
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#666",
          }}
        >
          Conoce los proyectos que estamos llevando a cabo para mejorar la
          calidad de vida en nuestra comunidad.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {proyectos.map((project) => (
              <Box key={project.id} sx={{ marginBottom: "20px" }}>
                <Link
                  href={`/proyectos-seccion/${project.id}`}
                  underline="none"
                >
                  {isMobile ? (
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.imagen}
                        alt={project.titulo}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          {project.tags.map((tag, index) => (
                            <Typography
                              key={index}
                              variant="caption"
                              sx={{
                                backgroundColor: "#4E8CC9",
                                padding: "5px",
                                borderRadius: "4px",
                                color: "#fff",
                              }}
                            >
                              {tag}
                            </Typography>
                          ))}
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            color: "#000",
                            fontSize: { xs: "18px", md: "24px" },
                          }}
                        >
                          {project.titulo}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                          }}
                        >
                          By {project.autor} | {project.fecha}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                            marginTop: "10px",
                          }}
                        >
                          {project.descripcion}
                        </Typography>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 200, objectFit: "cover" }}
                        image={project.imagen}
                        alt={project.titulo}
                      />
                      <CardContent sx={{ flex: 1 }}>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          {project.tags.map((tag, index) => (
                            <Typography
                              key={index}
                              variant="caption"
                              sx={{
                                backgroundColor: "#4E8CC9",
                                padding: "5px",
                                borderRadius: "4px",
                                color: "#fff",
                              }}
                            >
                              {tag}
                            </Typography>
                          ))}
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            color: "#000",
                            fontSize: { xs: "18px", md: "24px" },
                          }}
                        >
                          {project.titulo}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                          }}
                        >
                          By {project.autor} | {project.fecha}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                            marginTop: "10px",
                          }}
                        >
                          {project.descripcion}
                        </Typography>
                      </CardContent>
                    </Card>
                  )}
                </Link>
              </Box>
            ))}
          </Grid>

          {!isMobile && (
            <Grid item xs={12} md={4}>
              <Box sx={{ position: "sticky", top: "80px" }}>
                <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#333", marginBottom: "10px" }}
                  >
                    Lo último
                  </Typography>
                  {proyectos.slice(0, 5).map((project) => (
                    <Link
                      key={project.id}
                      href={`/proyectos-seccion/${project.id}`}
                      underline="none"
                      sx={{ display: "block", marginBottom: "10px" }}
                    >
                      <Typography variant="body2" sx={{ color: "#4E8CC9" }}>
                        {project.titulo}
                      </Typography>
                    </Link>
                  ))}
                </Paper>
                <Paper sx={{ padding: "20px", backgroundColor: "#fff" }}>
                  <Typography variant="h6" sx={{ color: "#333" }}>
                    Publicidad
                  </Typography>
                  {/* Aquí puedes añadir contenido de publicidad o cualquier otra información */}
                </Paper>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProjectsPage;
