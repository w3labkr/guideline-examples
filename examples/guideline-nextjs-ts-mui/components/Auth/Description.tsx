'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/system';

// Utility for creating styled components.
const MyTypography = styled(MuiTypography)({
  marginTop: 8,
}) as typeof MuiTypography;

export type DescriptionProps = TypographyProps & {
  children: React.ReactNode;
};

export default function Description({ children, component = 'p', variant = 'body2', ...rest }: DescriptionProps) {
  return (
    <MyTypography component={component} variant={variant} {...rest}>
      {children}
    </MyTypography>
  );
}
