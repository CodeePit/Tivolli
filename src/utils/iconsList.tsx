import Caminhada from 'assets/svg/Caminhada';
import Festas from 'assets/svg/festas';
import Futebol from 'assets/svg/Futebol';
import Playground from 'assets/svg/playground';
import Tennis from 'assets/svg/Tenis';
import Ampia from 'assets/svg/Verde';
import { iItensIcons } from 'types/iItensIcons';

export const ItensIcons: iItensIcons[] = [
  {
    id: 1,
    title: 'Salão de Festas',
    icon: <Festas />,
  },
  {
    id: 2,
    title: 'Quadra de beach tennis',
    icon: <Tennis />,
  },
  {
    id: 3,
    title: 'PlayGround',
    icon: <Playground />,
  },

  {
    id: 4,
    title: 'Ampia área verde',
    icon: <Ampia />,
  },
  {
    id: 5,
    title: 'Campo de Futebol',
    icon: <Futebol />,
  },

  {
    id: 6,
    title: 'Trilha de Caminhada',
    icon: <Caminhada />,
  },
];
