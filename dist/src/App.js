import { Routes, Route } from 'react-router-dom';
import Home from './components/features/Home/Home';
import React from 'react';
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(Home, null) }))));
};
export default App;
