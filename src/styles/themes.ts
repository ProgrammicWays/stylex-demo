import * as stylex from '@stylexjs/stylex';
import { themeTokens } from './tokens.stylex';

// Red theme
export const redTheme = stylex.createTheme(themeTokens, {
  accent: '#8C54FB',
  accentLight: '#BC9BFD',
  accentLightest: '#EEE6FE',
  accentDark: '#6605C7',
  accentDarkest: '#230264',
  primary: '#CE4F51',
  primaryLight: '#E9AFB0',
  primaryLightest: '#F9EBEB',
  primaryDark: '#8C2728',
  primaryDarkest: '#501617',
  gray: '#A6A6A6',
  grayLight: '#D9D9D9',
  grayLightest: '#EBEBEB',
  grayDark: '#808080',
  grayDarkest: '#404040',
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px'
});

// Blue theme
export const blueTheme = stylex.createTheme(themeTokens, {
  primary: '#8C54FB',
  primaryLight: '#BC9BFD',
  primaryLightest: '#EEE6FE',
  primaryDark: '#6605C7',
  primaryDarkest: '#230264',
  accent: '#CE4F51',
  accentLight: '#E9AFB0',
  accentLightest: '#F9EBEB',
  accentDark: '#8C2728',
  accentDarkest: '#501617',
  gray: '#A6A6A6',
  grayLight: '#D9D9D9',
  grayLightest: '#EBEBEB',
  grayDark: '#808080',
  grayDarkest: '#404040',
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px'
});
