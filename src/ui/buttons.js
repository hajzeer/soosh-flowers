import React from 'react';
import styled from 'styled-components';
import { isNot } from 'styled-is';

import { Spinner } from './spinner';

const STATES = {
  LOADING: 'loading'
};

const Inner = styled.span`
  background: #5a393e;
  position: relative;
  left: 25px;
  width: 200px;
  height: 50px;
  color: #f8f7f2;
  border-radius: 10px;
  font-family: 'Dream Avenue', serif;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Outer = styled.button.attrs((p) => ({
  type: p.type || 'button'
}))`
  min-width: ${(p) => (p.width ? p.width : '120px')};
  display: inline-flex;
  border-radius: 0;
  border: none;
  padding: 0;
  appearance: none;
  cursor: pointer;
  text-decoration: none;

  &:hover ${Inner} {
    background: var(--color-text-main);
    color: var(--color-main-background);
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;

    ${Inner} {
      background: #aaa;
      color: #333;
    }
  }
`;

const Text = styled.span`
  position: relative;
  z-index: 2;
  transition: opacity 100ms, transform 100ms;
  white-space: nowrap;

  ${isNot('shown')`
    opacity: 0;
    transform: scale(0.7);
  `};
`;

const Loading = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 50%;
    width: auto;
  }
`;

export const Button = React.forwardRef(
  ({ children, state, width, ...rest }, ref) => (
    <Outer width={width} {...rest} ref={ref}>
      <Inner>
        <Text shown={state !== STATES.LOADING}>{children}</Text>
        {state === STATES.LOADING && (
          <Loading>
            <Spinner />
          </Loading>
        )}
      </Inner>
    </Outer>
  )
);

Button.displayName = 'Button';
