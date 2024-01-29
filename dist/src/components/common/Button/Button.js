import { forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
export const Button = forwardRef(({ kind, isActive, style, onClick, ...props }, ref) => (React.createElement("button", { type: 'button', onClick: onClick, ref: ref, ...props, ...stylex.props(buttonStyles.default, buttonStyles[kind], 
    // isActive ? buttonStyles.active : buttonStyles.disabled,
    style) })));
const buttonStyles = stylex.create({
    default: {
        borderRadius: '8px',
        padding: '5px 10px',
        margin: '10px',
        fontSize: '1rem',
        boxShadow: 'none',
        border: 'none'
    },
    active: {
        background: 'green',
        color: 'white'
    },
    primary: {
        background: {
            default: 'orange',
            ':hover': 'black'
        },
        color: {
            default: 'white',
            ':hover': 'orange'
        }
    },
    inverted: {
        background: 'white',
        color: 'orange',
        border: '1px solid orange'
    },
    disabled: {
        background: 'gray',
        pointerEvents: 'none',
        color: '#aaaaaa'
    }
});
