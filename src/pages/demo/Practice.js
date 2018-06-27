import React, { Component } from 'react'

import './practice.less'

class Practice extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='practice'>
        <h1>你好，我是practice组件</h1>
      </div>
    )
  }
}

export default Practice
