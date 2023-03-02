import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  height: 900px;
  background: var(--color-background-header);
  position: relative;
  .folhasHeader {
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1500px) {
      display: none;
    }
  }
  .folhasMobileHeader {
    position: absolute;
    top: 0rem;
    left: 0;
    z-index: 1;
    @media (min-width: 769px) {
      display: none;
    }
  }
  .hero {
    position: relative;
    float: right;
    height: 100%;
    width: 77%;
    @media (max-width: 769px) {
      display: flex;
      align-items: end;
    }
    .heroBanner {
      width: 100%;
      height: 100%;
      @media (max-width: 769px) {
        object-fit: cover;
        height: 75%;
      }
    }
    @media (max-width: 1500px) {
      width: 100%;
    }
  }
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    transform: translate(-75%, 65%);
    @media (max-width: 1500px) {
      top: 0;
      left: 50%;
      transform: translate(-50%, 65%);
    }
    @media (max-width: 769px) {
      top: 0;
      left: 50%;
      transform: translate(-50%, 15%);
    }
  }
  @media (max-width: 900px) {
    height: 700px;
  }
`;
