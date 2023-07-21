import React, { MouseEventHandler } from 'react';
import Button from './button';

interface ContactButtonProps {
  image?: string;
  onClick: MouseEventHandler;
}

export default function ContactButton({ image, onClick }: ContactButtonProps) {
  return image ? (
    <button onClick={onClick}>
      <img src="whatsapp.svg" alt="Whatsapp Logo" />
    </button>
  ) : (
    <Button variant="primary" onClick={onClick}>
      Contactar al vendedor
    </Button>
  );
}
