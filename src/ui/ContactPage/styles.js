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
    justify-content: space-evenly;
    padding: 0;
    position: relative;
  }
  @media (min-width: 1600px) {
    left: -5%;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  padding: 0 40px;
  line-height: 2;
  z-index: 3;
  font-weight: 600;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const IFrame = styled.iframe`
  z-index: 99999;
  border-radius: 25px;
  border: 2px solid #fff;
  margin-top: 30px;
  width: 340px;
  height: 340px;

  @media (min-width: 1024px) {
    width: 380px;
    height: 380px;
    margin-right: 100px;
  }
`;

export const Anchor = styled.a`
  padding-left: 40px;
  font-size: 17px;
  font-weight: 900;
  cursor: pointer;
`;
