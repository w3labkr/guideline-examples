// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Typography, { TypographyProps } from '@mui/material/Typography';

export type DescriptionProps = TypographyProps & {
  children: React.ReactNode;
};

export default function Description({
  children,
  variant = 'h5',
  align = 'center',
  color = 'text.secondary',
  paragraph = true,
  ...rest
}: DescriptionProps) {
  return (
    <Typography variant={variant} align={align} color={color} paragraph={paragraph} {...rest}>
      {children}
    </Typography>
  );
}
