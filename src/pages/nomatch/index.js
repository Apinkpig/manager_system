import React, { Component } from 'react'

class NoMatch extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div>
        <h1 style={{color: 'red'}}>404 页面找不到了，确认您输入地址是否正确</h1>
      </div>
    )
  }
}

export default NoMatch
