import React, { Component } from 'react'
import {
   BrowserRouter as Router
} from 'react-router-dom'

// Pages Routes
import {routes} from './routes/routes'

// Styles
import './App.css'

// Pages Navigation
import Nav from './partials/Nav'

// Pages Main Content
import MainContent from './partials/MainContent'

// Pages Footer
import Footer from './partials/Footer'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav /> 

          <MainContent routes={routes} />

          <Footer />
        </div>
      </Router>


    )
  }
}

export default App;
