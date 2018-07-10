import React, { Component } from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'

import './style.less'
const FormItem = Form.Item
class FormLogin extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  handleSubmit () {
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.username},登录成功。当前密码为${userInfo.password}`)
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card title='登录行内表单' className='card-wrap'>
          <Form layout='inline'>
            <FormItem>
              <Input placeholder='请输入账号' />
            </FormItem>
            <FormItem>
              <Input placeholder='请输入密码' />
            </FormItem>
            <FormItem>
              <Button type='primary'>登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title='水平登录表单' className='card-wrap'>
          <Form style={{width: '30%'}}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    },
                    {
                      min: 5,
                      max: 10,
                      message: '长度应为5-10位'
                    },
                    {
                      pattern: /^\w+$/g,
                      message: '只能为字母，数字，或者下划线'
                    }
                  ]
                })(
                  <Input prefix={<Icon type='user' />} placeholder='请输入账号' />
                )
              }
            </FormItem>
            <FormItem>
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
                  <Input prefix={<Icon type='lock' />} type='password' placeholder='请输入密码' />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('checkBox', {
                  initialValue: true,
                  valuePropName: 'checked'
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="#" style={{float: 'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.handleSubmit.bind(this)}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormLogin)
