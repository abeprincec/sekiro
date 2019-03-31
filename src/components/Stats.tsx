import * as React from 'react';
import { Box } from './Box';
import { Divider } from '@material-ui/core';
import { Row } from './Row';
import { Column } from './Column';
import { SkillProgressBar } from './SkillProgressBar';
import { HealthBar } from './HealthBar';
import { Resurrections } from './Resurrections';
import { StatsStore } from '../state/StatsStore';
import { Line } from './Line';
import { skillColor } from '../assets/theme';

export type StatsProps = React.HTMLAttributes<HTMLDivElement> & {
  stats: StatsStore;
};

export const Stats = ({ stats, style, ...divProps }: StatsProps) => (
  <div
    style={{
      ...style,
      display: 'flex',
      flex: 1,
      width: '100%',
      flexDirection: 'column'
    }}
    {...divProps}
  >
    <Divider />
    <Row flex={1}>
      <Box direction="row" flex={3}>
        <Box flex={5}>
          <Resurrections />
          <HealthBar value={stats.health} />
        </Box>
        <Box flex={4}>
          <Row>
            <img src={require('../assets/unseen-aid-icon.png')} height={75} />
            <Column>
              <Line>Unseen Aid</Line>
              <Line>{stats.unseenAid}%</Line>
            </Column>
          </Row>
        </Box>
      </Box>
      <Box direction="row" flex={3}>
        <Box flex={5}>
          <Row flex={1}>
            <img src={require('../assets/vitality-icon.png')} height={29} />
            <Row flex={1} align="space-between">
              <Line>Vitality</Line>
              <Line>{stats.vitality}</Line>
            </Row>
          </Row>
          <Row flex={1}>
            <img src={require('../assets/attack-icon.png')} height={29} />
            <Row flex={1} align="space-between">
              <Line>Attack</Line>
              <Line>{stats.attack}</Line>
            </Row>
          </Row>
        </Box>
        <Box
          flex={6}
          style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}
        >
          <Row style={{ width: '100%' }} valign="center" align="space-between">
            <SkillProgressBar flex={1} points={1} value={0.67} />
            <Line variant="body1" style={{ color: skillColor }}>
              {stats.exp}
            </Line>
          </Row>
          <Line variant="body1" style={{ color: skillColor }}>
            to next Skill Point {stats.expForNextSkill}
          </Line>
        </Box>
      </Box>
      <Box flex={1} style={{ justifyContent: 'space-between' }}>
        <Box direction="row" style={{ justifyContent: 'space-between' }}>
          <img src={require('../assets/spirit-emblem-icon.png')} height={35} />
          <Line>
            {stats.emblems}/{stats.maxEmblems} ({stats.emblemsInStorage})
          </Line>
        </Box>
        <Box>
          <Row flex={1} align="space-between">
            <img src={require('../assets/money-icon.png')} height={23} />
            <Line>{stats.money}</Line>
          </Row>
        </Box>
      </Box>
    </Row>
    <Divider />
  </div>
);
