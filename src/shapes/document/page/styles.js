import styled from 'styled-components';
import { Image } from '@crystallize/react-image';

import { Inner as I, responsive } from 'ui';

export const Outer = styled(I)`
  margin: 0 auto;

  ${responsive.mdPlus} {
    max-width: var(--content-max-width);
  }
`;

export const Header = styled.div`
  font-size: 20px;
  margin-bottom: 50px;

  ${responsive.mdPlus} {
    display: grid;
    grid-template-columns: minmax(600px, 1000px) minmax(300px, 1fr);
  }
`;

export const HeaderInner = styled.div`
  margin-bottom: 50px;

  ${responsive.smPlus} {
    max-width: 800px;
  }

  // Paragraph generated by the ContentTransformer
  p {
    font-size: 20px;
    line-height: 36px;
    font-weight: 500;
  }
`;

export const Byline = styled.div`
  font-size: 16px;
  padding-bottom: 15px;
  span {
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  color: var(--color-text-main);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 50px;
  line-height: 1.2em;
  margin-bottom: 15px;
  margin: 0;
  max-width: 800px;
`;

export const HeroImage = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 100px;
  > figure:first-child {
    grid-column-end: span 2;
  }
`;

export const Img = styled(Image)`
  height: 100%;
  overflow: hidden;
  width: 100%;

  > img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    width: 100%;
  }
`;

export const DocumentContent = styled.div`
  display: grid;
  grid-gap: 200px;
  grid-template-columns: 1fr;

  ${responsive.mdPlus} {
    grid-template-columns: minmax(600px, 1000px) minmax(300px, 1fr);
  }
`;

export const Article = styled.article`
  p,
  li {
    margin-left: 25px !important;
    margin-right: 25px;
    font-weight: 600;
    ${responsive.mdPlus} {
      padding-right: 100px;
      margin-left: 50px !important;
      margin-right: 0;
      font-weight: 600;
    }
  }

  h2 {
    font-size: var(--font-size-l);
  }

  h3 {
    margin-left: 25px;
    font-size: var(--font-size-l);
    line-height: 38px;
    ${responsive.mdPlus} {
      margin-left: 50px;
    }
  }
`;

export const Sidebar = styled.div`
  margin-top: -15px;
  overflow-y: auto;
`;
