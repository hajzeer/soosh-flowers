import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import BurgerButton from './burger-button';
import BasketButton from './basket-button';

import {
  Outer,
  Nav,
  Logo,
  NavList,
  NavListItem,
  PreviewBar,
  IconBar,
  ImageDiv,
  BluredDiv,
  DesktopNavList,
  BluredDivNav
} from './styles';

export default function Header({ simple, preview }) {
  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {preview && (
        <PreviewBar>
          You are in preview mode (
          <a href={'/api/preview?leave=' + encodeURIComponent(router.asPath)}>
            leave
          </a>
          )
        </PreviewBar>
      )}
      <Outer simple={simple}>
        <BluredDiv />
        <Link href="/" passHref>
          <Logo aria-label="Logo">
            <Image src="/static/31.png" alt="" width={80} height={164} />
          </Logo>
        </Link>
        <Link href="/" passHref>
          <ImageDiv>
            <Image src="/static/8.png" width={350} height={250} />
          </ImageDiv>
        </Link>
        <IconBar>
          <BasketButton />
        </IconBar>
        <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
        <Nav open={navOpen}>
          <NavList>
            <NavListItem>
              <Link href="/">
                <a>home</a>
              </Link>
              <Link href="/about">
                <a>about</a>
              </Link>
              <Link href="/shop">
                <a>shop</a>
              </Link>
            </NavListItem>
          </NavList>
        </Nav>
        <DesktopNavList>
          <BluredDivNav />

          <NavListItem>
            <Link href="/">
              <a>home</a>
            </Link>
            <Link href="/about">
              <a>about</a>
            </Link>
            <Link href="/shop">
              <a>shop</a>
            </Link>
          </NavListItem>
        </DesktopNavList>
      </Outer>
    </>
  );
}
