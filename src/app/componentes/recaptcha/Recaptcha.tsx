import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface RecaptchaProps {
  onChange: (value: string | null) => void;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      onChange={onChange}
    />
  );
};

export default Recaptcha;
