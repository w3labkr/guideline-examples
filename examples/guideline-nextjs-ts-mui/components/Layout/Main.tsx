// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Box, { BoxProps } from '@mui/material/Box';

export type MainProps = BoxProps & {
  children: React.ReactNode;
};

export default function Main({ children, component = 'main', ...rest }: MainProps) {
  return (
    <Box component={component} {...rest}>
      {children}
    </Box>
  );
}
