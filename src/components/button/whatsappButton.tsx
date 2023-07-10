import React, { MouseEventHandler } from 'react';

interface ContactButtonProps {
  image?: string;
  onClick: MouseEventHandler;
}

export default function ContactButton({
  image = undefined,
  onClick,
}: ContactButtonProps) {
  return (
    <button onClick={onClick}>
      {image ? (
        <img src={image} alt="Whatsapp Icon" />
      ) : (
        'Contactar al vendedor'
      )}
    </button>
  );
}
