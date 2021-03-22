import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Switch, Route, hashHistory as History } from "react-router-dom" ;
import Header from "./component/Header";
import Home from "./component/assets/Home";
import About from "./component/assets/About";
import Journey from "./component/assets/Journey";
import Project from "./component/assets/Project";
import "./index.css";

ReactDOM.render(
  <Router history={History}>
    <Header />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/project" component={ Project } />
      <Route path="/journey" component={ Journey } />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
