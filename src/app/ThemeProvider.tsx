// src/app/ThemeProvider.tsx
'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
    text: {
      primary: '#000000', // Establecer el color de la fuente principal a blanco
    },
    background: {
      default: '#000000', // Opcional: Establecer el fondo por defecto a negro para contraste
    },
  },
  typography: {
    fontSize: 14,
    allVariants: {
      color: '#ffffff', // Asegurarse de que todos los tipos de texto sean blancos
    },
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
