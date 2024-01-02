'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// The React Framework.
import NextLink from 'next/link';

// Move faster with intuitive React UI tools.
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/system';

// Utility for creating styled components.
const MyButton = styled(MuiButton)({
  whiteSpace: 'nowrap',
  minWidth: 'auto',
}) as typeof MuiButton;

export type LinkButtonProps = MuiButtonProps & {
  children: React.ReactNode;
};

export default function LinkButton({
  children,
  LinkComponent = NextLink,
  color = 'inherit',
  ...rest
}: LinkButtonProps) {
  return (
    <MyButton LinkComponent={LinkComponent} color={color} {...rest}>
      {children}
    </MyButton>
  );
}
