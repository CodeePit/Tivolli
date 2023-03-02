import { ValueSectionStyle } from './style';

const ValuesSection = () => {
  return (
    <ValueSectionStyle>
      <div className="texts">
        <div className="loteamento">
          O Loteamento fechado que cabe no seu bolso!
        </div>
        <div className="values">
          A partir de R$<span>64.999,00</span> em ate <span>48x</span> sem Juros
        </div>
        <a href="#form">Falar com um especialista</a>
      </div>
    </ValueSectionStyle>
  );
};

export default ValuesSection;
