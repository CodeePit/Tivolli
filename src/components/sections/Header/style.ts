import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  height: 700px;
  background: var(--color-background-header);
  position: relative;
  overflow: hidden;
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
    @media (max-width: 1700px){
      width: 100%;
    }
    @media (max-width: 769px) {
      display: flex;
      align-items: end;
    }
    @media (max-width: 658px) {
      width: 100%;
    }
    .heroBanner {
      width: 100%;
      height: 130%;
      object-fit: cover;
      @media (max-width: 769px) {
        height: 75%;
      }
      @media (max-width: 658px) {
        display: none;
      }
    }
    .heroBannerMobile {
      width: 100%;
      height: 100%;
      @media (width: 659px) {
        display: none;
      }
    }
  }
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    transform: translate(-75%, 45%);
    @media (max-width: 1700px) {
      top: 0;
      left: 25%;
      transform: translate(-75%, 25%);
    }
    @media (max-width: 1370px) {
      transform: translate(-50%, 25%);
    }
    @media (max-width: 769px) {
      top: 0;
      left: 50%;
      transform: translate(-50%, 15%);
    }
  }
  @media (max-width: 1500px) {
    height: 580px;
  }
  @media (max-width: 1370px) {
    height: 600px;
  }
  @media (max-width: 900px) {
    height: 700px;
  }
`;
