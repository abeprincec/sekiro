import { createMuiTheme } from '@material-ui/core';
import { fonts } from './fonts';
import { texture } from '../functions/texture';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const defaultColor = '#b9b9b8';
const defaultFont = {
  fontSize: '28px !important',
  textTransform: 'none',
  fontWeight: 'normal',
  color: defaultColor
} as CSSProperties;

export const createSekiroTheme = () =>
  createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: `"${fonts.Default}", "Helvetica", "Arial", "sans-serif"`,
      allVariants: {
        color: defaultColor,
        textShadow: '3px 3px 4px #000000'
      },
      body1: { fontSize: 20 },
      body2: defaultFont
    },
    overrides: {
      MuiDivider: {
        root: {
          height: 30,
          ...texture(require('./divider.png'))
        }
      },
      MuiTabs: {
        root: {
          minHeight: 0,
          overflow: 'visible'
        },
        indicator: {
          display: 'none'
        },
        fixed: {
          overflow: 'visible',
          overflowX: 'visible'
        }
      },
      MuiTab: {
        root: {
          ...defaultFont,
          minHeight: 0,
          position: 'relative',
          overflow: 'visible',
          marginRight: 35,
          '&:before': {
            ...texture(require('./tab2.png')),
            content: '" "',
            display: 'block',
            position: 'absolute',
            top: -15,
            right: -20,
            bottom: -15,
            left: -10
          }
        },
        selected: {
          '&:before': {
            ...texture(require('./tab.png')),
            top: -15,
            right: -20,
            bottom: -5,
            left: -10
          }
        },
        labelContainer: {
          padding: '0px !important',
          lineHeight: '1em',
          position: 'relative'
        },
        label: {
          color: '#fffcb3',
          textShadow: '1px 1px 3px #a24f08'
        }
      }
    }
  });
