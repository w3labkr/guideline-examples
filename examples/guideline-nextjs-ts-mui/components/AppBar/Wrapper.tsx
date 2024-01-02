// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';

export type WrapperProps = ToolbarProps & {
  children: React.ReactNode;
};

export default function Wrapper({ children, ...rest }: WrapperProps) {
  return (
    <Toolbar sx={{ bgcolor: 'background.paper' }} {...rest}>
      {children}
    </Toolbar>
  );
}
