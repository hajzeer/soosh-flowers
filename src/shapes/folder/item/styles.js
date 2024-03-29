import styled from 'styled-components';

export const Text = styled.div`
  z-index: 2;
  bottom: 0;
  left: 0;

  h3 {
    text-align: center;
    font-size: 1.5em;
    font-weight: 600;
    color: inherit;
    width: 300px;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 2em;
    }
  }
`;

export const Outer = styled.a`
  height: 100%;
  color: var(--color-text-main);
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  padding: 0;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  border-top: none;
  border-bottom: none;
  cursor: pointer;

  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-left: none;
    border-right: none;
  }

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;
