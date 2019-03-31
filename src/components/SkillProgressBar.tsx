import * as React from 'react';
import { Row, RowProps } from './Row';
import { ProgressBar, ProgressBarProps } from './ProgressBar';
import { SkillIcon, SkillIconProps } from './SkillIcon';
import { Omit } from '@material-ui/core';
import { skillColor } from '../assets/theme';

export type SkillProgressBarProps = Omit<RowProps, 'classes'> &
  Pick<SkillIconProps, 'points'> &
  Pick<ProgressBarProps, 'value'>;

export const SkillProgressBar = (props: SkillProgressBarProps) => {
  const { points, value, ...rowProps } = props;
  return (
    <Row valign="center" {...rowProps}>
      <SkillIcon points={points} />
      <ProgressBar
        flex={1}
        value={value}
        color={skillColor}
        style={{ height: 5 }}
      />
    </Row>
  );
};
