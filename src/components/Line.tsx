import * as React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { Typography } from '@material-ui/core';

export const Line = ({ children, style, ...props }: TypographyProps) => (
  <Typography style={{ ...style, lineHeight: '1em' }} {...props}>
    {children}
  </Typography>
);
