'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import { OverridableComponent } from '@mui/material/OverridableComponent';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { styled } from '@mui/system';

// Utility for creating styled components.
// const MyBox = styled(MuiBox)<MuiBoxProps>({
const MyBox = styled(MuiBox)({
  width: '100%',
  marginTop: 24,
}) as typeof MuiBox;

interface FormProps extends React.ComponentProps<'form'> {
  // children?: React.ReactNode;
}

interface FormTypeMap {
  props: FormProps;
  defaultComponent: 'form';
}

export default function Form(props: OverridableComponent<FormTypeMap>) {
  const RootComponent = props.component || 'form';

  return <RootComponent {...props}>{props?.children}</RootComponent>;
}

// export default function Form({ children, ...rest }: FormProps) {
//   return (
//     <MyBox {...rest} component="form">
//       {children}
//     </MyBox>
//   );
// }
