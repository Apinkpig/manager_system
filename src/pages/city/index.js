import React, { Component } from 'react'
import { Card, Form, Select, Button, Table, Modal, message } from 'antd'
import axios from '../../axios/index'
import Util from '../../utils/util'

const FormItem = Form.Item
const Option = Select.Option
class City extends Component {
  constructor (props) {
    super(props)
    this.state = { }
    this.params = {
      page: 1,
      list: '',
      isShowOpenCity: false
    }
  }
  componentDidMount () {
    this.requestList()
  }
  // 请求Model接口数据
  requestList () {
    let _this = this
    axios.ajax({
      url: '/open_city',
      method: 'get',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      let list = res.result.item_list.map((item, index) => {
        item.key = index
        return item
      })
      this.setState({
        list: list,
        pagination: Util.pagination(res, (current) => {
          _this.params.page = current
          _this.requestList()
        })
      })
    })
  }
  // 开通城市
  handleOpenCity () {
    this.setState({
      isShowOpenCity: true
    })
  }
  // 城市开通提交
  handleSublime () {
    let cityInfo = this.cityForm.props.form.getFieldsValue()
    axios.ajax({
      url: '/cityopen',
      method: 'get',
      data: {
        params: cityInfo
      }
    }).then((res) => {
      if (res.code === 0) {
        message.success('开通成功')
        this.setState({
          isShowOpenCity: false
        })
        this.requestList()
      }
    })
  }
  render () {
    const columns1 = [
      {
        title: '城市ID',
        dataIndex: 'id'
      },
      {
        title: '城市名称',
        dataIndex: 'name'
      },
      {
        title: '用车模式',
        dataIndex: 'mode',
        render (mode) {
          return mode === 1 ? '指定停车点' : '禁停区'
        }
      },
      {
        title: '运营模式',
        dataIndex: 'op_mode',
        render (data) {
          return data === 1 ? '自营' : '加盟商'
        }
      },
      {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      },
      {
        title: '城市管理员',
        dataIndex: 'city_admin',
        render (arr) {
          return arr.map((item) => {
            return item.user_name
          }).join(',')
        }
      },
      {
        title: '城市开通时间',
        dataIndex: 'open_time'
      },
      {
        title: '操作时间',
        dataIndex: 'updata_time',
        render: Util.formateDate
      },
      {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
    ]
    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card>
          <Button type='primary' onClick={this.handleOpenCity.bind(this)}>开通城市</Button>
        </Card>
        <div className='content-wrap'>
          <Table
            bordered
            columns={columns1}
            dataSource={this.state.list}
          />
        </div>
        <Modal
          title='开通城市'
          visible={this.state.isShowOpenCity}
          onCancel={() => {
            this.setState({
              isShowOpenCity: false
            })
          }}
          onOk={this.handleSublime.bind(this)}
          okText='确定'
          cancelText='取消'
        >
          <OpenCity wrappedComponentRef={(inst) => { this.cityForm = inst }} />
        </Modal>
      </div>
    )
  }
}

class FilterForm extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout='inline'>
        <FormItem label='城市'>
          {
            getFieldDecorator('city_id')(
              <Select placeholder='全部' style={{width: 80}}>
                <Option value=''>全部</Option>
                <Option value='1'>北京市</Option>
                <Option value='2'>天津市</Option>
                <Option value='3'>上海市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label='用车模式'>
          {
            getFieldDecorator('mode')(
              <Select placeholder='全部' style={{width: 130}}>
                <Option value=''>全部</Option>
                <Option value='1'>指定停车点模式</Option>
                <Option value='2'>禁停点模式</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label='营运模式'>
          {
            getFieldDecorator('op_mode')(
              <Select placeholder='全部' style={{width: 100}}>
                <Option value=''>全部</Option>
                <Option value='1'>自营模式</Option>
                <Option value='2'>加盟商模式</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label='加盟商授权状态'>
          {
            getFieldDecorator('auth_status')(
              <Select placeholder='全部' style={{width: 80}}>
                <Option value=''>全部</Option>
                <Option value='1'>已授权</Option>
                <Option value='2'>未授权</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button type='primary' style={{margin: '0 10px'}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    )
  }
}
FilterForm = Form.create({})(FilterForm)
class OpenCity extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 10
      }
    }
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout='horizontal'>
        <FormItem label='选择城市' {...formItemLayout}>
          {
            getFieldDecorator('city_id', {
              initialValue: '1'
            })(
              <Select placeholder='全部'>
                <Option value=''>全部</Option>
                <Option value='1'>北京市</Option>
                <Option value='2'>天津市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label='营运模式' {...formItemLayout}>
          {
            getFieldDecorator('op_mode', {
              initialValue: '1'
            })(
              <Select placeholder='自营'>
                <Option value='1'>加盟</Option>
                <Option value='2'>自营</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label='用车模式' {...formItemLayout}>
          {
            getFieldDecorator('stop_mode', {
              initialValue: '1'
            })(
              <Select placeholder='指定停车点'>
                <Option value='1'>指定停车点</Option>
                <Option value='2'>禁停区</Option>
              </Select>
            )
          }
        </FormItem>
      </Form>
    )
  }
}
OpenCity = Form.create({})(OpenCity)
export default City
