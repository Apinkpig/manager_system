import React, { Component } from 'react'
import { Spin, Card, Icon, Alert, Switch } from 'antd'

class Loadings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  handleToggle () {
    this.setState({
      loading: !this.state.loading
    })
  }
  render () {
    const iconLoading = <Icon type='loading' />
    return (
      <div className='spin'>
        <Card title='加载标识' className='card-wrap'>
          <Spin size='small' />
          <Spin />
          <Spin size='large' indicator={iconLoading} />
        </Card>
        <Card title='内容遮罩' className='card-wrap'>
          <Alert
            message='React'
            description='info'
            type='info'
          />
          <Spin spinning={this.state.loading}>
            <Alert
              message='React'
              description='warning'
              type='warning'
            />
          </Spin>
          <Spin tip='加载中...' spinning={this.state.loading}>
            <Alert
              message='React'
              description='error'
              type='error'
            />
          </Spin>
          <Spin tip='加载中...' indicator={iconLoading} spinning={this.state.loading}>
            <Alert
              message='React'
              description='success'
              type='success'
            />
          </Spin>
          <div style={{ marginTop: 16 }} spinning={this.state.loading}>
            <Switch checked={this.state.loading} onChange={this.handleToggle.bind(this)} />
          </div>
        </Card>
      </div>
    )
  }
}

export default Loadings
