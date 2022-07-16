import React from 'react';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import { useSettings } from 'components/settings-context';

import { Outer, Anchor, NavList, HelperDiv, Paragraph } from './styles';

export default function Footer() {
  const { t } = useTranslation('common');
  const { mainNavigation } = useSettings();

  return (
    <Outer>
      <HelperDiv>
        <Paragraph>©{new Date().getFullYear()} SOOSH FLOWERS STORE</Paragraph>
        <Paragraph>Design by Breath Design Studio</Paragraph>
      </HelperDiv>
      <NavList>
        <Link href="/">
          <Anchor>Delivery & Returns</Anchor>
        </Link>
        <Link href="/">
          <Anchor>Ethical Policy</Anchor>
        </Link>
        <Link href="/">
          <Anchor>Contact</Anchor>
        </Link>
      </NavList>
    </Outer>
  );
}
