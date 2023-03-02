import styled from 'styled-components';

export const SectionVideoStyle = styled.div`
  width: 100%;
  height: 900px;
  background: var(--color-background-lightGreen);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  .video {
    background: black;
    width: 60%;
    height: 600px;
    @media (max-width: 769px) {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    background: var(--color-background-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 35px;
    span {
      font-weight: 700;
      font-size: 35px;
    }
    @media (max-width: 769px) {
      font-size: 30px;
      span {
        font-size: 32px;
      }
    }
    @media (max-width: 700px) {
      font-size: 24px;
      padding: 0 1rem;
      text-align: center;
      span {
        font-size: 26px;
      }
    }
  }
  @media (max-width: 769px) {
    height: 650px;
    padding-top: 3rem;
  }
`;
