import styled from 'styled-components';

export const WhatsappStyle = styled.button`
  padding: 1rem 2rem;
  background-color: rgba(40, 239, 76, 1);
  font-family: var(--font-primary);
  font-size: 1rem;
  color: white;
  position: fixed;
  z-index: 9999;
  right: 1rem;
  top: 50rem;
  font-weight: 700;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 1023px) {
    padding: 1rem;
    span {
      display: none;
    }
  }
`;
