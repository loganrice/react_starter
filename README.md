# React Starter Project Using Webpack

1. Create a new project directory
2. Inside the directory ```npm init```
3. ```npm install --save-dev react webpack react-router react-hot-loader
webpack-dev-server babel-loader style-loader css-loader sass-loader```
4. Create the directory and files:

Project
  +_app-+
  |     |_App.js
  |     |_components-+
  |     |            |_Main.js
  |     |_config-+
  |     |        |_routes.js
  |     |_utils-+
  |             |_helpers.js
  |
  |_public-+
           |_index.html
  
            
5. Update the webpack.config.js file:

```
var webpack = require('webpack');
module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './app/App.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
```
6. Update the package.json file:

```
  "scripts": {
    "start": "webpack-dev-server --hot --progress --colors",
    "build": "webpack --progress --colors"
  },
```
7. Update the index.html file:

```
<!doctype html>  
<html lang="en">  
  <head>
    <meta charset="utf-8">
    <title>New React App</title>
  </head>
  <body>
    <section id="react"></section>
    <script src="bundle.js"></script>
  </body>
</html>  
```
8. Update App.js

```
import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';
import stylesheets from "./stylesheets/application.scss";

class App extends React.Component{
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <Link to="Page1">Page 1</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
};

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="Page1" path="/page1" handler={Page1}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});

```

10. Create a login.js component in the components directory:

```
import React from 'react';

let Login = React.createClass({
  render() {
    return(
      <div>
        Welcome Login
      </div>
    )
  }
});

export default Login;

```
11. Run npm start in terminal to see if it is working.
http://localhost:8080/webpack-dev-server/#


