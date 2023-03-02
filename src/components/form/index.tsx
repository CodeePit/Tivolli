import { FormStyle } from './style';

const Form = () => {
  return (
    <FormStyle id="form">
      <div className="header">
        <h1>Aproveite esta oportunidade</h1>
        Lotes de <strong>150</strong>
        <span>m²</span> com parcelas a partir de <span>R$</span>
        <strong>619</strong>,00*
      </div>
      <form>
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
          <input type="tel" name="tel" id="tel" placeholder="21 9988-7766" />
        </label>
        <button type="submit">Quero saber mais</button>
      </form>
    </FormStyle>
  );
};

export default Form;
