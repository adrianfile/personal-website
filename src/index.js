import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" ;
import Header from "./component/Header";
import Home from "./component/assets/Home";
import About from "./component/assets/About";
import Journey from "./component/assets/Journey";
import Project from "./component/assets/Project";
import "./index.css";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/project" component={ Project } />
      <Route exact path="/journey" component={ Journey } />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
