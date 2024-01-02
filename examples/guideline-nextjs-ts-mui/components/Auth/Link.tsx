// The library for web and native user interfaces.
import * as React from 'react';

// The React Framework.
import NextLink from 'next/link';

// Move faster with intuitive React UI tools.
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

export type LinkProps = MuiLinkProps & {
  children: React.ReactNode;
};

export default function Link({ children, component = NextLink, variant = 'body2', ...rest }: LinkProps) {
  return (
    <MuiLink component={component} variant={variant} {...rest}>
      {children}
    </MuiLink>
  );
}
