"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Grid, Paper, Avatar, Container, Button, Link } from "@mui/material";
import styles from "./Noticia.module.css"; // Asegúrate de que este archivo exista y esté configurado correctamente
import TopBar from "@/app/topbar/page";
import NavBar from "@/app/navbar/page";

// Datos de noticias actualizados con 6 noticias
const newsData = [
  {
    id: 1,
    title: "Los créditos UVA afectaron a cientos de familias, dijo Von der Thusen",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content: 'El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA. "Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses indexados a la inflación", expresó.',
    imageUrl: "/header-img/user-bg-transparent.png",
    tags: ["Economía", "Política"],
  },
  {
    id: 2,
    title: "Recorrido de ANDRES PATA AVILE en empresas de Villa Constitución",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content: 'El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA. "Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses indexados a la inflación", expresó.',
    imageUrl: "/noticias/noticia1.jpg",
    tags: ["Economía", "Política"],
  },
  {
    id: 3,
    title: 'Andrés Avile: "Vamos a seguir haciendo estas recorridas"',
    author: "Federico Val",
    date: "30 abril 2024",
    content: 'El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA. "Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses indexados a la inflación", expresó.',
    imageUrl: "/noticias/noticia2.jpg",
    tags: ["Economía", "Política"],
  },
  {
    id: 4,
    title: "Nueva Ley de Educación en discusión",
    author: "María López",
    date: "1 mayo 2024",
    content:
      "El Congreso ha comenzado a debatir una nueva ley de educación que promete cambios significativos...",
    imageUrl: "/noticias/noticia3.jpg",
    tags: ["Educación", "Política"],
  },
  {
    id: 5,
    title: "Jura de los nuevos concejales electos",
    author: "Municipio Villa Constiticion",
    date: "8 diciembre 2023",
    content:
      "El intendente municipal, Prof. Jorge Berti, asistió al acto de toma de posesión de los concejales elegidos en las elecciones generales.",
    imageUrl: "/noticias/noticia4.jpg",
    tags: ["Tecnología", "Economía"],
    linkNoticia: "http://villaconstitucion.gob.ar/el-intendente-jorge-berti-asistio-a-la-jura-de-los-nuevos-concejales-electos/"
  },
  {
    id: 6,
    title: "Villa Constitución – Andrés Avilé: “Necesitamos mucha ayuda del Gobierno Provincial”",
    author: "Diario el Norte",
    date: "9 marzo 2024",
    content:"El concejal del bloque Inspirar acompañó los dichos del intendente Jorge Berti y también pidió a los representantes de Unidos para Cambiar Santa Fe “sean parte de este proyecto de ciudad”",
    imageUrl: "/noticias/noticia5.jpg",
    tags: ["Economía", "Trabajo"],
    linkNoticia: "https://www.diarioelnorte.com.ar/villa-constitucion-andres-avile-necesitamos-mucha-ayuda-del-gobierno-provincial/"
    
  },
  // Añadir más noticias si es necesario
];

const NewsDetailPage: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const newsItem = newsData.find((item) => item.id === parseInt(id as string));


  if (!newsItem) {
    return <p>Noticia no encontrada</p>;
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px", marginBottom: "50px", background: "#f4f4f4" }}>
      <TopBar />
      <NavBar />
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "114px",
          color: "#333",
        }}
      >
        Noticias y actualidad
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper className={styles.newsItemPaper} sx={{ padding: "20px", backgroundColor: "#fff" }}>
            <Box className={styles.imageContainer}>
              <Avatar
                variant="square"
                src={newsItem.imageUrl}
                alt={newsItem.title}
                sx={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
              />
            </Box>
            <Box className={styles.newsContent}>
              <Box className={styles.tags}>
                {newsItem.tags.map((tag, index) => (
                  <Typography
                    key={index}
                    variant="caption"
                    sx={{
                      backgroundColor: "#4E8CC9",
                      padding: "5px",
                      borderRadius: "4px",
                      color: "#fff",
                      marginRight: "5px",
                    }}
                  >
                    {tag}
                  </Typography>
                ))}
              </Box>
              <Typography
                variant="h5"
                component="h2"
                sx={{ marginBottom: "10px", fontSize: "36px", color: "#333" }}
              >
                {newsItem.title}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "20px", color: "#666" }}>
                By {newsItem.author} | {newsItem.date}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "20px", lineHeight: "1.6", color: "#333" }}
              >
                {newsItem.content}
              </Typography>
              <Link href={newsItem.linkNoticia} underline="none"> Ver mas...</Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: "20px", backgroundColor: "#fff" }}>
            <Typography variant="h6" sx={{ color: "#333" }}>
              Publicidad
            </Typography>
            {/* Aquí puedes añadir contenido de publicidad o cualquier otra información */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsDetailPage;
