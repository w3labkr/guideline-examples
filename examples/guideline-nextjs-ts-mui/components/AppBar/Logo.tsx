'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/system';

// Utility for creating styled components.
const MyLogo = styled(CameraIcon)({
  marginRight: 16,
});

export default function Logo(props: any) {
  return <MyLogo {...props} />;
}
