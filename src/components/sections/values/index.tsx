import { ValueSectionStyle } from './style';

const ValuesSection = () => {
  return (
    <ValueSectionStyle>
      <div className="texts">
        <div className="loteamento">
          O Loteamento fechado que cabe no seu bolso!
        </div>
        <div className="values">
          A partir de R$<span>79.500,00</span> em até <span>42x</span> sem
          juros! Consulte condições.
          <p>* condições válidas até a data de 31/12/2024.</p>
        </div>
        <a href="#form">Falar com um especialista</a>
      </div>
    </ValueSectionStyle>
  );
};

export default ValuesSection;
