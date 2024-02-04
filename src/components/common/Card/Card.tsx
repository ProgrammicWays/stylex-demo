import { forwardRef, Ref } from 'react';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { themeTokens } from '#src/styles/tokens.stylex';
import { blueTheme } from '#src/styles/themes';

export interface CardProps {
  size: 'small' | 'medium' | 'large';
  ref?: Ref<HTMLDivElement>;
  title: string;
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ size, title, children, ...props }, ref) => (
    <div ref={ref} {...props} {...stylex.props(blueTheme, cardStyles.default, cardStyles[size])}>
      <div {...stylex.props(blueTheme, cardStyles.title)}>{title}</div>
      <div>{children}</div>
    </div>
  )
);

const cardStyles = stylex.create({
  default: {
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: themeTokens.grayLight,
    background: 'white',
    color: themeTokens.grayDarkest,
    padding: themeTokens.small,
    margin: themeTokens.small,
    fontSize: '1.2rem',
    boxShadow: `0px 0px 1px 0px ${themeTokens.gray}`,
    width: '200px'
  },
  title: {
    fontSize: '24px',
    paddingBottom: themeTokens.medium,
    borderBottom: `1px solid ${themeTokens.grayLight}`
  },
  content: {
    padding: themeTokens.small
  },
  small: {
    width: '100px'
  },
  medium: {
    width: '300px'
  },
  large: {
    width: '400px',
    margin: themeTokens.medium,
    padding: themeTokens.medium
  }
});
