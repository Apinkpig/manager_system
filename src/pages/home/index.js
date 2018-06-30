import React, { Component } from 'react'

import './index.less'

class Hoem extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='home-wrap'>
        晓枫的个人展示项目（共享单车后台管理系统）
      </div>
    )
  }
}

export default Hoem
