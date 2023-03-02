import styled from 'styled-components';

export const SectionFormStyle = styled.div`
  width: 100%;
  min-height: 1000px;
  height: auto;
  background: var(--color-background-darkgreen);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .folhasForm {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    @media (max-width: 1370px) {
      display: none;
    }
  }
  .FolhaMobile {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    @media (min-width: 1370px) {
      display: none;
    }
  }

  .text {
    color: white;
    padding-top: 2rem;
    width: 53rem;
    height: 500px;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    font-family: var(--font-primary);
    .itens {
      width: 250px;
      font-size: 28px;
      line-height: 30px;
      font-weight: 200;

      span {
        font-weight: 700;
        font-size: 30px;
      }
    }
    .itensIcons {
      width: 30rem;
      height: 300px;
      display: grid;
      grid-template-columns: 50% 50%;
      align-items: end;
      gap: 2rem;
      .containerIcon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        font-family: var(--font-primary);
        font-size: 1.1rem;
        svg {
          width: 32%;
        }
        @media (max-width: 600px) {
          font-size: 0.7rem;
          text-align: center;
        }
        @media (max-width: 980px) {
          width: 90%;
        }
      }
      @media (max-width: 980px) {
        width: 100%;
      }
    }
    @media (max-width: 980px) {
      padding-top: 5rem;
    }
    @media (max-width: 910px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding-top: 22rem;
      padding-bottom: 15rem;
      .itens {
        margin-right: 5rem;
      }
      .itensIcons {
        gap: 1rem;
        width: 100%;
      }
    }
  }
`;
