import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" ;
import Header from "./component/Header";
import Home from "./component/assets/Home";
import "./index.css";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
