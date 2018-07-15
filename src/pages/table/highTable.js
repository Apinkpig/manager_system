import React, { Component } from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import axios from '../../axios/index'
// import Utils from '../../utils/util'

class HighTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource1: '',
      dataSource2: ''
    }
  }
  componentDidMount () {
    this.request1()
    this.request2()
  }
  request1 () {
    axios.ajax({
      url: '/table/list',
      method: 'get',
      data: {
        params: {
          page: 1
        }
      }
    }).then((res) => {
      if (res.code === 0) {
        this.setState({
          dataSource1: res.result.list
        })
      }
    })
  }
  request2 () {
    axios.ajax({
      url: '/table/high/list',
      method: 'get',
      data: {
        params: {
          page: 1
        }
      }
    }).then((res) => {
      if (res.code === 0) {
        this.setState({
          dataSource2: res.result.list
        })
      }
    })
  }
  handleChange (pagination, filters, sorter) {
    this.setState({
      sorterOrder: sorter.order
    })
  }
  render () {
    const columns1 = [
      {
        title: 'id',
        width: 60,
        dataIndex: 'id'
      },
      {
        title: '用户名',
        width: 60,
        dataIndex: 'username'
      },
      {
        title: '性别',
        width: 60,
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        width: 60,
        dataIndex: 'age'
      },
      {
        title: '爱好',
        width: 60,
        dataIndex: 'interest',
        render (data) {
          let config = {
            '1': '学习',
            '2': '打篮球',
            '3': '游泳',
            '4': '打游戏',
            '5': '写代码'
          }
          return config[data]
        }
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 150,
        dataIndex: 'address'
      },
      {
        title: '时间',
        width: 80,
        dataIndex: 'time'
      }
    ]
    const columns2 = [
      {
        title: 'id',
        width: 60,
        dataIndex: 'id'
      },
      {
        title: '用户名',
        width: 60,
        dataIndex: 'username'
      },
      {
        title: '性别',
        width: 60,
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        width: 60,
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age
      },
      {
        title: '爱好',
        width: 60,
        dataIndex: 'interest',
        render (data) {
          let config = {
            '1': '学习',
            '2': '打篮球',
            '3': '游泳',
            '4': '打游戏',
            '5': '写代码'
          }
          return config[data]
        }
      },
      {
        title: '地址',
        width: 150,
        dataIndex: 'address'
      }
    ]
    return (
      <div>
        <Card title='竖直滚动条'>
          <Table
            bordered
            columns={columns1}
            dataSource={this.state.dataSource1}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
        </Card>
        <Card title='升序和降序'>
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource2}
            pagination={{ pageSize: 50 }}
            onChange={this.handleChange.bind(this)}
          />
        </Card>
      </div>
    )
  }
}

export default HighTable
