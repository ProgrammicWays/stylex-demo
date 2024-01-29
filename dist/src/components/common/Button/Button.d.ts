import { Ref } from 'react';
import type { StyleXStyles } from '@stylexjs/stylex';
import React from 'react';
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
export declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
