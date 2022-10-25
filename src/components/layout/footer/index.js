import React from 'react';
import Link from 'next/link';

import {
  Outer,
  Anchor,
  NavList,
  HelperDiv,
  Paragraph,
  SocialMediaDiv
} from './styles';
import Image from 'next/image';

export default function Footer() {
  return (
    <Outer>
      <HelperDiv>
        <Paragraph>©{new Date().getFullYear()} SOOSH FLOWERS STORE</Paragraph>
        <a href="https://www.instagram.com/breath.d.s/">
          <Paragraph>Design by Breath Design Studio</Paragraph>
        </a>
      </HelperDiv>
      <NavList>
        <Link href="/delivery-returns" passHref>
          <Anchor>Delivery & Returns</Anchor>
        </Link>
        <Link href="/ethical-policy" passHref>
          <Anchor>Ethical Policy</Anchor>
        </Link>
        <Link href="/contact" passHref>
          <Anchor>Contact</Anchor>
        </Link>
        <SocialMediaDiv>
          <Link href="https://www.facebook.com/sooshflowers">
            <Image src="/static/facebook.png" width="50" height="50" />
          </Link>
          <Link href="https://www.instagram.com/sooshflowers/?igshid=YmMyMTA2M2Y%3D">
            <Image src="/static/instagram.png" width="50" height="50" />
          </Link>
        </SocialMediaDiv>
      </NavList>
    </Outer>
  );
}
