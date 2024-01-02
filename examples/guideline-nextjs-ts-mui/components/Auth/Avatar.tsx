'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import { styled } from '@mui/system';

// Utility for creating styled components.
const MyAvatar = styled(MuiAvatar)({
  margin: 8,
}) as typeof MuiAvatar;

export type AvatarProps = MuiAvatarProps & {
  children: React.ReactNode;
};

export default function Avatar({ children, ...rest }: AvatarProps) {
  return (
    <MyAvatar sx={{ bgcolor: 'secondary.main' }} {...rest}>
      {children}
    </MyAvatar>
  );
}
