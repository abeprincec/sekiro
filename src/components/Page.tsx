import * as React from 'react';
import classNames from 'classnames';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { texture } from '../functions/texture';

export const styles = createStyles({
  page: {
    ...texture(require('../assets/page.png')),
    padding: `20px 30px`
  }
});

export type PageProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement>;

export const Page = withStyles(styles)((props: PageProps) => {
  const { classes, className, children, ...divProps } = props;
  return (
    <div className={classNames(classes.page, className)} {...divProps}>
      {children}
    </div>
  );
});
