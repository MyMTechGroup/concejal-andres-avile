import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            flexDirection: isMobile ? 'column' : 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}
        >
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
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.06 0h9.92zm.02 2.14H7.02c-1.45 0-2.69.49-3.68 1.44a4.91 4.91 0 0 0-1.39 3.75v9.96c0 1.52.49 2.77 1.44 3.75 1 .97 2.2 1.42 3.7 1.42h9.88c1.45 0 2.69-.48 3.68-1.44.97-1 1.42-2.2 1.42-3.7V7.06c0-1.5-.48-2.7-1.44-3.68a4.9 4.9 0 0 0-3.75-1.39zm-5.01 4.08c1.73 0 3.2.6 4.42 1.82A5.96 5.96 0 0 1 18.3 12a6.04 6.04 0 0 1-6.28 6.28 6.04 6.04 0 0 1-6.27-6.28 6.04 6.04 0 0 1 6.28-6.27zm0 2.14a3.84 3.84 0 0 0-2.88 1.23 3.84 3.84 0 0 0-1.23 2.88c0 1.1.41 2.03 1.23 2.87a3.84 3.84 0 0 0 2.88 1.23c1.1 0 2.03-.41 2.87-1.23.84-.84 1.23-1.76 1.23-2.87a3.84 3.84 0 0 0-1.23-2.88 3.84 3.84 0 0 0-2.87-1.23zm5.46-.68c.38 0 .71.14.98.41.28.27.41.6.41.98a1.33 1.33 0 0 1-1.39 1.39 1.33 1.33 0 0 1-.97-.4 1.33 1.33 0 0 1-.4-.98c0-.4.14-.73.4-1 .26-.28.59-.41.97-.41z" />
  </svg>
);

const Linkedin: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    role="img"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.137 1.446-2.137 2.94v5.666H9.354V9h3.414v1.561h.049c.477-.9 1.637-1.848 3.367-1.848 3.597 0 4.261 2.367 4.261 5.448v6.291zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.072s.926-2.072 2.07-2.072c1.143 0 2.072.928 2.072 2.072s-.929 2.072-2.072 2.072zm1.772 13.019H3.563V9h3.546v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.723v20.555C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.278V1.723C24 .774 23.2 0 22.225 0z" />
  </svg>
);
