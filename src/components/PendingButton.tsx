import React, { ButtonHTMLAttributes, FC } from 'react';

import { ReactComponent as ButtonLoaderSvg } from '../assets/button-loader.svg';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  isPending: boolean;
}

export const PendingButton: FC<ButtonProps> = ({
  isPending,
  children,
  ...rest
}) => {
  return (
    <button disabled={isPending} {...rest}>
      {isPending ? <ButtonLoader /> : children}
    </button>
  );
};

const ButtonLoader = styled(ButtonLoaderSvg)`
  fill: #fff;
  animation: rotation 2s infinite linear;
  opacity: 0.7;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
