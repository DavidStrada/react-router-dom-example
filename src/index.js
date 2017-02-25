import React from 'react';
import { render } from 'react-dom'
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  // etc.
} from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';
import Layout from './components/Layout'
import Features from './pages/Features'
import Archives from './pages/Archives'

// const history = createBrowserHistory()

render(
  <App />,
  document.getElementById('root')
);
