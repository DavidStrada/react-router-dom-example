import React, { Component } from 'react'
import {
   BrowserRouter as Router,
  Link
  // etc.
} from 'react-router-dom'
// import { Link } from 'react-router'
import Title from './Title'

class Header extends Component {
  handleChange (evt) {
    this.props.changeTitle(evt.target.value)
  }
  render() {
    return (
      <div>
        <div className="container">
          <nav className="nav has-shadow">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
                </a>
                <Router> 
                 <ul>
                  <Link to='/'  className="nav-item is-tab is-hidden-mobile">Home</Link>                  
                  <Link to='archives' className="nav-item is-tab is-hidden-mobile">Archives</Link>                
                 </ul>
                </Router>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>              
            </div>
          </nav>
        </div>
        <Title title={this.props.title} />
        <input  value={ this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>

    )
  }
}

export default Header;
