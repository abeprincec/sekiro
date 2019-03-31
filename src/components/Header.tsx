import * as React from 'react';
import classNames from 'classnames';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { texture } from '../functions/texture';

const variants = (theme: Theme) => ({
  noEdge: {
    background: fade(theme.palette.common.black, 0.75)
  },
  singleEdge: {
    ...texture(require('../assets/header-background1.png')),
    height: 55
  },
  doubleEdge: {
    ...texture(require('../assets/header-background2.png')),
    justifyContent: 'center'
  } as CSSProperties
});

const styles = (theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: `5px 20px`,
      '&:not(:last-child)': {
        marginBottom: 10
      }
    },
    ...variants(theme)
  });

export type HeaderVariant = keyof ReturnType<typeof variants>;

export type HeaderProps = WithStyles<typeof styles> &
  React.PropsWithChildren<{
    variant?: HeaderVariant;
  }>;

export const Header = withStyles(styles)(
  ({ classes, children, variant = 'singleEdge' }: HeaderProps) => (
    <header className={classNames(classes.header, classes[variant])}>
      {children}
    </header>
  )
);
