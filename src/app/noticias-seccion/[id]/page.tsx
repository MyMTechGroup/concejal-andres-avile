"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Container,
  Link,
} from "@mui/material";
import TopBar from "@/app/topbar/page";
import NavBar from "@/app/navbar/page";
import styles from "./Noticia.module.css"; // Asegúrate de que este archivo exista y esté configurado correctamente

const newsData = [
  {
    id: 1,
    title:
      "Los créditos UVA afectaron a cientos de familias, dijo Von der Thusen",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content: [
      {
        paragraph:
          'El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA. "Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses indexados a la inflación", expresó.',
      },
      {
        paragraph:
          "Preparado para llevar adelante el periodo legislativo y ya con varios proyectos encaminados, el edil se siente confiado en que el Cuerpo podrá lograr que este año se visibilice aún más el trabajo cotidiano, “podemos hacer que la institución crezca un poco más”, sostuvo.",
      },
      {
        paragraph:
          "En ese contexto se mostró entusiasmado por cómo se trabaja cerca del vecino, “hay mucha gente que se está acercando a buscar a los concejales, algo que por ahí no pasaba en años anteriores”.",
      },
    ],
    imageUrl: "/header-img/user-bg-transparent.png",
    tags: ["Economía", "Política"],
  },
  {
    id: 2,
    title: "Recorrido de ANDRES PATA AVILE en empresas de Villa Constitución",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content: [
      {
        paragraph:
          "Durante su recorrido por Villa Constitución, ANDRES PATA AVILE destacó la importancia de fortalecer las relaciones con las empresas locales.",
      },
      {
        paragraph:
          "Se reunió con varios empresarios para discutir posibles colaboraciones que beneficien a la comunidad.",
      },
      {
        paragraph:
          "El edil mencionó que estos encuentros son fundamentales para el desarrollo económico de la región.",
      },
    ],
    imageUrl: "/noticias/noticia1.jpg",
    tags: ["Economía", "Política"],
  },
  {
    id: 3,
    title: 'Andrés Avile: "Vamos a seguir haciendo estas recorridas"',
    author: "Federico Val",
    date: "30 abril 2024",
    content: [
      {
        paragraph:
          "Tras una maratónica jornada en la que recorrieron diversas instituciones locales, Andrés Avile reafirmó su compromiso con la comunidad.",
      },
      {
        paragraph:
          "Destacó la importancia de estar en contacto directo con los ciudadanos para conocer sus necesidades y preocupaciones.",
      },
      {
        paragraph:
          "Avile prometió que estas recorridas continuarán a lo largo del año para asegurar una gestión transparente y cercana.",
      },
    ],
    imageUrl: "/noticias/noticia2.jpg",
    tags: ["Economía", "Política"],
  },
  {
    id: 4,
    title: "Nueva Ley de Educación en discusión",
    author: "María López",
    date: "1 mayo 2024",
    content: [
      {
        paragraph:
          "El Congreso ha comenzado a debatir una nueva ley de educación que promete cambios significativos.",
      },
      {
        paragraph:
          "Los legisladores están analizando diversas propuestas que buscan mejorar la calidad educativa en todo el país.",
      },
      {
        paragraph:
          "Se espera que la ley sea aprobada en las próximas semanas y que su implementación comience a partir del próximo año.",
      },
    ],
    imageUrl: "/noticias/noticia3.jpg",
    tags: ["Educación", "Política"],
  },
  {
    id: 5,
    title: "Jura de los nuevos concejales electos",
    author: "Municipio Villa Constitucion",
    date: "8 diciembre 2023",
    content: [
      {
        paragraph:
          "El intendente municipal, Prof. Jorge Berti, asistió al acto de toma de posesión de los concejales elegidos en las elecciones generales.",
      },
      {
        paragraph:
          "Durante la ceremonia, los nuevos concejales juraron desempeñar sus funciones con honestidad y dedicación.",
      },
      {
        paragraph:
          "El evento contó con la presencia de numerosas autoridades locales y familiares de los nuevos ediles.",
      },
    ],
    imageUrl: "/noticias/noticia4.jpg",
    tags: ["Tecnología", "Economía"],
    linkNoticia:
      "http://villaconstitucion.gob.ar/el-intendente-jorge-berti-asistio-a-la-jura-de-los-nuevos-concejales-electos/",
  },
  {
    id: 6,
    title:
      "Villa Constitución – Andrés Avilé: “Necesitamos mucha ayuda del Gobierno Provincial”",
    author: "Diario el Norte",
    date: "9 marzo 2024",
    content: [
      {
        paragraph:
          "El concejal del bloque Inspirar acompañó los dichos del intendente Jorge Berti y también pidió a los representantes de Unidos para Cambiar Santa Fe “sean parte de este proyecto de ciudad”.",
      },
      {
        paragraph:
          "Avilé señaló que la colaboración del gobierno provincial es crucial para llevar adelante los proyectos planteados.",
      },
      {
        paragraph:
          "Además, destacó la importancia de la participación ciudadana en el desarrollo de la comunidad.",
      },
    ],
    imageUrl: "/noticias/noticia5.jpg",
    tags: ["Economía", "Trabajo"],
    linkNoticia:
      "https://www.diarioelnorte.com.ar/villa-constitucion-andres-avile-necesitamos-mucha-ayuda-del-gobierno-provincial/",
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
    <Box>
      <TopBar />
      <NavBar />
      <Box
        maxWidth="xl"
        sx={{ marginTop: "80px", marginBottom: "50px", margin: "auto" }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            textAlign: "left",
            marginBottom: "40px",
            marginTop: "114px",
            color: "#333",
            display: { xs: "none", sm: "block" }, // Ocultar en xs, mostrar en sm y superiores
          }}
        >
          Conoce toda la actualidad de Villa Constitución
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper
              // className={styles.newsItemPaper}
              sx={{ padding: "20px", backgroundColor: "#fff" }}
            >
              {/* <Box
                sx={{
                  width: "100%",
                  height: "400px", // Establecer una altura fija para el contenedor
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  variant="square"
                  src={newsItem.imageUrl}
                  alt={newsItem.title}
                  sx={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "400px",
                    objectFit: "contain",
                  }}
                />
              </Box> */}

              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  overflow: "hidden",
                  position: "relative", // Necesario para el componente Image de Next.js
                }}
              >
                <Image
                  src={newsItem.imageUrl}
                  alt={newsItem.title}
                  width={1000}
                  height={800}
                  // layout="fill" // Rellena el contenedor
                  // sx={ { objectFit: "contain" } }
                  objectFit="cover" // Ajusta la imagen para cubrir el contenedor sin distorsión
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
                  sx={{
                    marginBottom: "10px",
                    fontSize: { xs: "30px", sm: "36px" }, // Ajuste del tamaño de fuente en dispositivos móviles
                    color: "#333",
                  }}
                >
                  {newsItem.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: "20px", color: "#666" }}
                >
                  By {newsItem.author} | {newsItem.date}
                </Typography>
                {newsItem.content.map((parrafo, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    component="p"
                    sx={{
                      fontSize: "18px", // Ajuste del tamaño de fuente del contenido
                      lineHeight: "1.6",
                      color: "#333",
                      marginBottom: "10px",
                    }}
                  >
                    {parrafo.paragraph}
                  </Typography>
                ))}
                <Link
                  href={newsItem.linkNoticia}
                  underline="none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más...
                </Link>
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
      </Box>
    </Box>
  );
};

export default NewsDetailPage;
