import React, {Component} from 'react'

import './index.less'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  componentDidMount () {
    
  }

  render () {
    return (
      <div className='footer'>
        版权所有：晓枫（个人）（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：晓枫 联系方式：qq121932660
      </div>
    )
  }
}
export default Footer
