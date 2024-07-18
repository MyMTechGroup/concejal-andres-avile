// src/components/Footer.tsx

'use client';
import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer">
      <Container>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ my: 2 }}
        >
          Copyright © 2024. Made with{' '}
          <span style={{ color: '#4888CD' }}>♥</span> by {'M&M Tech Group'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

//iconos de redes por si son necesarios



