"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Grid, Paper, Avatar, Container } from "@mui/material";
import styles from "./Noticia.module.css";
import TopBar from "@/app/topbar/page";
import NavBar from "@/app/navbar/page";

const newsData = [
  {
    id: 1,
    title:
      "Los créditos UVA afectaron a cientos de familias, dijo Von der Thusen",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content:
      'El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA. "Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses indexados a la inflación", expresó.',
    imageUrl: "/header-img/user-bg-transparent.png",
    tags: ["Economía", "Política"],
  },
  {
    id: 2,
    title: "Recorrido de ANDRES PATA AVILE en empresas de Villa Constitución",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content:
      'El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA. "Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses indexados a la inflación", expresó.',
    imageUrl: "/noticias/noticia1.jpg",
    tags: ["Economía", "Política"],
  },
  {
    id: 3,
    title: 'Andrés Avile: "Vamos a seguir haciendo estas recorridas"',
    author: "Federico Val",
    date: "30 abril 2024",
    content:
      'El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA. "Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses indexados a la inflación", expresó.',
    imageUrl: "/noticias/noticia2.jpg",
    tags: ["Economía", "Política"],
  },
];

const NewsDetailPage: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const newsItem = newsData.find((item) => item.id === parseInt(id as string));

  if (!newsItem) {
    return <p>Noticia no encontrada</p>;
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px", marginBottom: "50px", background: "grey" }}>
      <TopBar />
      <NavBar />
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "114px",
          color: "black",
        }}
      >
        Noticias y actualidad sobre el municipio de Villa Constitución
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper className={styles.newsItemPaper}>
            <Box className={styles.imageContainer}>
              <Avatar
                variant="square"
                src={newsItem.imageUrl}
                alt={newsItem.title}
                className={styles.newsImage}
              />
            </Box>
            <Box className={styles.newsContent}>
              <Box className={styles.tags}>
                {newsItem.tags.map((tag, index) => (
                  <Typography
                    key={index}
                    variant="caption"
                    className={styles.tag}
                  >
                    {tag}
                  </Typography>
                ))}
              </Box>
              <Typography
                variant="h5"
                component="h2"
                className={styles.newsTitle}
                sx={{ fontSize: "36px" }}
              >
                {newsItem.title}
              </Typography>
              <Typography variant="body2" className={styles.newsAuthorDate}>
                By {newsItem.author} | {newsItem.date}
              </Typography>
              <Typography
                variant="body1"
                className={styles.newsBody}
                sx={{ fontSize: "20px" }}
              >
                {newsItem.content}
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={styles.adSection}>
            <Typography variant="h6" sx={{ color: "black" }}>
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
