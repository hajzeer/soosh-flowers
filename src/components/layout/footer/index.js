import React from 'react';
import Link from 'next/link';

import { Outer, Anchor, NavList, HelperDiv, Paragraph } from './styles';

export default function Footer() {
  return (
    <Outer>
      <HelperDiv>
        <Paragraph>©{new Date().getFullYear()} SOOSH FLOWERS STORE</Paragraph>
        <Paragraph>Design by Breath Design Studio</Paragraph>
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
      </NavList>
    </Outer>
  );
}
