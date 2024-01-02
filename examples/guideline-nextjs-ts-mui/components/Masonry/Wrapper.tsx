// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Container, { ContainerProps } from '@mui/material/Container';

type Props = ContainerProps & {
  children: React.ReactNode;
};

function Wrapper({ children, ...rest }: Props) {
  return <Container {...rest}>{children}</Container>;
}

export default Wrapper;
