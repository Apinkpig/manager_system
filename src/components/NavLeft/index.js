import React, { Component } from 'react'
import { Menu } from 'antd'

import MenuConfig from '../../config/menuConfig'

import './index.less'

const SubMenu = Menu.SubMenu
class NavLeft extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  componentWillMount () {
    const MenuList = this.renderMenu(MenuConfig)
    this.setState({
      MenuList
    })
  }
  // 菜单渲染
  renderMenu (data) {
    return data.map((items, index) => {
      if (items.children) {
        return (
          <SubMenu title={items.title} key={items.key}>
            { this.renderMenu(items.children) }
          </SubMenu>
        )
      }
      return <Menu.Item title={items.title} key={items.key}>{items.title}</Menu.Item>
    })
  }
  render () {
    return (
      <div className='nav-left'>
        <div className='logo'>
          <img src='/assets/logo-ant.svg' alt='' />
          <h1>kmm MS</h1>
        </div>
        <Menu theme='dark' mode='vertical' className='nav-left-menu'>
          { this.state.MenuList }
        </Menu>
      </div>
    )
  }
}

export default NavLeft
