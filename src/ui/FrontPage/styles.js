import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  padding: 10px;
  overflow: hidden;
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  object-fit: contain;
`;

export const ImagesStyled = styled(Image)`
  border-radius: 250px 250px 0 0;
  position: relative;
`;

export const ImageStripe = styled.div`
  position: relative;
  top: -22px;
  width: 100%;
  height: 2px;
  background: #f8f7f2;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  padding: 0 15px;
  line-height: 2;
  z-index: 3;
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
  top: -60px;
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
`;
export const H3 = styled.h2`
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
`;

export const FlowerImageDiv = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
  left: 10%;
  transform: rotate(-10deg);
`;
export const BgImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-bottom: 2px solid #f8f7f2;
  border-top: 2px solid #f8f7f2;
  z-index: 3;
  margin: 20px 0;
`;

export const HelperDiv = styled.div`
  &::before {
  }
`;

export const ItemsDiv = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: flex-start;
  overflow-y: hidden;
  overflow-x: auto;
  cursor: grab;
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
`;

export const FormStyled = styled.form`
  z-index: 3;
`;
