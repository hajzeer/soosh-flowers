import styled from 'styled-components';
import Link from 'next/link';

export const Outer = styled.footer`
  width: 100%;
  height: 200px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 0 200px;
  }
`;

export const Paragraph = styled.p`
  margin: 10px 0;
`;

export const Anchor = styled.a`
  text-decoration: underline;
  font-family: 'Dream Avenue', serif;
  margin: 10px 0;
  cursor: pointer;
`;
export const SocialMediaDiv = styled.div`
  position: relative;
  cursor: pointer;
  left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const HelperDiv = styled.div`
  font-weight: 500;
  height: 100px;
  width: 50%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 0 0 auto;
`;

export const NavList = styled.div`
  width: 50%;

  font-weight: 500;
  height: 100px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0 0 0 auto;

  li {
    line-height: 1.5rem;
  }
  h5 {
    font-size: 0.7rem;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;
