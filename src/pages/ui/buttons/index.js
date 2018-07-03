import React, { Component } from 'react'
import { Card, Button, Radio } from 'antd'
import './index.less'

class Buttons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  // 打开load状态
  handleOpenLoad () {
    this.setState({
      loading: true
    })
  }
  // 关闭loading状态
  handleCloseLoad () {
    this.setState({
      loading: false
    })
  }
  handleChange (e) {
    this.setState({
      size: e.target.value
    })
  }
  render () {
    return (
      <div className='buttons'>
        <Card title='基础按钮' className='card-wrap'>
          <Button type='primary'>primary</Button>
          <Button>primary</Button>
          <Button type='dashed'>primary</Button>
          <Button disabled>primary</Button>
          <Button type='danger'>primary</Button>
        </Card>
        <Card title='图形按钮' className='card-wrap'>
          <Button icon='plus'>创建</Button>
          <Button icon='edit'>编辑</Button>
          <Button icon='delete'>删除</Button>
          <Button shape='circle' icon='search' />
          <Button type='primary' icon='search'>搜索</Button>
          <Button type='primary' icon='download'>下载</Button>
        </Card>
        <Card title='Loading' className='card-wrap'>
          <Button type='primary' loading={this.state.loading}>确定</Button>
          <Button type='primary' shape='circle' loading={this.state.loading} />
          <Button shape='circle' loading={this.state.loading} />
          <Button onClick={this.handleOpenLoad.bind(this)}>点击加载</Button>
          <Button type='primary' onClick={this.handleCloseLoad.bind(this)}>关闭</Button>
        </Card>
        <Card title='control控制按钮'>
          <Button.Group>
            <Button type='primary' icon='left'>后退</Button>
            <Button type='primary' icon='right'>前进</Button>
          </Button.Group>
        </Card>
        <Card title='按钮尺寸' className='card-wrap'>
          <Radio.Group value={this.state.size} onChange={this.handleChange.bind(this)}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </Radio.Group>
          <Button type='primary' size={this.state.size}>kmm</Button>
          <Button size={this.state.size}>kmm</Button>
        </Card>
      </div>
    )
  }
}

export default Buttons
