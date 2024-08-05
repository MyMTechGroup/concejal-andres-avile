"use client";
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [blink, setBlink] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      setBlink(prev => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return (
    <Typography variant="body1" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
      <AccessTimeIcon style={{ marginRight: '8px' }} />
      {hours}{blink ? ':' : ' '}{minutes}
    </Typography>
  );
};

export default Clock;
