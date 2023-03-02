import Folhas2 from 'assets/svg/Folhas2';
import FolhasMobile2 from 'assets/svg/folhasMobile2';
import LogoFooter from 'assets/svg/logoFooter';
import LogoJulio from 'assets/svg/logojulio';
import { LogosSectionStyle } from './style';

const LogosSection = () => {
  return (
    <LogosSectionStyle>
      <LogoFooter />
      <span />
      <LogoJulio />
      <Folhas2 />
      <FolhasMobile2 />
    </LogosSectionStyle>
  );
};
export default LogosSection;
