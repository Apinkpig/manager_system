import React, { Component } from 'react'
import { Button } from 'antd'
import './practice.less'

class Practice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleAdd () {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      <div className='practice'>
        <h1>你好，我是practice组件</h1>
        <Button onClick={this.handleAdd.bind(this)}>加1</Button>
        {this.state.count}
      </div>
    )
  }
}

export default Practice
