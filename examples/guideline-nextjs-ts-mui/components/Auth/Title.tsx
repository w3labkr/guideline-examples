// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Typography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export type TitleProps = MuiTypographyProps & {
  children: React.ReactNode;
};

export default function Title({ children, component = 'h1', variant = 'h5', ...rest }: TitleProps) {
  return (
    <Typography component={component} variant={variant} {...rest}>
      {children}
    </Typography>
  );
}
