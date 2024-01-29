import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from './tokens.stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';

// Purple - Red theme
export const dracula = stylex.createTheme(colors, {
  primary: { default: colors.primary, [DARK]: 'lightpurple' },
  primaryLight: { default: 'pink', [DARK]: 'hotpink' },
  accent: 'red',
  accentLight: { default: '#555', [DARK]: 'black' }
});
