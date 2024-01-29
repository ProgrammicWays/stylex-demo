import { forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
export const Card = forwardRef(({ size, ...props }, ref) => (React.createElement("div", { ref: ref, ...props, ...stylex.props(cardStyles.default, cardStyles[size]) })));
const cardStyles = stylex.create({
    default: {
        borderRadius: '8px',
        border: '1px solid #ccc',
        background: '#fff',
        color: '#333',
        padding: '5px',
        margin: '10px',
        fontSize: '1rem',
        boxShadow: 'none',
        width: '200px'
    },
    small: {
        width: '100px'
    },
    medium: {
        width: '200px'
    },
    large: {
        width: '400px'
    }
});
