'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { styled } from '@mui/system';

// Utility for creating styled components.
const MyBox = styled(MuiBox)({
  paddingTop: 64,
  paddingBottom: 48,
}) as typeof MuiBox;

export type WrapperProps = MuiBoxProps & {
  children: React.ReactNode;
};

export default function Wrapper({ children, ...rest }: WrapperProps) {
  return (
    <MyBox sx={{ bgcolor: 'background.paper' }} {...rest}>
      {children}
    </MyBox>
  );
}
