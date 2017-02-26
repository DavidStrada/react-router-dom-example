import React, { Component } from 'react'
import {
  Route
} from 'react-router-dom'

class MainContent extends Component {
  render() {
    return (
      <div className="app">
            {this.props.routes.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path} component={route.component}/>    
            ))}
      </div>
    )
  }
}

export default MainContent
