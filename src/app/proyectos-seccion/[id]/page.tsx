"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import TopBar from "../../topbar/page";
import NavBar from "../../navbar/page";

const proyectos = [
  {
    id: 1,
    titulo: "Apoyo Integral a las Familias de Nuestra Comunidad",
    fecha: "22 junio, 2024",
    descripcion: "Proyectos presentados en la Legislatura",
    imagen: "https://unsplash.com/photos/QAB-WJcbgJk/download?force=true&w=640",
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
    imagen: "https://unsplash.com/photos/5QgIuuBxKwM/download?force=true&w=640",
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
    imagen: "https://unsplash.com/photos/xQnD-_l9p9U/download?force=true&w=640",
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
    imagen: "https://unsplash.com/photos/Z7w3wcK2AIk/download?force=true&w=640",
    tags: ["Salud", "Bienestar"],
    content:
      "Nuestro objetivo es mejorar el sistema de salud pública con nuevas instalaciones, equipamientos modernos y mejor atención al paciente.",
    autor: "Ana Pérez",
  },
];

const ProjectPage: React.FC = () => {
  const pathname = usePathname();
  const projectId = parseInt(pathname.split("/").pop() as string, 10);
  const project = proyectos.find((p) => p.id === projectId);

  if (!project) {
    return <Typography>No se encontró el proyecto</Typography>;
  }

  return (
    <Box>
      <TopBar />
      <NavBar />
      <Container maxWidth="md" sx={{ marginTop: "80px", marginBottom: "50px" }}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={project.imagen}
            alt={project.titulo}
          />
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              {project.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              By {project.autor} | {project.fecha}
            </Typography>
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
            <Typography variant="body1" paragraph>
              {project.content}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ProjectPage;
