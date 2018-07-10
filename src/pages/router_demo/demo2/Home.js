import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
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
        {this.props.children}
      </div>
    )
  }
}

export default Home
