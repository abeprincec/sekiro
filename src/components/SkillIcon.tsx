import * as React from 'react';
import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { skillColor } from '../assets/theme';

export const styles = createStyles({
  skillIcon: {
    width: 65,
    height: 46,
    backgroundImage: `url(${require('../assets/skill-points-background.png')})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: skillColor
  }
});

export type SkillIconProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement> & {
    points?: number;
  };

export const SkillIcon = withStyles(styles)(
  ({ classes, points = 0 }: SkillIconProps) => (
    <Typography className={classes.skillIcon}>{points}</Typography>
  )
);
