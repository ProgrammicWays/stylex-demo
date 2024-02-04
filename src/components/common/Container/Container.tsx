import React, { forwardRef, Ref } from 'react';

import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { blueTheme } from '#src/styles/themes';
import { themeTokens } from '#root/src/styles/tokens.stylex';

export interface ContainerProps {
  ref?: Ref<HTMLDivElement>;
  kind: 'block' | 'flex';
  style?: StyleXStyles;
  children: React.ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, kind, style, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      {...stylex.props(blueTheme, containerStyles.default, containerStyles[kind], style)}
    >
      {children}
    </div>
  )
);

const containerStyles = stylex.create({
  default: {
    margin: '0 auto',
    maxWidth: 'calc(1190px + 24px)',
    padding: `0 ${themeTokens.xlarge}`,
    width: '100%'
  },
  flex: {
    display: 'flex'
  }
});
