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
      MuiTab: {
        root: defaultFont
      }
    }
  });
