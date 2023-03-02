import Vector from 'assets/svg/Vector';
import { MapaStyle } from './style';

const Mapa = () => {
  return (
    <MapaStyle>
      <div className="container">
        <div className="content">
          <div className="svg">
            <Vector />
            <span />
          </div>
          <div className="text">
            <div className="firstText">
              O destino perfeito para você morar ou investir
            </div>
            <div className="secondText">
              Com infraestrutura completa, que oferece lazer, praticidade e
              segurança 24h para você e sua família.
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7723350583096!2d-48.00431388502184!3d-23.576618784675237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cf288d740a49%3A0x33a3e884ad3319a0!2sResidencial%20Tivolli!5e0!3m2!1spt-BR!2sbr!4v1677524205222!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        loading="lazy"
        title="mapa"
      />
    </MapaStyle>
  );
};

export default Mapa;
