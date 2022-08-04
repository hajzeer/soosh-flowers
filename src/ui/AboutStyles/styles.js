import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  overflow: hidden;
  position: relative;

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

export const H1 = styled.h1`
  font-size: 45px;
  margin: 0 30px;
  color: var(--color-text-main);
  max-width: var(--font-max-width);
  font-weight: 800;
  letter-spacing: 5px;

  @media (min-width: 1024px) {
    font-size: 60px;
    margin: 0 50px 40px;
  }
`;

export const H3 = styled.h3`
  position: relative;
  font-size: 30px;
  line-height: 1.2;
  padding: 20px;
  color: var(--color-text-sub);
  max-width: var(--font-max-width);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  z-index: 3;

  @media (min-width: 1024px) {
    padding: 0 40px;
    margin: 20px 0;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  padding: 0 20px;
  line-height: 2;
  z-index: 3;
  font-weight: 600;

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
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

  @media (min-width: 1024px) {
    position: absolute;

    height: 600px;
    width: 750px;
    top: 300px;
    left: 60%;
  }

  @media (min-width: 1600px) {
    position: absolute;
    height: 700px;
    width: 900px;
    top: 300px;
    left: 60%;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  @media (min-width: 1024px) {
    padding: 20px;
    width: 70%;
  }

  @media (min-width: 1600px) {
    height: 500px;
  }
`;

export const MainTextInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    position: relative;
    flex-direction: row;
  }
`;
export const FirstDiv = styled.div`
  @media (min-width: 1024px) {
    width: 45%;
  }
`;
export const SecondDiv = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
  }
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

  @media (min-width: 1024px) {
    grid-gap: 30px;
    padding: 0 50px;
  }

  ${ImageGridCollectionInner}:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: 310px;
    @media (min-width: 1024px) {
      height: 835px;
    }
  }
  ${ImageGridCollectionInner}:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 150px;
    @media (min-width: 1024px) {
      height: 400px;
    }
  }
  ${ImageGridCollectionInner}:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    @media (min-width: 1024px) {
      height: 835px;
    }
  }
  ${ImageGridCollectionInner}:nth-child(4) {
    grid-column: 1 / 2;
    grid-row: -1 / -2;
    height: 150px;
    @media (min-width: 1024px) {
      height: 400px;
    }
  }
  ${ImageGridCollectionInner}:nth-child(5) {
    grid-column: 2 / 3;
    grid-row: -1 / -3;
    @media (min-width: 1024px) {
      height: 835px;
    }
  }
  ${ImageGridCollectionInner}:nth-child(6) {
    grid-column: 3 / 4;
    grid-row: -1 / -2;
    height: 150px;
    @media (min-width: 1024px) {
      height: 400px;
    }
  }
`;
