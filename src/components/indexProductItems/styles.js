import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 300px;
  margin: 20px 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
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
  color: #f8f7f2 !important;
  margin: 10px;
`;
