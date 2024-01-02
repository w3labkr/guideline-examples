'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/system';

// Utility for creating styled components.
const MyButton = styled(MuiButton)({
  marginTop: 24,
  marginBottom: 16,
}) as typeof MuiButton;

export type ButtonProps = MuiButtonProps & {
  children: React.ReactNode;
};

export default function Button({
  children,
  variant = 'contained',
  size = 'large',
  fullWidth = true,
  ...rest
}: ButtonProps) {
  return (
    <MyButton variant={variant} size={size} fullWidth={fullWidth} {...rest}>
      {children}
    </MyButton>
  );
}
