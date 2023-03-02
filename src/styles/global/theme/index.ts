import type { iTheme } from 'types/iTheme';
import { sharedTheme } from './shared';

export const defaultTheme: iTheme = {
  name: 'default',

  colors: {
    greenHeader: 'linear-gradient(264.47deg, #355E3F 32.03%, #2F5238 77.59%)',
    darkGreen: '#274A30',
    textGreen: '#274A30',
    lightGreen: '#356140',
    goldColoReverse:
      'linear-gradient(276.27deg, #F0C366 6.28%, #D4902A 49.62%, #BD7F28 92.07%);',
    goldColor:
      'linear-gradient(276.27deg, #BD7F28 6.28%, #D4902A 49.62%, #F0C366 92.07%);',
  },
  ...sharedTheme,
};
