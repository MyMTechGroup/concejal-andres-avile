// import React from "react";
// import Slider from "react-slick";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   CardActionArea,
//   Button,
// } from "@mui/material";
// import Link from "next/link";

// const newsData = [
//   {
//     id: 1,
//     title:
//       "Los créditos UVA afectaron a cientos de familias, dijo Von der Thusen",
//     author: "Raúl Von der Thusen",
//     date: "30 abril 2024",
//     content:
//       "El Legislador del bloque de Somos Fueguinos, Dr. Raúl Von der Thusen, presentó un pedido de informe al Banco de Tierra del Fuego para conocer la situación de los fueguinos afectados por los créditos UVA...",
//     imageUrl: "/header-img/user-bg-transparent.png",
//     tags: ["Economía", "Política"],
//   },
//   {
//     id: 2,
//     title: "Recorrido de ANDRES PATA AVILE en empresas de Villa Constitución",
//     author: "Raúl Von der Thusen",
//     date: "30 abril 2024",
//     content:
//       "Ayer junto a ANDRÉS “PATA” AVILE estuvimos recorriendo empresas de Villa Constitución...",
//     imageUrl: "/noticias/noticia1.jpg",
//     tags: ["Economía", "Política"],
//   },
//   {
//     id: 3,
//     title: "Andrés Avile: “Vamos a seguir haciendo estas recorridas”",
//     author: "Federico Val",
//     date: "30 abril 2024",
//     content:
//       "Tras una maratónica jornada en la que recorrieron diversas instituciones locales...",
//     imageUrl: "/noticias/noticia2.jpg",
//     tags: ["Economía", "Política"],
//   },
//   {
//     id: 5,
//     title: "Avances en el desarrollo tecnológico local",
//     author: "José Martínez",
//     date: "2 mayo 2024",
//     content:
//       "La región ha visto avances notables en el desarrollo tecnológico gracias a nuevas inversiones...",
//     imageUrl: "/noticias/noticia4.jpg",
//     tags: ["Tecnología", "Economía"],
//   },
//   {
//     id: 6,
//     title:
//       "Villa Constitución – Andrés Avilé: “Necesitamos mucha ayuda del Gobierno Provincial”",
//     author: "Ana Pérez",
//     date: "9 marzo 2024",
//     content:
//       "El concejal del bloque Inspirar acompañó los dichos del intendente Jorge Berti y también pidió a los representantes de Unidos para Cambiar Santa Fe “sean parte de este proyecto de ciudad”...",
//     imageUrl: "/noticias/noticia5.jpg",
//     tags: ["Economía", "Trabajo"],
//   },
// ];

// export default function NewsPage () {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     customPaging: (i: number) => (
//       <div
//         style={{
//           width: "10px",
//           height: "10px",
//           borderRadius: "50%",
//           backgroundColor: "#fff",
//           margin: "0 5px",
//         }}
//       ></div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box id="noticias" sx={{ padding: "20px", background: "#1976d2" }}>
//       <Container maxWidth="xl">
//         <Typography
//           variant="h2"
//           sx={{ textAlign: "center", marginBottom: "20px", color: "#FFFFFF" }}
//         >
//           Últimas Noticias
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{ textAlign: "center", marginBottom: "40px", color: "#E0E0E0" }}
//         >
//           Mantente informado con las noticias más recientes de Villa
//           Constitución y sus alrededores
//         </Typography>
//         {/* <Slider {...settings}>
//           {newsData.map((newsItem) => (
//             <Box key={newsItem.id} sx={{ padding: "10px" }}>
//               <Link href={`/noticias-seccion/${newsItem.id}`} passHref>
//                 <Card
//                   sx={{
//                     height: "100%",
//                     width: { xs: "90%", md: "100%" },
//                     margin: { xs: "0 auto", md: "0" },
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image={newsItem.imageUrl}
//                       alt={newsItem.title}
//                       sx={{ objectFit: "cover" }}
//                     />
//                     <CardContent sx={{ height: "200px", overflow: "hidden" }}>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           gap: "10px",
//                           marginBottom: "10px",
//                         }}
//                       >
//                         {newsItem.tags.map((tag, index) => (
//                           <Typography
//                             key={index}
//                             variant="caption"
//                             sx={{
//                               backgroundColor: "#4E8CC9",
//                               padding: "5px",
//                               borderRadius: "4px",
//                               color: "#fff",
//                             }}
//                           >
//                             {tag}
//                           </Typography>
//                         ))}
//                       </Box>
//                       <Typography
//                         gutterBottom
//                         variant="h5"
//                         component="div"
//                         sx={{
//                           color: "#000",
//                           fontSize: { xs: "18px", md: "24px" },
//                         }}
//                       >
//                         {newsItem.title}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{
//                           fontSize: { xs: "14px", md: "16px" },
//                         }}
//                       >
//                         By {newsItem.author} | {newsItem.date}
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Link>
//             </Box>
//           ))}
//         </Slider> */}
//         <Box sx={{ textAlign: "center", marginTop: "20px" }}>
//           <Link href="/allNewsPage" passHref>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ marginTop: "20px" }}
//             >
//               Ver más noticias
//             </Button>
//           </Link>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  CardActionArea,
  Button,
} from "@mui/material";
import Link from "next/link";

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
    title: "Andrés Avile: “Vamos a seguir haciendo estas recorridas”",
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

export default function NewsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          margin: "0 5px",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="noticias" sx={{ padding: "20px", background: "#1976d2" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginBottom: "20px", color: "#FFFFFF" }}
        >
          Últimas Noticias
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginBottom: "40px", color: "#E0E0E0" }}
        >
          Mantente informado con las noticias más recientes de Villa
          Constitución y sus alrededores
        </Typography>
        <Slider {...settings}>
          {newsData.map((newsItem) => (
            <Box key={newsItem.id} sx={{ padding: "10px" }}>
              <Link href={`/noticias-seccion/${newsItem.id}`} passHref>
                <Card
                  sx={{
                    height: "100%",
                    width: { xs: "90%", md: "100%" },
                    margin: { xs: "0 auto", md: "0" },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={newsItem.imageUrl}
                      alt={newsItem.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ height: "200px", overflow: "hidden" }}>
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
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Box>
          ))}
        </Slider>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Link href="/allNewsPage" passHref>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "20px" }}
            >
              Ver más noticias
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
