import * as React from 'react';
import classNames from 'classnames';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

export const styles = createStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    '&$gutter > *:not(:last-child)': {
      marginRight: 10
    }
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    '&$gutter > *:not(:last-child)': {
      marginBottom: 10
    }
  },
  gutter: {}
});

export type FlexDirection = keyof typeof styles;

export type FlexProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement> & {
    direction?: FlexDirection;
    flex?: number;
    gutter?: boolean;
  };

export const Flex = withStyles(styles)(
  React.forwardRef<HTMLDivElement, FlexProps>(
    (
      {
        classes,
        direction = 'row',
        children,
        className,
        style,
        flex,
        gutter = true,
        ...divProps
      },
      ref
    ) => (
      <div
        {...divProps}
        className={classNames(
          classes[direction],
          { [classes.gutter]: gutter },
          className
        )}
        style={{ flex, ...style }}
        ref={ref}
      >
        {children}
      </div>
    )
  )
);
