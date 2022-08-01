import React from 'react';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import { responsive, H3 } from 'ui';

const Outer = styled.div`
  width: 300px;

  p {
    margin-bottom: 0.5rem;
  }

  ${responsive.xs} {
    width: 100%;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
`;

const BillingDetails = ({ order }) => {
  const { t } = useTranslation('customer');
  const { email, street, street2, country, postalCode, city, phone } =
    order.customer.addresses?.[0] || {};

  console.log(order.customer.addresses[0]);
  return (
    <Outer>
      <Inner>
        <H3>Billing Details</H3>
        <p>
          {t('name')}:{' '}
          <strong>
            {order.customer.firstName} {order.customer.lastName}
          </strong>
        </p>
        <p>
          {t('email')}: <strong>{email}</strong>
        </p>
        <p>
          {t('phone number')}: <strong>{phone}</strong>
        </p>
        <p>{t('address')}: </p>
        <p>
          {t('street')}:{' '}
          <strong>
            {street}, {street2}
          </strong>
        </p>
        <p>
          {t('city and postal code')}:{' '}
          <strong>
            {city}, {postalCode}
          </strong>
        </p>
        <p>
          {t('country')}: <strong>{country}</strong>
        </p>
      </Inner>
    </Outer>
  );
};

export default BillingDetails;
