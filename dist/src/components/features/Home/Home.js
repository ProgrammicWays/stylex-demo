import { useEffect, useState } from 'react';
import { Button, Card } from '#src/components/common';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
const buttonStyles = stylex.create({
    default: {
        background: 'blue',
        color: 'white'
    }
});
const styles = stylex.create({
    // Function arguments must be simple identifiers
    // -- No destructuring or default values
    bar: height => ({
        height
        // The function body must be an object literal
        // -- { return {} } is not allowed
    })
});
const HomePage = () => {
    const [isActive, setIsActive] = useState(false);
    const [height, setHeight] = useState(10);
    useEffect(() => {
        setIsActive(true);
        setHeight(100);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Welcome to the Home Page!"),
        React.createElement("div", { ...stylex.props(styles.bar(height)) }, "This is some content specific to the Home Page."),
        React.createElement(Card, { size: 'large' },
            React.createElement(Button, { kind: 'primary', isActive: isActive, onClick: () => alert('clicked') }, "Submit"),
            React.createElement(Button, { kind: 'inverted', style: buttonStyles.default }, "Submit"),
            React.createElement(Button, { kind: 'disabled' }, "Submit"))));
};
export default HomePage;
