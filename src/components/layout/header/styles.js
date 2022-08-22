import styled from 'styled-components';
import is from 'styled-is';

import { responsive } from 'ui';

export const Outer = styled.header`
  width: 100%;
  height: 100px;
  text-align: center;
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
  display: inline;
  width: 100%;
  height: 100px;
  z-index: -1;
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
  cursor: pointer;

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
  }
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
  cursor: pointer;

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const DesktopNavList = styled.div`
  position: absolute;
  padding: 20px;
  top: 90px;
  width: 100%;
  z-index: 999;

  ${responsive.smAndLess} {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    top: 10px;
    left: 0;
    height: 2px;
    background: #f8f7f2;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 10px;
    left: 0;
    height: 2px;
    background: #f8f7f2;
  }
`;

export const BluredDivNav = styled.div`
  display: inline;
  width: 100%;
  height: 65px;
  z-index: -1;
  background: rgba(var(--color-main-background), 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  top: 5px;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
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
    background: rgb(252,249,233);
    background: linear-gradient(337deg, rgba(252,249,233,1) 37%, rgba(255,255,255,1) 53%);
    margin: 0;
    padding: 2em;
    font-size: 1.5rem;
    transition: all .5s ease-out;
`;

export const NavList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 999;

  /* Make space for logout button */
  ${responsive.smAndLess} {
    margin-top: 30px;
  }
`;

export const NavListItem = styled.li`
  padding: 0;
  width: 100%;
  display: inline-block;
  margin: 0 5px;
  z-index: 999;

  > a {
    font-family: 'Dream Avenue';
    font-size: 20px;
    display: inline-block;
    text-transform: uppercase;
    padding: 10px 10px;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 999;
    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.1);
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
    > a {
      font-size: 40px;
      letter-spacing: 3px;
      margin: 15px 0;
    }
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

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
  }

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
