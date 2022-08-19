import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 0 30px 30px 30px;
  object-fit: contain;

  @media (min-width: 1024px) {
    width: 65%;
    padding: 0 30px 30px 30px;
    margin-left: 60px;
  }

  @media (min-width: 1600px) {
    width: 55%;
  }
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImagesStyled = styled(Image)`
  border-radius: 250px 250px 0 0;
  position: relative;
`;

export const ImageStripe = styled.div`
  position: relative;
  top: -32px;
  width: 100%;
  height: 2px;
  background: #f8f7f2;

  @media (min-width: 1024px) {
    left: 0;
    width: 100%;
    margin: 50px 0;
  }

  @media (min-width: 1600px) {
    width: 100%;
  }
`;

export const MainInfoDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin: 20px;
    height: 65vh;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const FirstDiv = styled.div`
  margin-top: 20px;
  @media (min-width: 1024px) {
    position: relative;
    left: 100px;
    width: 44%;
  }
`;
export const SecondDiv = styled.div`
  @media (min-width: 1024px) {
    position: relative;
    left: -100px;
    margin: 20px;
    width: 50%;
  }
`;
export const Paragraph = styled.p`
  font-size: 18px;
  padding: 0 20px;
  line-height: 2;
  z-index: 3;
  font-weight: 600;

  @media (min-width: 1024px) {
    padding: 0 50px;
  }
`;

export const SubParagraph = styled.p`
  position: relative;
  font-size: 17px;
  padding: 0 15px;
  line-height: 2;
  z-index: 3;
  font-weight: 600;
`;
export const TitlePosition = styled.div`
  position: relative;
  top: -20px;
`;
export const H1 = styled.h1`
  font-size: 45px;
  margin: 0 30px;
  color: var(--color-text-main);
  max-width: var(--font-max-width);
  font-weight: 800;
  letter-spacing: 5px;
`;

export const H2 = styled.h2`
  font-size: 30px;
  line-height: 1.2;
  margin: -80px 0 15px 15px;
  color: var(--color-text-main);
  max-width: var(--font-max-width);
  text-transform: uppercase;
  font-weight: 500;

  @media (min-width: 1024px) {
    padding: 50px;
  }
`;
export const H3 = styled.h3`
  position: relative;
  font-size: 30px;
  line-height: 1.2;
  top: 15px;
  margin: 15px;
  color: var(--color-text-sub);
  max-width: var(--font-max-width);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  z-index: 3;
`;

export const Btn = styled.button`
  background: #5a393e;
  position: relative;
  left: 25px;
  width: 200px;
  height: 50px;
  color: #f8f7f2;
  border-radius: 10px;
  font-family: 'Dream Avenue', serif;
  font-size: 20px;

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FlowerImageDiv = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
  left: 10%;
  margin: 0;

  transform: rotate(-10deg);

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.03) rotate(-10deg);
  }

  @media (min-width: 1024px) {
    position: absolute;

    width: 1000px;
    height: auto;

    left: 45%;

    top: 400px;
  }

  @media (min-width: 1600px) {
    width: 1000px;
    top: 400px;
    left: 60%;
  }
`;
export const BgImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-bottom: 2px solid #f8f7f2;
  border-top: 2px solid #f8f7f2;
  z-index: 3;
  margin: 20px 0;

  @media (min-width: 1024px) {
    height: 600px;

    padding: 60px 30px;
  }
`;

export const HelperDiv = styled.div``;

export const TextDiv = styled.div`
  @media (min-width: 1024px) {
    width: 60%;
    position: relative;
    height: auto;
    left: 0;
    top: 50px;
  }
`;

export const ItemsDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  overflow-y: hidden;
  overflow-x: auto;
  cursor: grab;

  @media (min-width: 1024px) {
    position: relative;
  }
`;

export const SubBtn = styled.button`
  background: #5a393e;
  position: relative;
  left: 20px;
  width: 200px;
  height: 50px;
  color: #f8f7f2;
  border-radius: 10px;
  font-family: 'Dream Avenue', serif;
  font-size: 20px;
  z-index: 3;

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

export const SubInput = styled.input`
  width: 300px;
  height: 50px;
  position: relative;
  border-radius: 10px;
  border: none;
  margin: 0 20px 20px 20px;
  padding: 10px;
  z-index: 3;
  color: #5a393e;

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const FormStyled = styled.form`
  z-index: 3;
`;
