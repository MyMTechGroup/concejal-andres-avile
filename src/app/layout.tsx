// src/layouts/RootLayout.tsx

import { Inter } from "next/font/google";
// import Head from "next/head";
import ThemeProvider from "./ThemeProvider";
import "./globals.css";

// Importa la fuente Inter
const inter = Inter({ subsets: ["latin"] });


// Definir los metadatos usando la Metadata API
export const metadata = {
  title: 'Concejal Andres Pata Avila',
  description: 'Últimas noticias y actualidades de Villa Constitución',
};

// Componente funcional del layout principal
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Proveedor de tema para aplicar estilos */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
