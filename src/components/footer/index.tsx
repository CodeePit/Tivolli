import { FooterStyle } from './style';

const Footer = () => {
  return (
    <FooterStyle>
      <span className="values">
        Valor à vista de R$64.999,00 mediante a transferência bancária ou pix
        válido para quadra J lote 2. Parcelamento em até 48x com entrada mínima
        de 35% do valor total, sem juros com IPCA. Parcelas de R$619,00 com
        entrada 8%, mais 12 parcelas anuais de R$750,00 em cima do valor
        financiado pela loteadora, com juros e correções.
      </span>
      <span className="line" />
      <a href="https://coreag.com.br/">Intelligence By Core.Ag</a>
    </FooterStyle>
  );
};

export default Footer;
