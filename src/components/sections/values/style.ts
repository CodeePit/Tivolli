import styled from 'styled-components';

export const ValueSectionStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem;
  min-height: 200px;
  background-color: var(--color-background-darkgreen);
  display: flex;
  justify-content: center;
  align-items: center;
  .texts {
    display: flex;
    gap: 3rem;
    font-family: var(--font-primary);
    .loteamento {
      color: white;
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      width: 350px;
      opacity: 0.9;
      @media (max-width: 1300px) {
        font-size: 20px;
        width: 300px;
      }
    }
    .values {
      color: white;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      width: 350px;
      opacity: 0.9;
      span {
        font-weight: 700;
        font-size: 20px;
      }
      @media (max-width: 1300px) {
        font-size: 16px;
        width: 350px;
        span {
          font-size: 18px;
        }
      }
      @media (max-width: 700px) {
        font-size: 20px;
        width: fit-content;
        span {
          font-size: 22px;
        }
      }
    }
    a {
      white-space: nowrap;
      text-decoration: none;
      padding: 1rem 2rem;
      background: var(--color-background-gold);
      border-radius: 7px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: var(--color-text);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;
      font-family: var(--font-primary);
      :hover {
        transform: scale(1.02);
      }
      @media (max-width: 1300px) {
        font-size: 16px;
        padding: 1rem 1.5rem;
      }
      @media (max-width: 700px) {
        font-size: 17px;
      }
    }
    @media (max-width: 1024px) {
      gap: 1rem;
    }
    @media (max-width: 963px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;
    }
  }
`;
