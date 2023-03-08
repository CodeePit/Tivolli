import WhatsSvg from 'assets/svg/whats';
import { WhatsappStyle } from './style';

const Whatsapp = () => {
  return (
    <WhatsappStyle
      href="https://api.whatsapp.com/send?phone=5515997109002"
      target="e_blank"
    >
      <span>Iniciar conversa</span>
      <WhatsSvg />
    </WhatsappStyle>
  );
};

export default Whatsapp;
