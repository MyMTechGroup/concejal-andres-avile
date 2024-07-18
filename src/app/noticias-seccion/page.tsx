import React from "react";
import { Grid, Box, Typography, Paper, Avatar, Container } from "@mui/material";
import Link from "@mui/material/Link";

const newsData = [
  {
    id: 1,
    title:
      "Los créditos UVA afectaron a cientos de familias, dijo Von der Thusen",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content:
      "El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA. Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses indexados a la inflación, expresó. Sobre lo trabajado explicó “en primer lugar, se trata de un pedido de informe dirigido al Banco de Tierra del Fuego con el objetivo de conocer la situación financiera de los afectados, por ejemplo saber cuántos son los beneficiarios de estos créditos hipotecarios, montos adeudados en particular y en general, beneficiarios con mora, entre otros puntos . Es el primer paso para lograr una herramienta que beneficie a quienes tomaron estos créditos con intereses abusivos e indexados a la inflación”. Luego agregó “la otra iniciativa se trabajará con el informe recibido por el banco y también un Proyecto de Comunicación dirigido al Banco Central de la República Argentina, para solicitar la desindexación por todos los medios de los intereses de los UVA respecto a la inflación. Es decir, pedir que la suba de intereses no tengan como parámetro la inflación, sino por ejemplo el ingreso de cada uno de los afectados”. Asimismo comentó que “durante estas semanas en las que estuvimos trabajando, no solo nos reunimos con vecinos que tomaron este tipo de créditos, sino también con su representante legal, un abogado especializado el tema. Él nos mostró el trabajo que viene realizando y en base a eso estamos elaborando los proyectos. Es dable recordar que son más de 200 familias que tomaron estos crédito y hay más de 100 procesos judiciales esperando la resolución de fondo”.",
    imageUrl: "/header-img/user-bg-transparent.png",
    tags: ["Economía", "Política"],
  },
  {
    id: 2,
    title: "Recorrido de ANDRES PATA AVILE en empresas de Villa Constitución",
    author: "Raúl Von der Thusen",
    date: "30 abril 2024",
    content:
      "Ayer junto a ANDRÉS “PATA” AVILE estuvimos recorriendo empresas de Villa Constitución.Fuimos a “Timon” una empresa dedicada a comercialización de pescado y “SANIC” una metalúrgica de esta localidad. Siempre nuestro compromiso será apoyar e incentivar el desarrollo de las empresas.",
    imageUrl: "/noticias/noticia1.jpg",
    tags: ["Economía", "Política"],
  },
  {
    id: 3,
    title: "Andrés Avile: “Vamos a seguir haciendo estas recorridas”",
    author: "Federico Val",
    date: "30 abril 2024",
    content:
      "Tras una maratónica jornada en la que recorrieron diversas instituciones locales, el diputado provincial Juan Argañaraz y el candidato a concejal Andrés “Pata” Avile, junto a los integrantes de la lista local, dialogaron el martes pasado con medios locales sobre el trabajo que desarrollan en el marco de la campaña rumbo a las elecciones del 14 de noviembre, donde el contacto directo con la gente se complementa con el interés de este espacio por tomar las inquietudes y brindar soluciones concretas a las demandas que plantean los vecinos. \n\n“Vamos a seguir haciendo estas recorridas, vamos a seguir golpeando las puertas porque esto es lo que nos lleva al Frente Federal Vida y Familia a estar cerca de la gente y a presentar la mayoría de los proyectos, porque el vecino no solamente tiene el problema sino que muchas veces también tiene la solución, entonces trasladarla al plano político, al Ejecutivo y al Legislativo, es uno de los trabajos fundamentales que venimos haciendo”, dijo Avile.\n\nLa actividad junto a Argañaraz incluyó la visita al taller protegido de Codisco (Comisión Discapacitados Constitución), el Centro de Capacitación y Formación Laboral de la UOM, la Cooperativa de pescadores “Trabajadores del Río”, el Club Náutico Bartolomé Mitre y la Iglesia Bet-El, donde fueron recibidos por el Pastor Norberto Feith (foto).\n\nPor su parte, Argañaraz -quien además es candidato a senador nacional- expresó su respaldo a los postulantes locales. “Todo el apoyo para Andrés, pidiéndole a la gente que le den el voto de confianza a todo el equipo que está acompañando. A nosotros siempre nos gusta hablar de equipo. La verdad que este equipo es muy lindo, con referentes de distintas disciplinas”, manifestó el legislador.\n\n“Andrés Avile ya viene trabajando muchísimo sin ser concejal así que imaginen el trabajo excelente que hará como concejal, con un muy lindo equipo de trabajo”, agregó.",
    imageUrl: "/noticias/noticia2.jpg",
    tags: ["Economía", "Política"],
  },
  // Puedes añadir más objetos de noticias aquí
];

const NewsPage: React.FC = () => {
  return (
    <Box sx={{ padding: "20px", background: "#1976d2" }}>
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginBottom: "40px", color: "black" }}
        >
          Noticias
        </Typography>
        <Grid container spacing={2}>
          {newsData.map((newsItem) => (
            <Grid item xs={12} md={4} key={newsItem.id}>
              <Link href={`/noticias-seccion/${newsItem.id}`} underline="none">
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Avatar
                      variant="square"
                      src={newsItem.imageUrl}
                      alt={newsItem.title}
                      sx={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
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
                          }}
                        >
                          {tag}
                        </Typography>
                      ))}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ marginBottom: "10px", color: "black" }}
                    >
                      {newsItem.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginBottom: "20px", color: "black" }}
                    >
                      By {newsItem.author} | {newsItem.date}
                    </Typography>
                    {/* <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {newsItem.content}
                </Typography> */}
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsPage;
