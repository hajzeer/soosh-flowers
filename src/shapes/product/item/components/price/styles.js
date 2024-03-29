import styled from 'styled-components';
import is from 'styled-is';

export const Price = styled.span`
  color: var(--color-price);
  position: relative;
  font-weight: bold;
  display: flex;
  font-size: var(--font-listing-price-size);
  align-items: center;

  ${is('discounted')`
    color:var(--color-discount);
  `}
`;

export const BeforePrice = styled.div`
  font-size: 0.8em;
  opacity: 0.7;
  padding: 0 15px 0 5px;
  font-weight: 500;
  text-decoration: line-through;
  color: var(--color-price);
`;

export const Percentage = styled.div`
  background: var(--color-discount);
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  padding: 5px 10px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 15;
`;
