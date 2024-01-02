// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Box, { BoxProps } from '@mui/material/Box';

type Props = BoxProps & {
  children: React.ReactNode;
};

function ListItem({ children, ...rest }: Props) {
  return <Box {...rest}>{children}</Box>;
}

export default ListItem;
