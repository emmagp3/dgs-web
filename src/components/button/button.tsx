import { MouseEventHandler } from 'react';
import styles from './button.module.css';

type Variant = 'primary' | 'secondary' | 'tiertary';
type Type = 'button' | 'reset' | 'submit';

interface ButtonProps {
  variant?: Variant;
  type?: Type;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  type = 'button',
  onClick,
  children,
}: ButtonProps) {
  console.log(styles);
  return (
    <button type={type} className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
}
