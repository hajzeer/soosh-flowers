import styled from 'styled-components';

export const Outer = styled.footer`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 1600px;
  margin: 50px 0;
  border-top: 2px solid var(--color-box-background);
  padding: 0px 10px 100px 10px;
`;

export const Paragraph = styled.p`
  margin: 10px 0;
`;

export const Anchor = styled.a`
  text-decoration: underline;
  font-family: 'Dream Avenue', serif;
  margin: 10px 0;
`;

export const Logo = styled.div`
  width: 70px;
`;

export const Powered = styled.div`
  width: 100%;
  display: block;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;

  p {
    margin: 0;
    color: var(--color-text-sub);
  }

  svg {
    width: 120px;
  }
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
  justify-content: flex-end;
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
