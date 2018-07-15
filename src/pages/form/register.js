import React, { Component } from 'react'
import { Card, Form, Input, DatePicker, Radio, InputNumber, Select, Switch, Upload, Icon, Modal, Checkbox, Button } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import RadioGroup from 'antd/lib/radio/group'
import moment from 'moment'
import TextArea from 'antd/lib/input/TextArea'

const Option = Select.Option
class FormRegister extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }]
    }
  }
  handleChange = ({ fileList }) => this.setState({ fileList })
  handleCancel = () => this.setState({ previewVisible: false })
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  handleSubmit(){
    // 获取所有表单值
    let userInfo = this.props.form.getFieldsValue()
    console.log(userInfo)
  }
  handleReset(){
    this.props.form.resetFields()
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 8
      },
      wrapperCol: {
        xs: 24,
        sm: 16
      }
    }
    const tailFormItemLayout  = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      }
    }
    const { fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className='form-register'>
        <Card title='注册表单'>
          <Form style={{width: '70%'}}>
            <FormItem label='用户名' {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    },
                    {
                      min: 6,
                      message: '密码必须大于6位'
                    }
                  ]
                })(
                  <Input type='text' placeholder='请输入用户名' />
                )
              }
            </FormItem>
            <FormItem label='密码' {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '密码不能为空'
                    },
                    {
                      min: 6,
                      message: '密码必须大于6位'
                    }
                  ]
                })(
                  <Input type='password' placeholder='请输入密码' />
                )
              }
            </FormItem>
            <FormItem label='性别' {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value='1'>男</Radio>
                    <Radio value='2'>女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label='年龄' {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: '1'
                })(
                  <InputNumber min={1} max={100} />
                )
              }
            </FormItem>
            <FormItem label='当前状态' {...formItemLayout}>
              {
                getFieldDecorator('status', {
                  initialValue: '1'
                })(
                  <Select>
                    <Option value='1'>在职</Option>
                    <Option value='2'>离职</Option>
                    <Option value='3'>应届大学生</Option>
                    <Option value='4'>暂时未就业</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='爱好' {...formItemLayout}>
              {
                getFieldDecorator('hobby', {
                  initialValue: ['1', '2']
                })(
                  <Select mode='multiple'>
                    <Option value='1'>学习</Option>
                    <Option value='2'>打篮球</Option>
                    <Option value='3'>踢足球</Option>
                    <Option value='4'>K歌</Option>
                    <Option value='5'>爬上</Option>
                    <Option value='6'>骑行</Option>
                    <Option value='7'>旅游</Option>
                    <Option value='8'>写代码</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='是否离职' {...formItemLayout}>
              {
                getFieldDecorator('nowStatus', {
                  initialValue: '1'
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label='生日' {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2018-07-10')
                })(
                  <DatePicker
                    showTime
                    format='YYYY-HH-DD'
                  />
                )}
            </FormItem>
            <FormItem label='联系地址' {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: ''
                })(
                  <TextArea autosize={
                    {minRows: 4, maxRows: 6}
                  } />
                )}
            </FormItem>
            <FormItem label='邮箱' {...formItemLayout}>
              {
                getFieldDecorator('email', {
                  initialValue: '',
                  rules: [{
                    type: 'email', message: '格式错误'
                  }, {
                    required: true, message: 'Please input your E-mail!'
                  }]
                })(
                  <Input />
                )}
            </FormItem>
            <FormItem label='上传' {...formItemLayout}>
              {
                getFieldDecorator('upload', {
                  initialValue: ''
                })(
                  <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                  >
                  {fileList.length >= 3 ? null : uploadButton}
                  </Upload>
                )}
                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                </Modal>
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {
                getFieldDecorator('agreement', {
                valuePropName: 'checked',
                })(
                  <Checkbox>我已阅读<a href="#" style={{float: 'right'}}>相关协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type='primary' onClick={this.handleSubmit.bind(this)}>注册</Button>
              <Button style={{marginLeft: '20px'}} type='danger' onClick={this.handleReset.bind(this)}>重置</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormRegister)
