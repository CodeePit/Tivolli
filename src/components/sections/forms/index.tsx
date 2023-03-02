import Form from '@components/form';
import { ItensIcons } from '@utils/iconsList';
import FolhasForm from 'assets/svg/folhasForm';
import FolhasMobile from 'assets/svg/folhasMobile';
import { SectionFormStyle } from './style';

const SectionForm = () => {
  return (
    <SectionFormStyle>
      <FolhasMobile />
      <FolhasForm />
      <div className="text">
        <div className="itens">
          <span>+ de 10 itens</span> de lazer, e <span>35 mil m² </span>
          de área verde!
        </div>
        <div className="itensIcons">
          {ItensIcons.map((itens) => (
            <div key={itens.id} className="containerIcon">
              {itens.icon}
              <span>{itens.title}</span>
            </div>
          ))}
        </div>
      </div>
      <Form />
    </SectionFormStyle>
  );
};

export default SectionForm;
