import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  overflow: hidden;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageDivFirst = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  right: -50px;
  padding: 10px;
`;

export const TextDiv = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: -100px;
`;

export const ImageGridCollectionInner = styled.div`
  position: relative;
  width: 100%;
`;

export const ImageGridCollection = styled.div`
  margin: 10px;
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  cursor: pointer;

  ${ImageGridCollectionInner}:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: 310px;
  }
  ${ImageGridCollectionInner}:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 150px;
  }
  ${ImageGridCollectionInner}:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    height: 310px;
  }
  ${ImageGridCollectionInner}:nth-child(4) {
    grid-column: 1 / 2;
    grid-row: -1 / -2;
    height: 150px;
  }
  ${ImageGridCollectionInner}:nth-child(5) {
    grid-column: 2 / 3;
    grid-row: -1 / -3;
    height: 310px;
  }
  ${ImageGridCollectionInner}:nth-child(6) {
    grid-column: 3 / 4;
    grid-row: -1 / -2;
    height: 150px;
  }
`;
