"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import ContactForm from "../componentes/form/contactForm";
import { keyframes } from "@mui/system";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Contacto: React.FC = () => {
  const [inView, setInView] = useState(false);
  const contactoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = contactoRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Box
      id="contacto"
      ref={contactoRef}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `grey`,
        minHeight: "60vh",
        padding: "20px 0",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              animation: inView
                ? `${slideInLeft} 1s ease-in-out forwards`
                : "none",
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{ fontWeight: "bold" }}
              color="black"
            >
              CONTACTAME
            </Typography>
            <Typography
              color="white"
              variant="body1"
              component="p"
              sx={{ marginTop: "20px" }}
            >
              Hoy tengo la responsabilidad de representar a los villenses y lo
              hago con mucho gusto y compromiso.
              <br /> Quiero realizar mis aportes para resolver los problemas que
              tenemos y tratar de lograr una mejor calidad de vida para todos.
              <br /> Estoy para escucharte y que tu inquietud se transforme en
              una iniciativa que nos ayude a mejorar nuestra ciudad.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              animation: inView
                ? `${slideInRight} 1s ease-in-out forwards`
                : "none",
            }}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacto;
