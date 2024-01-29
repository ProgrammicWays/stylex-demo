import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
const rootElement = document.querySelector("#root");
if (!rootElement)
    throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(Router, null,
        React.createElement(App, null))));
