import { useState } from 'react';
import { fetcher } from '@services/fetchers';
import { phoneMask } from './masks';
import { FormStyle } from './style';

const Form = () => {
  const [value, setValue] = useState('');
  function submit(values: any) {
    // const dataCvCRM = {
    //   nome: values.target.name.value,
    //   email: values.target.email.value,
    //   telefone: values.target.tel.value,
    //   idempreendimento: 3,
    //   permitir_alteracao: true,
    //   origem: 'SI',
    //   midia: 'Google LP',
    //   conversao: 'CoreAg',
    // };
    return fetch('https://julioejulio.cvcrm.com.br/api/cvio/lead', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: 'ba78359d1bc51e33c0dc0854b1f253d289bc5239',
      },
      body: JSON.stringify({
        email: values.target.email.value,
        telefone: values.target.tel.value,
        nome: values.target.name.value,
        origem: 'SI',
        idempreendimento: 3,
        midia: 'Google Lp',
        conversao: 'CoreAg',
        permitir_alteracao: true,
      }),
    })
      .then((res) => {
        alert(
          'Recebemos seu formulário.\n\n Entraremos em contato com você em breve',
        );
        return res;
      })
      .catch((err) => {
        alert(
          'Ops... Houve um erro ao enviar seu formulário.\n\n Por favor tente novamente mais tarde.',
        );
      });
  }
  return (
    <FormStyle id="form">
      <div className="header">
        <h1>Aproveite as condições especiais</h1>
      </div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          submit(ev);
        }}
      >
        <label htmlFor="name">
          <strong>Nome</strong>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome Sobrenome"
          />
        </label>
        <label htmlFor="email">
          <strong>Email</strong>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="nome@email.com.br"
          />
        </label>
        <label htmlFor="tel">
          <strong>Telefone</strong>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="(21) 9988-7766"
            value={value}
            onChange={({ target }) => {
              setValue(phoneMask(target.value));
            }}
          />
        </label>
        <button type="submit">Quero saber mais</button>
      </form>
    </FormStyle>
  );
};

export default Form;
