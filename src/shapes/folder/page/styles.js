import styled from 'styled-components';
import { responsive, Outer as O } from 'ui';

export const H1 = styled.h1``;
export const Outer = styled(O)`
  min-height: initial;
  ${responsive.mdPlus} {
    max-width: var(--content-max-width);
  }
`;

export const List = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  // In case of not loading the media, "grid-auto-rows" will create enough space
  // in order to display the item correctly with the alternative text
  grid-auto-rows: minmax(250px, auto);

  ${responsive.smPlus} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }
`;

export const ImageStripe = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background: var(--color-text-main);
  margin-bottom: 20px;
`;

export const SubNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 100%;

  ${responsive.xs} {
    flex-wrap: nowrap;
    overflow: scroll;
    padding-left: 25px;
    padding-top: 5px;
    padding-bottom: 10px;
    position: relative;
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
