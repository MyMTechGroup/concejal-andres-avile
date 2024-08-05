// src/components/Footer.tsx

'use client';
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Link from 'next/link';

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
          <span style={{ color: '#4888CD' }}>♥</span> by <Link href='https://altiora-software.vercel.app'> {'Altiora Software'} </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

//iconos de redes por si son necesarios



