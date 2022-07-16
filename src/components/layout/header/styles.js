import styled from 'styled-components';
import is from 'styled-is';

import { responsive } from 'ui';

export const Outer = styled.header`
  width: 100%;
  height: 100px;
  text-align: center;
  max-width: var(--content-max-width);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  padding: 15px;
  background: transparent;
  z-index: 999;

  ${responsive.smAndLess} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BluredDiv = styled.div`
  width: 100%;
  height: 100px;
  z-index: 99;
  background: rgba(var(--color-main-background), 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;
export const ImageDiv = styled.div`
  width: 150px;
  height: 60px;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
export const Logo = styled.div`
  width: 40px;
  height: 55px;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;

  ${responsive.xs} {
  }
`;

export const Nav = styled.nav`
  display: none;
  margin: 6px 0 0 15px;
  padding-left: 15px;
  width: 100%;
  height: 100vh;
  color: #000;
  font-size: 18px;
  font-family: var(--font-family-main);
  ${responsive.smAndLess} {
    border-radius:${(p) => (p.open ? '0' : '100%')};
    transform: ${(p) =>
      p.open
        ? 'translateX(0) translateY(0)'
        : 'translateX(100%) translateY(100%)'};
    
    display: flex;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    min-height: 100vh;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    border: none;
    background: #F8F7F2;
    margin: 0;
    padding: 2em;
    font-size: 1.5rem;
    transition: all .5s ease-out;
`;

export const NavList = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;

  /* Make space for logout button */
  ${responsive.smAndLess} {
    margin-top: 30px;
  }
`;

export const NavListItem = styled.li`
  padding: 0;
  display: inline-block;
  margin: 0 5px;

  > a {
    display: inline-block;
    text-transform: uppercase;
    padding: 10px 10px;
    transition: all 100ms;
    font-weight: 600;
    letter-spacing: 1px;

    &:hover {
      text-decoration: underline;
    }
  }

  ${responsive.smAndLess} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const Btn = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0;
  border-radius: 5px;
  justify-self: flex-end;
  margin-left: 10px;
  z-index: 99;

  &:hover,
  &:active {
    background: rgba(0, 0, 0, 0.05);
  }
  ${responsive.xs} {
    width: 40px;
    height: 40px;
    margin-left: 5px;
  }
`;
export const ImageButtonDiv = styled.div`
  width: 50px;
  height: 50px;
`;
export const BasketQuantity = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 11px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  right: -6px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: #080708;
  border: 3px solid #fff;
`;

export const NavActions = styled.div`
  margin: 8px 10px 0;
  display: flex;
  text-transform: uppercase;
  align-items: center;

  button,
  a {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 500;
    border: 1.4px solid var(--color-text-main);
    color: var(--color-text-main);
    white-space: nowrap;

    cursor: pointer;

    &:hover {
      background: var(--color-text-main);
      color: var(--color-main-background);
      text-decoration: none;
    }
  }

  ${responsive.smAndLess} {
    display: none;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    z-index: 99;
    text-align: center;
    margin: 0;
    font-size: 1.5rem;

    ${is('open')`
      display: flex;
      justify-content: center;
    `};
  }
`;

export const PreviewBar = styled.div`
  background: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;
export const IconBar = styled.div`
  display: flex;

  > a {
    cursor: pointer;
  }
`;
