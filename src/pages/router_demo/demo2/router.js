import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from '../demo1/About'
import Topic from '../demo1/Topic'
import Main from '../demo1/Main'
import NoMatch from './Nomatch'

class Router extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <HashRouter>
        <Home>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/about' component={About} />
            <Route path='/topic' component={Topic} />
            <Route component={NoMatch} />
          </Switch>
        </Home>
      </HashRouter>
    )
  }
}

export default Router
