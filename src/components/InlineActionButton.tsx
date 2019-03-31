import * as React from 'react';
import { ActionButton, ActionButtonProps } from './ActionButton';
import { useAction } from '../lib/action/useAction';

export const InlineActionButton = (props: ActionButtonProps) => {
  useAction({ ...props, hidden: true });
  return <ActionButton {...props} />;
};
