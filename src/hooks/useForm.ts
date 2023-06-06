import { ChangeEvent, EventHandler, FormEvent, useState } from 'react';

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function useForm() {
  const [formState, setFormState] = useState<FormFields>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const onChangeFields = ({ target }: any) => {
    const { name, value } = target;

    console.log({ name, value });

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    onChangeFields,
    formState,
  };
}
