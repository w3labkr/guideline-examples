// The library for web and native user interfaces.
import * as React from 'react';

// The React Framework.
import NextLink from 'next/link';

// Move faster with intuitive React UI tools.
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

export type BrandProps = MuiLinkProps & {
  children: React.ReactNode;
};

export default function Brand({
  children,
  component = NextLink,
  color = 'inherit',
  underline = 'none',
  noWrap = true,
  ...rest
}: BrandProps) {
  return (
    <MuiLink component={component} color={color} underline={underline} noWrap={noWrap} {...rest}>
      {children}
    </MuiLink>
  );
}
