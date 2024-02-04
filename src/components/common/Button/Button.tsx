import { forwardRef, Ref } from 'react';

import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import React from 'react';
import { blueTheme, redTheme } from '#src/styles/themes';
import { themeTokens } from '#root/src/styles/tokens.stylex';

export interface ButtonProps {
  kind: 'primary' | 'inverted' | 'disabled';
  onClick?: () => void;
  isActive?: boolean;
  ref?: Ref<HTMLButtonElement>;
  style?: StyleXStyles<{
    background?: string;
    color?: string;
  }>;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ kind, children, isActive, style, onClick, ...props }, ref) => (
    <button
      type='button'
      onClick={onClick}
      ref={ref}
      {...props}
      {...stylex.props(
        redTheme,
        buttonStyles.default,
        buttonStyles[kind],
        // isActive ? buttonStyles.active : buttonStyles.disabled,
        style
      )}
    >
      {children}
    </button>
  )
);

const buttonStyles = stylex.create({
  default: {
    borderRadius: '8px',
    padding: '10px 20px',
    margin: '10px',
    fontSize: '1.2rem',
    boxShadow: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  active: {
    background: themeTokens.accent,
    color: themeTokens.accentLightest
  },
  primary: {
    background: {
      default: themeTokens.primary,
      ':hover': themeTokens.primaryDark
    },
    color: {
      default: themeTokens.primaryLightest,
      ':hover': themeTokens.primaryLightest
    }
  },
  inverted: {
    background: themeTokens.primaryLightest,
    color: themeTokens.primary,
    border: `1px solid ${themeTokens.primary}`
  },
  disabled: {
    background: themeTokens.grayLight,
    pointerEvents: 'none',
    color: themeTokens.grayDark
  }
});
