import { createGlobalStyle } from 'styled-components';

const ColorsCSS = createGlobalStyle`
  :root {
 
    --color-text: ${({ theme }) => theme.colors.textGreen};
    --color-background-header: ${({ theme }) => theme.colors.greenHeader};
    --color-background-darkgreen: ${({ theme }) => theme.colors.darkGreen};
    --color-background-lightGreen: ${({ theme }) => theme.colors.lightGreen};
    --color-background-gold: ${({ theme }) => theme.colors.goldColor}
    --color-background-gold-reverse: ${({ theme }) =>
      theme.colors.goldColoReverse}
   
  }
`;
const FontsCSS = createGlobalStyle`
  :root {
    --font-primary: ${({ theme }) => theme.fonts.primary};
    --font-secondary: ${({ theme }) => theme.fonts.secondary};
  }
`;
const BorderRadiusCSS = createGlobalStyle`
  :root {
    --border-radius-sm: ${({ theme }) => theme.borderRadius.sm};
    --border-radius-xl: ${({ theme }) => theme.borderRadius.xl};
  }
`;
const RootCSS = createGlobalStyle`
  :root {
    --max-width: ${({ theme }) => theme.maxWidth};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    padding: 0 !important;
    color: var(--color-text);
    font-family: var(--font-primary);
    background-color: var(--color-background);
    position: relative;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-secondary);
  }

  .mob-visible {
    display: none;
    @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
      display: block;
    }
  }
  .tab-visible {
    display: none;
    @media (min-width: ${({ theme }) => theme.mediaQueries.minMobile}) {
      display: block;
    }
  }
  .mx-w {
    @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
      max-width: var(--max-width);
      margin: 0 auto;
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
    html {
      margin: 0 auto;
    }
  }
`;

export const GlobalStyles = {
  ColorsCSS,
  FontsCSS,
  BorderRadiusCSS,
  RootCSS,
};
