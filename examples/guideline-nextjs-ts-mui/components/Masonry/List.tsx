'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Masonry, { MasonryProps } from '@mui/lab/Masonry';

type Props = MasonryProps & {
  children: React.ReactNode;
};

function List({ children, ...rest }: Props) {
  return <Masonry {...rest}>{children}</Masonry>;
}

export default List;
