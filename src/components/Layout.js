import React, { Component } from 'react'
// import { Router, Route, Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'

import '../App.css'

class Layout extends Component {
  constructor () {
    super()
    this.state = { title: "Welcome James" }
  }

  changeTitle (title) {
    this.setState({title})
  }

  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({'title': 'Welcome David' } )
  //   }, 2000)
  // }
  render () {
    return (
      <div className="App">
        <Header changeTitle={this.changeTitle.bind(this)} title={ this.state.title }/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout;
