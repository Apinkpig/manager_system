import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'

class Modals extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false
    }
  }
  handleOk (type) {
    this.setState({
      [type]: true
    })
  }
  handleCancel (type) {
    this.setState({
      [type]: false
    })
  }
  handleMethods (type) {
    Modal[type]({
      title: '你确定你买东西了吗',
      content: '66666666',
      okText: '确定',
      cancelText: '取消',
      onOk () {
        // alert('你选择了确定')
      },
      onCancel () {
        // alert('你选择了取消')
      }
    })
  }
  render () {
    return (
      <div className='modals'>
        <Card title='基础模态框' className='card-wrap'>
          <Button type='primary' onClick={this.handleOk.bind(this, 'visible1')}>Open</Button>
          <Button type='primary' onClick={this.handleOk.bind(this, 'visible2')}>自定义页脚</Button>
          <Button type='primary' onClick={this.handleOk.bind(this, 'visible3')}>顶部20px</Button>
          <Button type='primary' onClick={this.handleOk.bind(this, 'visible4')}>水平垂直居中</Button>
        </Card>
        <Modal
          title='Open'
          visible={this.state.visible1}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this, 'visible1')}
        >
          <p>我是Open</p>
        </Modal>
        <Modal
          title='自定义页脚'
          visible={this.state.visible2}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this, 'visible2')}
        >
          <p>我是自定义页脚</p>
        </Modal>
        <Modal
          title='顶部20px'
          style={{top: '20px'}}
          visible={this.state.visible3}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this, 'visible3')}
        >
          <p>我是顶部20px</p>
        </Modal>
        <Modal
          title='水平垂直居中'
          wrapClassName='vertical-center-modal'
          visible={this.state.visible4}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this, 'visible4')}
        >
          <p>我是水平垂直居中</p>
        </Modal>
        <Card title='信息确认框' className='card-wrap'>
          <Button type='primary' onClick={this.handleMethods.bind(this, 'confirm')}>confirm</Button>
          <Button type='primary' onClick={this.handleMethods.bind(this, 'info')}>info</Button>
          <Button type='primary' onClick={this.handleMethods.bind(this, 'success')}>success</Button>
          <Button type='primary' onClick={this.handleMethods.bind(this, 'error')}>error</Button>
          <Button type='primary' onClick={this.handleMethods.bind(this, 'warning')}>warning</Button>
        </Card>
      </div>
    )
  }
}

export default Modals
