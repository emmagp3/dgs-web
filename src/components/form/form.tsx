import useForm from '@/hooks/useForm';
import { useRouter } from 'next/router';
import React, { FormEvent } from 'react';
import styles from './form.module.css';
import Button from '../button/button';

export default function Form() {
  const { onChangeFields, formState } = useForm();
  const router = useRouter();

  const { firstName, lastName, email, phone, message } = formState;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const mailStatement = `
      mailto:mail@mail.com?subject=Me interesa...
      &body=Hola, me llamo ${firstName} ${lastName}:
      %0A%0A${message}.
      %0A%0A%0AMi correo es: ${email}
    `;
    router.push(mailStatement);
  };

  return (
    <div id="contacto" className={`container ${styles.form}`}>
      <h3 className="text-center">
        ¡Solicita información especializada sobre nuestros productos!
      </h3>
      <form onSubmit={onSubmit} className={`container ${styles.fields}`}>
        <div className={styles.field}>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            name="firstName"
            placeholder="Juan"
            required
            value={firstName}
            onChange={onChangeFields}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="apellido">Apellido: </label>
          <input
            type="text"
            id="apellido"
            name="lastName"
            placeholder="Casas"
            required
            value={lastName}
            onChange={onChangeFields}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Correo electrónico: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tuemail@email.com"
            required
            value={email}
            onChange={onChangeFields}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone_number">Teléfono: </label>
          <input
            type="tel"
            id="phone_number"
            name="phone"
            placeholder="55-22-44-55-00"
            required
            value={phone}
            onChange={onChangeFields}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribre un mensaje..."
            defaultValue={message}
            onChange={onChangeFields}
          ></textarea>
        </div>

        <Button type="submit" variant="secondary">
          Enviar
        </Button>
      </form>
    </div>
  );
}
