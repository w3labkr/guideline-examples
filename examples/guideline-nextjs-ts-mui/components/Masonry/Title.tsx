// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import Typography, { TypographyProps } from '@mui/material/Typography';

type Props = TypographyProps & {
  children: React.ReactNode;
};

function Title({ children, noWrap = true, ...rest }: Props) {
  return (
    <Typography noWrap={noWrap} {...rest}>
      {children}
    </Typography>
  );
}

export default Title;
