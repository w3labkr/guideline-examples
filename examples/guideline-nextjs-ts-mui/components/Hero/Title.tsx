// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Typography, { TypographyProps } from '@mui/material/Typography';

export type TitleProps = TypographyProps & {
  children: React.ReactNode;
};

export default function Title({
  children,
  component = 'h1',
  variant = 'h2',
  align = 'center',
  color = 'text.primary',
  gutterBottom = true,
  ...rest
}: TitleProps) {
  return (
    <Typography
      component={component}
      variant={variant}
      align={align}
      color={color}
      gutterBottom={gutterBottom}
      {...rest}
    >
      {children}
    </Typography>
  );
}
