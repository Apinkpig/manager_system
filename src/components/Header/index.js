import React, { Component } from 'react'
import { Row, Col, Button, Modal } from 'antd'
import Util from '../../utils/util'
import axios from '../../axios'
import './index.less'

const confirm = Modal.confirm
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: 'baimin'
    }
  }
  componentWillMount () {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherApiData()
  }
  showConfirm () {
    confirm({
      title: '你确定要退出吗?',
      okText: '确定',
      cancelText: '返回',
      onOk () {
        console.log('确定')
      },
      onCancel () {
        console.log('返回')
      }
    })
  }
  getWeatherApiData () {
    let city = '北京'
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      let data = res.results[0].weather_data[0]
      if (res.status === 'success') {
        this.setState({
          weatherIcon: data.dayPictureUrl,
          weatherData: data.weather
        })
      }
    })
  }
  render () {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span={16} className='header-show'>晓枫的个人展示项目（共享单车后台管理系统）</Col>
          <Col span={8}>
            <span>{`欢迎、${this.state.userName}`}</span>
            <Button onClick={this.showConfirm.bind(this)} type='danger'>退出</Button>
          </Col>
        </Row>
        <Row className='header-bottom'>
          <Col span={4} className='header-title'>首页</Col>
          <Col span={20} className='weather'>
            <span className='time'>{this.state.sysTime}</span>
            
            <span className='weather-detail'>
              <img src={this.state.weatherIcon} alt='icon图标' />
              <span>{this.state.weatherData}</span>
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
