import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topic from './Topic'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div>
        <HashRouter>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/topic'>Topic</Link>
              </li>
            </ul>
            <br />
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/about' component={About} />
              <Route path='/topic' component={Topic} />
            </Switch>
            
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default Home
