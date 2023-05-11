import React from 'react';
import useForm from './Hooks/useForm';

import Input from './Input';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (cep.validate() && email.validate() && nome.validate())
      console.log('Enviado');
    else
      console.log('Não enviado');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id='nome' label='Nome' type='text' {...nome} />
      <Input id='sobrenome' label='Sobrenome' type='text' {...sobrenome} />
      <Input id='email' label='E-mail' type='email' {...email} />
      <Input id='cep' label='CEP' type='text' placeholder='00000-000' {...cep} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
