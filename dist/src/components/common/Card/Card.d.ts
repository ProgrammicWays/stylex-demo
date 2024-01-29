import { AriaAttributes, Ref } from 'react';
import React from 'react';
type CardElProps = JSX.IntrinsicElements['div'] & AriaAttributes;
export interface CardProps extends CardElProps {
    size: 'small' | 'medium' | 'large';
    ref?: Ref<HTMLDivElement>;
}
export declare const Card: React.ForwardRefExoticComponent<Omit<CardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
