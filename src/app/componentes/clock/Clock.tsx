import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

// Componente para mostrar la hora en la zona horaria de Buenos Aires
const Clock: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    // Inicializa la fecha con la hora actual
    setDate(new Date());

    // Configura un intervalo para actualizar la hora cada segundo
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(timer);
  }, []);

  // Opciones para el formato de fecha y hora
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'America/Argentina/Buenos_Aires'
  };

  // Renderiza el componente solo si 'date' está disponible
  return (
    <Typography variant="body1" color="inherit">
      {date ? date.toLocaleDateString('es-AR', options) : 'Cargando...'}
    </Typography>
  );
};

export default Clock;
