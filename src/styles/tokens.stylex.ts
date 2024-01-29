import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
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
  gray: '#CE4F51',
  grayLight: '#D9D9D9',
  grayLightest: '#EBEBEB',
  grayDark: '#808080',
  grayDarkest: '#404040',
  black: '#333333',
  white: '#FFFFFF'
});

export const spacing = stylex.defineVars({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px'
});
