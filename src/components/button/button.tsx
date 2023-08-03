import { MouseEventHandler } from 'react';
import styles from './button.module.css';

type Variant = 'primary' | 'secondary' | 'tiertary';
type Type = 'button' | 'reset' | 'submit';

interface ButtonProps {
  variant?: Variant;
  type?: Type;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
  children,
}: ButtonProps) {
  console.log(styles);
  return (
    <button
      type={type}
      className={`${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
