'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// The React Framework.
import NextImage, { ImageProps as NextImageProps } from 'next/image';

// Move faster with intuitive React UI tools.
import { styled } from '@mui/system';

// Utility for creating styled components.
const MyImage = styled(NextImage)({
  display: 'block',
  width: '100%',
  height: 'auto',
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
}) as typeof NextImage;

export type ImageProps = NextImageProps;

export default function Image({
  src = '',
  alt = '',
  quality = 75,
  width = 0,
  height = 0,
  sizes = '100vw',
  priority = true,
  ...rest
}: ImageProps) {
  return (
    <MyImage
      src={src}
      alt={alt}
      quality={quality}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      {...rest}
    />
  );
}
