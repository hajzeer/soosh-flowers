import styled from 'styled-components';
import { responsive, Outer as O } from 'ui';

export const H1 = styled.h1``;
export const Outer = styled(O)`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0;

  ${responsive.mdPlus} {
    max-width: 100%;
  }
`;

export const List = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  position: relative;
  grid-template-columns: 1fr;
  // In case of not loading the media, "grid-auto-rows" will create enough space
  // in order to display the item correctly with the alternative text
  grid-auto-rows: minmax(250px, auto);

  ${responsive.smPlus} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }
`;

export const ImageStripe = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background: var(--color-text-main);
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    width: 75%;
    left: 0%;
  }
`;

export const SubNavigation = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${responsive.xs} {
    flex-wrap: nowrap;
    overflow: scroll;
    position: relative;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const Item = styled.div`
  &.item-product {
    grid-column-end: span 1;
  }
  &.item-document {
    grid-column-end: span 2;
  }
`;

export const FlowerImageDiv = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: inline-block;
    position: absolute;

    width: 600px;
    left: 65%;
    transform: rotate(-40deg);
  }

  @media (min-width: 1600px) {
    position: absolute;

    width: 800px;
    left: 60%;
    top: 100px;
  }

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.03) rotate(-40deg);
  }
`;
