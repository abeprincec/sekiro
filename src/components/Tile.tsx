import * as React from 'react';
import classNames from 'classnames';
import { BoxProps } from './Box';
import { createStyles, Omit, WithStyles, withStyles } from '@material-ui/core';
import { Dock } from './Dock';
import { useActionSpatial } from '../lib/spatial/useActionSpatial';
import { SpatialMeta } from '../lib/spatial/SpatialMeta';
import { Action } from '../lib/action/Action';
import { Flex } from './Flex';
import { texture } from '../functions/texture';

export const variants = {
  square: texture(require('../assets/square.png')),
  octagon: texture(require('../assets/octagon.png'))
};

export const sizes = {
  small: {
    width: 110,
    height: 110
  },
  large: {
    width: 180,
    height: 180
  }
};

export const styles = createStyles({
  ...variants,
  ...sizes,
  tile: {
    position: 'relative'
  },
  activeOverlay: texture(require('../assets/circle.png'))
});

export type TileVariant = keyof typeof variants;

export type TileSize = keyof typeof sizes;

export type TileProps = Omit<BoxProps, 'classes'> &
  WithStyles<typeof styles> & {
    size?: TileSize;
    variant?: TileVariant;
    action?: Action;
    meta?: SpatialMeta;
  };

export const Tile = withStyles(styles)(
  ({
    classes,
    children,
    size = 'small',
    variant = 'square',
    className,
    action,
    meta,
    ...boxProps
  }: TileProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isActive = useActionSpatial(ref, action, meta);
    return (
      <Flex
        innerRef={ref}
        className={classNames(
          classes.tile,
          classes[variant],
          classes[size],
          className
        )}
        {...boxProps}
      >
        {children}
        {isActive && <Dock className={classes.activeOverlay} />}
      </Flex>
    );
  }
);
