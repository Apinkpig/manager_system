import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import './index.less'

class Modals extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render () {
    return (
      <div>
        <Card title='基础模态框'>
          <Button type='primary' onClick={}>Open</Button>
          <Button type='primary'>自定义页脚</Button>
          <Button type='primary'>顶部20px</Button>
          <Button type='primary'>水平垂直居中</Button>
        </Card>
        <Modal
          title='React-project'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>欢迎</p>
        </Modal>
        <Card title='信息确认框'>
          <Button type='primary'>Open</Button>
          <Button type='primary'>自定义页脚</Button>
          <Button type='primary'>顶部20px</Button>
          <Button type='primary'>水平垂直居中</Button>
        </Card>
      </div>
    )
  }
}

export default Modals
