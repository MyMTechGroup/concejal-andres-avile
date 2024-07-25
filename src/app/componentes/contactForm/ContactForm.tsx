// components/form/ContactForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm: React.FC = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleRecaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí deberías validar captchaValue en el backend
    const response = await fetch('/api/verify-captcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: captchaValue }),
    });

    const data = await response.json();

    if (data.message === 'reCAPTCHA verificado exitosamente.') {
      // Aquí manejarás el envío del formulario
      console.log('Form data:', formData);
    } else {
      console.error('Error de verificación de reCAPTCHA');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre"
            name="name"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Correo"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mensaje"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleRecaptchaChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
