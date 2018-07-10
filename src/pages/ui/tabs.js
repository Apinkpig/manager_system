import React, { Component } from 'react'
import { Card, Tabs, message, Icon } from 'antd'

const TabPane = Tabs.TabPane
class Tab extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }
  handleCallback (key) {
    message.info(`你选择了${key}标签`)
  }
  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render () {
    return (
      <div className='tabs'>
        <Card title='Tabs切换' className='card-wrap'>
          <Tabs defaultActiveKey='1' onChange={this.handleCallback.bind(this)}>
            <TabPane tab={<span><Icon type='apple' />Tab 1</span>} key='1'>欢迎</TabPane>
            <TabPane tab={<span><Icon type='android' />Tab 2</span>} key='2'>来到</TabPane>
            <TabPane tab='Tab 3' key='3'>晓枫的个人展示项目</TabPane>
          </Tabs>
        </Card>
        <Card title='动态生成tab' className='card-wrap'>
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
          {
            this.state.panes.map(pane =>
              <TabPane 
                tab={pane.title}
                key={pane.key}
                closable={pane.closable}>{pane.content}
              </TabPane>
            )
          }
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default Tab
