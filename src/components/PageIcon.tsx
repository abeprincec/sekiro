import * as React from 'react';
import classNames from 'classnames';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { texture } from '../functions/texture';

export const styles = createStyles({
  pageIcon: {
    width: 20,
    height: 21,
    ...texture(require('../assets/page-icon2.png'))
  },
  active: {
    ...texture(require('../assets/page-icon1.png'))
  }
});

export type PageIconProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
  };

export const PageIcon = withStyles(styles)((props: PageIconProps) => {
  const { className, classes, active, ...divProps } = props;
  return (
    <div
      {...divProps}
      className={classNames(classes.pageIcon, className, {
        [classes.active]: active
      })}
    />
  );
});
