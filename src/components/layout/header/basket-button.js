import React from 'react';
import { LayoutContext } from '@crystallize/react-layout';
import { useTranslation } from 'next-i18next';

import { useBasket } from 'components/basket';


import { Btn, BasketQuantity, ImageButtonDiv } from './styles';
import Image from "next/image";

const BasketButton = () => {
  const { totalQuantity } = useBasket();
  const layout = React.useContext(LayoutContext);
  const { t } = useTranslation('basket');

  return (
    <Btn
      onClick={layout?.actions?.showRight}
      type="button"
      aria-label={t('title')}
    >
      <ImageButtonDiv>
        <Image src="/static/1.png" width={100} height={100}/>
      </ImageButtonDiv>
      <BasketQuantity>{totalQuantity}</BasketQuantity>
    </Btn>
  );
};

export default BasketButton;
