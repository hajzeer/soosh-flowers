import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useSettings } from 'components/settings-context';
import IconUser from 'ui/icons/user';
import styled from 'styled-components';
import BurgerButton from './burger-button';
import BasketButton from './basket-button';
import LocaleSwitcher from './locale-switcher';
import Search from './search';
import {
  Outer,
  Nav,
  Logo,
  NavList,
  NavListItem,
  PreviewBar,
  IconBar,
  ImageDiv,
  BluredDiv
} from './styles';

export default function Header({ simple, preview }) {
  const { mainNavigation } = useSettings();
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
            <Image src="/static/31.png" alt="" width={80} height={160} />
          </Logo>
        </Link>
        <ImageDiv>
          <Image src="/static/8.png" width={250} height={150} />
        </ImageDiv>
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
      </Outer>
    </>
  );
}
