import React, { MouseEventHandler } from 'react';
import Button from './button';
import styles from './button.module.css';
import whLogo from '../../../public/whatsapp.svg';
import Image from 'next/image';

interface ContactButtonProps {
  isWhatsapp?: boolean;
  onClick: MouseEventHandler;
}

export default function ContactButton({
  onClick,
  isWhatsapp = false,
}: ContactButtonProps) {
  return isWhatsapp ? (
    <button onClick={onClick} className={styles['wh-button']}>
      <Image src={whLogo} alt="Whatsapp Logo" />
    </button>
  ) : (
    <Button variant="primary" onClick={onClick}>
      Contactar al vendedor
    </Button>
  );
}
