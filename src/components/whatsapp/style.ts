import styled from 'styled-components';

export const WhatsappStyle = styled.a`
  padding: 0.7rem 2rem;
  background-color: rgba(40, 239, 76, 1);
  font-family: var(--font-primary);
  font-size: 1rem;
  color: white;
  position: fixed;
  text-decoration: none;
  cursor: pointer;
  z-index: 9999;
  right: 1rem;
  top: 32rem;
  font-weight: 700;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 1023px) {
    padding: 0.7rem;
    span {
      display: none;
    }
  }
`;
