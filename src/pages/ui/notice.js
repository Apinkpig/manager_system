import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

class Notice extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  handleNatice=(type, direction)=> {
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: '发工资啦',
      description: '应发工资10000，迟到扣除10天，扣除2000工资，实发8000'
    })
  }
  render () {
    return (
      <div className='notice'>
        <Card title='通知提醒框' className='card-wrap'>
          <Button type='parimary' onClick={()=>this.handleNatice('success')}>success</Button>
          <Button type='info' onClick={()=>this.handleNatice('info')}>info</Button>
          <Button type='error' onClick={()=>this.handleNatice('error')}>error</Button>
          <Button type='warning' onClick={()=>this.handleNatice('warning')}>warning</Button>
        </Card>
        <Card title='位置不同的通知提醒框' className='card-wrap'>
          <Button type='primary' onClick={() => this.handleNatice('success', 'topLeft')}>success</Button>
          <Button type='info' onClick={() => this.handleNatice('info', 'topRight')}>info</Button>
          <Button type='error' onClick={() => this.handleNatice('error', 'bottomLeft')}>error</Button>
          <Button type='warning' onClick={() => this.handleNatice('warning', 'bottomRight')}>warning</Button>
        </Card>
      </div>
    )
  }
}

export default Notice
