// src/layouts/RootLayout.tsx

import { Inter } from "next/font/google";
import Head from "next/head";
import ThemeProvider from "./ThemeProvider";
import "./globals.css";

// Importa la fuente Inter
const inter = Inter({ subsets: ["latin"] });

// Componente funcional del layout principal
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es">
      <Head>
        {/* Establece los metadatos en el head */}
        <title>Centro Medico Jujuy</title>
        <meta
          name="description"
          content="Web app del centro médico de Jujuy"
        />
        {/* Incluye la fuente Inter */}
        <style>{inter.css}</style>
        {/* Otros metadatos que puedas necesitar */}
      </Head>
      <body className={inter.className}>
        {/* Proveedor de tema para aplicar estilos */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
