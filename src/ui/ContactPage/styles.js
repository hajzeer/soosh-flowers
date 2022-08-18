import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
    left: -10%;
  }
  @media (min-width: 1600px) {
    left: -5%;
  }
`;

export const IFrame = styled.iframe`
  z-index: 99999;
  border-radius: 25px;
  border: 2px solid #fff;
  width: 100%;
  margin: 50px 0 20px 0;

  @media (min-width: 1024px) {
    width: 150%;

    margin: 20px 0 20px 0;
  }
`;

export const Anchor = styled.a`
  margin: 40px;
  font-size: 17px;
  font-weight: 900;
  cursor: pointer;
`;
