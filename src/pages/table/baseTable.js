import React, { Component } from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/util'

class BaseTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource2: []
    }
    this.params = {
      page: 1
    }
  }
  componentDidMount () {
    const data = [
      {
        id: 1,
        username: '王大叔',
        sex: '男',
        age: 44,
        birthday: '1985-09-11',
        address: '天津市',
        time: '12:03'
      },
      {
        id: 2,
        username: '李大叔',
        sex: '男',
        age: 55,
        birthday: '1965-09-11',
        address: '天津市',
        time: '12:03'
      }
    ]
    data.map((item, index) => {
      item.key = index
    })
    this.setState({
      dataSource: data
    })
    this.request()
    // 测试方法：让dataSource在3000ms后再加载
    // function timeout (ms) {
    //   const dataSource = [
    //     {
    //       key: '1',
    //       name: '王大叔',
    //       age: 44,
    //       education: '高中',
    //       hobby: '下象棋'
    //     },
    //     {
    //       key: '2',
    //       name: '李大叔',
    //       age: 52,
    //       education: '本科',
    //       hobby: '下象棋'
    //     }
    //   ]
    //   return new Promise((resolve, reject) => {
    //     setTimeout(resolve, ms, dataSource)
    //   })
    // }
    // timeout(3000).then((dataSource) => {
    //   this.setState({
    //     dataSource
    //   })
    // })
  }
  request () {
    let _this = this
    axios.ajax({
      url: '/table/list',
      method: 'get',
      timeout: 5000,
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      if (res.code === 0) {
        res.result.list.map((item, index) => {
          item.key = index
        })
        this.setState({
          dataSource2: res.result.list,
          selectedRowKeys: [],
          selectRows: null,
          pagination: Utils.pagination(res, (current) => {
            _this.params.page = current
            this.request()
          })
        })
      }
    })
  }
  onRowClick (record, index) {
    let selectKey = [index]
    // Modal.info({
    //   title: '用户信息',
    //   content: `用户名${record.username}、用户年龄${record.age}`
    // })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }
  // 多选删除操作
  handleDeleted () {
    let rows = this.state.selectRows
    let ids = []
    rows.map((item) => {
      ids.push(item.id)
    })
    Modal.confirm({
      title: '提醒',
      content: `你确认要删除第${ids}条数据吗`,
      okText: '确定',
      cancelText: '返回',
      onOk: () => {
        message.success('删除成功')
        this.request()
      }
    })
  }
  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age'
      },
      {
        title: '爱好',
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
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '时间',
        dataIndex: 'time'
      }
    ]
    const { selectedRowKeys } = this.state
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectRows) => {
        this.setState({
          selectedRowKeys,
          selectRows
        })
      }
    }
    return (
      <div className='base-table' >
        <Card title='基础表格' >
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
          />
        </Card >
        <Card title='动态渲染表格' style={{marginTop: '10px'}} >
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
          />
        </Card>
        <Card title='Mock-单选' style={{marginTop: '10px'}} >
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => { this.onRowClick(record, index) }, // 点击行
                onMouseEnter: () => {} // 鼠标移入行
              }
            }}
          />
        </Card>
        <Card title='Mock-多选' style={{marginTop: '10px'}} >
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
            rowSelection={rowCheckSelection}
          />
          <div style={{marginTop: '10px'}}>
            <Button onClick={this.handleDeleted.bind(this)}>删除</Button>
          </div>
        </Card>
        <Card title='分页' style={{marginTop: '10px'}} >
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={this.state.pagination}
          />
        </Card>
      </div >
    )
  }
}

export default BaseTable
