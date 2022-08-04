import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  margin: 20px 10px;
  cursor: pointer;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition: all 0.1s ease-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  z-index: -1;
  position: relative;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
  font-family: 'aileron', sans-serif;
  text-transform: capitalize;
  color: var(--color-text-main);
  font-size: 1.5em;
  margin: 0;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 60px;
  background: white !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
