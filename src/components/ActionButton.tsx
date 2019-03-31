import * as React from 'react';
import { Row, RowProps } from './Row';
import { Omit, Typography } from '@material-ui/core';
import { Action } from '../lib/action/Action';
import { InputIcon } from './InputIcon';

export type ActionButtonProps = Action & Omit<RowProps, 'classes'>;

export const ActionButton = ({
  input,
  name,
  description,
  hidden,
  callback,
  ...rowProps
}: ActionButtonProps) => (
  <Row valign="center" {...rowProps}>
    <InputIcon input={input} />
    <Typography noWrap component="div">
      {name}
    </Typography>
  </Row>
);
