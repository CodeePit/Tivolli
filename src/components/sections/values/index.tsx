import { ValueSectionStyle } from './style';

const ValuesSection = () => {
  return (
    <ValueSectionStyle>
      <div className="texts">
        <div className="loteamento">
          O Loteamento fechado que cabe no seu bolso!
        </div>
        <div className="values">
          A partir de R$<span>72.750,00</span> em até <span>36x</span> sem
          juros! Consulte condições.
        </div>
        <a href="#form">Falar com um especialista</a>
      </div>
    </ValueSectionStyle>
  );
};

export default ValuesSection;
