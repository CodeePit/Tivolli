import styled from 'styled-components';

export const MapaStyle = styled.div`
  width: 100%;
  height: 710px;
  position: relative;
  z-index: 9;
  .container {
    width: 100%;
    height: 100%;
    padding-right: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    .content {
      background-color: white;
      box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.25);
      width: 32rem;
      height: 372px;
      position: relative;
      display: flex;
      justify-content: center;
      padding-top: 5rem;
      .svg {
        position: absolute;
        top: 3rem;
        left: 3rem;
        height: 6.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        svg {
          width: 3rem;
        }
        span {
          width: 100%;
          height: 1px;
          background: var(--color-background-gold);
        }
      }
      .text {
        margin-left: 2.7rem;
        width: 300px;
        display: flex;
        flex-direction: column;
        font-family: var(--font-primary);
        gap: 2rem;
        .firstText {
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 36px;
        }
        .secondText {
          font-size: 1.2rem;
          line-height: 30px;
        }
      }
      @media (max-width: 1200px) {
        width: 28rem;
        .text {
          margin-left: 5rem !important;
        }
      }
      @media (max-width: 980px) {
        width: 32rem;
        transform: translateY(25%);
      }
      @media (max-width: 700px) {
        width: 100%;
        .svg {
          top: 3.5rem;
          left: 1.5rem;
          svg {
            width: 2.5rem;
          }
        }
      }
    }
    @media (max-width: 1200px) {
      padding: 1rem;
    }
    @media (max-width: 980px) {
      justify-content: center;
      align-items: flex-end;
      padding: 0;
    }
  }
`;
