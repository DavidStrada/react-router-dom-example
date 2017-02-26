import React, { Component } from 'react'
import { 
   NavLink,
   Link
} from 'react-router-dom'


class Nav extends Component {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <Link className="nav-item"  to="/">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </Link>
            < NavLink to="/" exact activeClassName="is-active" className="nav-item is-tab is-hidden-mobile">Home </NavLink>
            < NavLink to="/archives" activeClassName="is-active" className="nav-item is-tab is-hidden-mobile">Archives</ NavLink>
            < NavLink to="/features" activeClassName="is-active" className="nav-item is-tab is-hidden-mobile">Features</ NavLink>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </nav>
    )
  }
}

export default Nav
