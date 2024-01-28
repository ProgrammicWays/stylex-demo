# stylex Demo

## Dependencies and Installations

a. Install React, Babel, Webpack, and other needed packages

    npm install --save-dev --save-exact react react-dom react-router-dom @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader file-loader

b. Install Typescript and dependencies

    npm install --save-dev --save-exact typescript @types/react @types/react-dom @babel/preset-typescript

c. Creating start and build scripts
Now, in the package.json file, add these lines to your scripts section:

    "start": "webpack serve --open",
    "build": "webpack --config webpack.config.js --mode production"
