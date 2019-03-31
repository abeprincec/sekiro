import * as React from 'react';
import classNames from 'classnames';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { InputId } from 'responsive-gamepad';
import { texture } from '../functions/texture';

export const styles = createStyles({
  inputIcon: {
    width: 23,
    height: 23,
    ...texture()
  }
});

export type InputIconProps = React.HTMLAttributes<HTMLDivElement> &
  WithStyles<typeof styles> & {
    input: InputId;
  };

export const InputIcon = withStyles(styles)(
  ({ classes, input, style, className, ...divProps }: InputIconProps) => {
    const imageUrl = inputImages[input];
    return (
      <div
        {...divProps}
        style={{ backgroundImage: `url(${imageUrl})`, ...style }}
        className={classNames(classes.inputIcon, className)}
      >
        {imageUrl ? '' : input}
      </div>
    );
  }
);

const inputImages: Partial<Record<InputId, string>> = {
  A: require('../assets/buttons/accept.png'),
  B: require('../assets/buttons/decline.png'),
  X: require('../assets/buttons/option1.png'),
  Y: require('../assets/buttons/option2.png')
};
