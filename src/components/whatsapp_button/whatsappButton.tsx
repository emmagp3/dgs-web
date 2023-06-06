import React, { MouseEventHandler } from 'react';

interface WhatsAppButton {
  image: React.ReactNode | undefined;
  onClick: MouseEventHandler;
}

export default function WhatsAppButton({
  image = undefined,
  onClick,
}: WhatsAppButton) {
  return (
    <button onClick={onClick}>
      {image ? <image /> : 'Contactar al vendedor'}
    </button>
  );
}
