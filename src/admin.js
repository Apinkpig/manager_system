import React, { Component } from 'react'
import { Row, Col } from 'antd'

import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

import './style/common.less'

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <Row className='container'>
          <Col span={4} className='nav-left'>
            <NavLeft />
          </Col>
          <Col span={20} className='main'>
            <Header />
            <Row className='content'>
              {this.props.children}
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Admin
