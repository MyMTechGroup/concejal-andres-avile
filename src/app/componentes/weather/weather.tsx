import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Weather: React.FC = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<JSX.Element | null>(null);
  const [showCity, setShowCity] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Villa%20Constitucion&units=metric&appid=ea43ebeab5aa451a7a38012b73f5f3d5`
        );

        const weather = response.data.weather[0].main;
        const temp = Math.round(response.data.main.temp);

        setTemperature(temp);

        switch (weather) {
          case 'Clear':
            setWeatherIcon(<WbSunnyIcon />);
            break;
          case 'Clouds':
            setWeatherIcon(<CloudIcon />);
            break;
          case 'Rain':
            setWeatherIcon(<GrainIcon />);
            break;
          case 'Snow':
            setWeatherIcon(<AcUnitIcon />);
            break;
          default:
            setWeatherIcon(<CloudIcon />);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      position="relative"
      onMouseEnter={() => setShowCity(true)}
      onMouseLeave={() => setShowCity(false)}
    >
      {weatherIcon}
      <Typography variant="body1" color="inherit" sx={{ ml: 1 }}>
        {temperature !== null ? `${temperature}°C` : 'Cargando...'}
      </Typography>
      {showCity && (
        <Typography
          variant="body2"
          color="inherit"
          sx={{
            position: 'absolute',
            top: 0,
            left: '100%',
            whiteSpace: 'nowrap',
            ml: 1,
            backgroundColor: '#0d47a1',
            padding: '2px 4px',
            borderRadius: '4px',
          }}
        >
          Villa Constitución
        </Typography>
      )}
    </Box>
  );
};

export default Weather;
