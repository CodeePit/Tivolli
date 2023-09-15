import { useState } from 'react';
import { fetcher } from '@services/fetchers';
import { phoneMask } from './masks';
import { FormStyle } from './style';

const Form = () => {
  const [value, setValue] = useState('');
  function submit(values: any) {
    const dataCvCRM = {
      nome: values.target.name.value,
      email: values.target.email.value,
      telefone: values.target.tel.value,
      idempreendimento: 3,
      origem: 'SI',
      midia: 'Google LP',
      conversao: 'CoreAg',
    };
    return fetcher
      .post('https://julioejulio.cvcrm.com.br/api/cvio/lead', dataCvCRM)
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
        <h1>Aproveite esta oportunidade</h1>
        Lotes de <strong>150</strong>
        <span>m²</span> com parcelas a partir de <span>R$</span>
        <strong>619</strong>,00*
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
