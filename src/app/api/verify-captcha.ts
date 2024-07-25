// pages/api/verify-captcha.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const validateRecaptcha = async (token: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: secretKey,
        response: token,
      },
    });

    return response.data.success;
  } catch (error) {
    console.error('Error validating reCAPTCHA:', error);
    return false;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token de reCAPTCHA es requerido.' });
  }

  const isValid = await validateRecaptcha(token);

  if (isValid) {
    res.status(200).json({ message: 'reCAPTCHA verificado exitosamente.' });
  } else {
    res.status(400).json({ message: 'Error de verificación de reCAPTCHA.' });
  }
}
