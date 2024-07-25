import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Clock from '../componentes/clock/Clock'; // Asegúrate de importar el componente Clock

function TopBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return null;
  }

  return (
    <AppBar 
      position="fixed" 
      style={{ backgroundColor: '#0d47a1', top: 0, left: 0, right: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          sx={{ 
            flexDirection: isMobile ? 'column' : 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Clock /> {/* Aquí se agrega el componente Clock */}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: isMobile ? 1 : 0 }}>
            <IconButton color="inherit" edge="start">
              <WhatsAppIcon />
            </IconButton>
            <Typography variant="body1" color="inherit" sx={{ ml: 1 }}>
              (+54) 2964 477098
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: isMobile ? 1 : 0 }}>
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
            <Typography variant="body1" color="inherit" sx={{ ml: 1 }}>
              andresapataavile@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Twitter size={24} />
            <Facebook size={24} />
            <Instagram size={24} />
            <Linkedin size={24} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;

const Twitter: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    role="img"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <title>Twitter</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Facebook: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    role="img"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Facebook</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Instagram: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.06 0h9.92zm.02 2.14H7.02c-1.45 0-2.69.49-3.68 1.44a4.91 4.91 0 0 0-1.39 3.75v9.96c0 1.52.49 2.77 1.44 3.75 1 .97 2.2 1.42 3.7 1.42h9.88c1.45 0 2.69-.48 3.68-1.44.97-1 1.42-2.2 1.42-3.7V7.06c0-1.5-.48-2.7-1.44-3.68a4.9 4.9 0 0 0-3.75-1.39zm-5.01 10.62c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-1.5c-.84 0-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5 1.5.66 1.5 1.5-.66 1.5-1.5 1.5zm3.72-4.14c.69 0 1.25-.56 1.25-1.25S16.41 7.9 15.72 7.9c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25z" />
  </svg>
);

const Linkedin: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20 3.96c0-.85-.69-1.54-1.54-1.54h-15c-.85 0-1.54.69-1.54 1.54v15c0 .85.69 1.54 1.54 1.54h15c.85 0 1.54-.69 1.54-1.54v-15zM8.04 17h-2.16v-6.06h2.16v6.06zM6.12 9.86c-.72 0-1.38-.29-1.88-.79-.49-.49-.77-1.15-.77-1.84s.28-1.35.77-1.84c.5-.5 1.16-.79 1.88-.79s1.38.29 1.88.79c.49.49.77 1.15.77 1.84s-.28 1.35-.77 1.84c-.5.5-1.16.79-1.88.79zM17.92 17h-2.16v-3.43c0-.82-.02-1.56-.09-2.15-.05-.58-.14-1.03-.27-1.35-.14-.32-.35-.59-.6-.8-.26-.21-.56-.34-.89-.34-.46 0-.83.11-1.09.34-.27.23-.45.58-.55 1.04-.1.46-.15 1.04-.15 1.74v2.6h-2.16v-6.06h2.07v.84h.03c.29-.55.76-.97 1.42-1.27.66-.3 1.39-.45 2.19-.45 1.43 0 2.58.45 3.45 1.35.87.89 1.31 2.18 1.31 3.94v3.43z" />
  </svg>
);
