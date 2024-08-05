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

const newsData = [
  {
    id: 1,
    title:
      "Los créditos UVA afectaron a cientos de familias, dijo Von der Thusen",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content:
      "El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA...",
    imageUrl: "/header-img/user-bg-transparent.png",
    tags: ["Economía", "Política"],
  },
  {
    id: 2,
    title: "Recorrido de ANDRES PATA AVILE en empresas de Villa Constitución",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content:
      "Ayer junto a ANDRÉS “PATA” AVILE estuvimos recorriendo empresas de Villa Constitución...",
    imageUrl: "/noticias/noticia1.jpg",
    tags: ["Economía", "Política"],
  },
  {
    id: 3,
    title: 'Andrés Avile: "Vamos a seguir haciendo estas recorridas"',
    author: "Federico Val",
    date: "30 abril 2024",
    content:
      "Tras una maratónica jornada en la que recorrieron diversas instituciones locales...",
    imageUrl: "/noticias/noticia2.jpg",
    tags: ["Economía", "Política"],
  },
  {
    id: 5,
    title: "Avances en el desarrollo tecnológico local",
    author: "José Martínez",
    date: "2 mayo 2024",
    content:
      "La región ha visto avances notables en el desarrollo tecnológico gracias a nuevas inversiones...",
    imageUrl: "/noticias/noticia4.jpg",
    tags: ["Tecnología", "Economía"],
  },
  {
    id: 6,
    title:
      "Villa Constitución – Andrés Avilé: “Necesitamos mucha ayuda del Gobierno Provincial”",
    author: "Ana Pérez",
    date: "9 marzo 2024",
    content:
      "El concejal del bloque Inspirar acompañó los dichos del intendente Jorge Berti y también pidió a los representantes de Unidos para Cambiar Santa Fe “sean parte de este proyecto de ciudad”...",
    imageUrl: "/noticias/noticia5.jpg",
    tags: ["Economía", "Trabajo"],
  },
];

const AllNewsPage: React.FC = () => {
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
            marginBottom: "40px",
            color: "#333",
          }}
        >
          Noticias y actualidad
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {newsData.map((newsItem) => (
              <Box key={newsItem.id} sx={{ marginBottom: "20px" }}>
                <Link
                  href={`/noticias-seccion/${newsItem.id}`}
                  underline="none"
                >
                  {isMobile ? (
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={newsItem.imageUrl}
                        alt={newsItem.title}
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
                          {newsItem.tags.map((tag, index) => (
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
                          {newsItem.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                          }}
                        >
                          By {newsItem.author} | {newsItem.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                            marginTop: "10px",
                          }}
                        >
                          {newsItem.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 200, objectFit: "cover" }}
                        image={newsItem.imageUrl}
                        alt={newsItem.title}
                      />
                      <CardContent sx={{ flex: 1 }}>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          {newsItem.tags.map((tag, index) => (
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
                          {newsItem.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                          }}
                        >
                          By {newsItem.author} | {newsItem.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                            marginTop: "10px",
                          }}
                        >
                          {newsItem.content}
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
                  {newsData.slice(0, 5).map((newsItem) => (
                    <Link
                      key={newsItem.id}
                      href={`/noticias-seccion/${newsItem.id}`}
                      underline="none"
                      sx={{ display: "block", marginBottom: "10px" }}
                    >
                      <Typography variant="body2" sx={{ color: "#4E8CC9" }}>
                        {newsItem.title}
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

export default AllNewsPage;
