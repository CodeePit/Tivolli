import styled from 'styled-components';

export const FasesStyle = styled.div`
  width: 100%;
  height: auto;
  min-height: 100px;
  background: var(--color-background-gold);
  display: flex;
  justify-content: center;
  align-items: center;
  .texts {
    text-align: center;
    display: flex;
    /* gap: 5rem; */
    text-transform: uppercase;
    font-weight: 700;
    font-family: var(--font-primary);
    letter-spacing: 0.1rem;

    .lancamento {
      border-right: 1px solid #35614070;
      padding: 1rem 3rem;
      font-size: 20px;
      @media (max-width: 769px) {
        padding: 2rem 3rem;
        border-right: none;
        border-bottom: 1px solid #35614070;
      }
      @media (max-width: 700px) {
        font-size: 15px;
      }
    }

    .pronto {
      border-right: 1px solid #35614070;
      padding: 1rem 3rem;
      font-size: 20px;
      @media (max-width: 769px) {
        border-right: none;
        padding: 2rem 3rem;
        border-bottom: 1px solid #35614070;
      }
      @media (max-width: 700px) {
        font-size: 15px;
      }
    }

    .pavimentacao {
      font-size: 20px;
      padding: 1rem 3rem;
      @media (max-width: 769px) {
        padding: 2rem 3rem;
      }
      @media (max-width: 700px) {
        font-size: 15px;
      }
    }
    @media (max-width: 769px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 769px) {
    padding: 1rem;
    border: 2rem solid #356140;
  }
`;
