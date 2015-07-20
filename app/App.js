import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';
import Page1 from './components/Page1.js';
import stylesheets from "./stylesheets/application.scss";

class App extends React.Component{
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <Link to="Page1">PAGE 1</Link>

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

