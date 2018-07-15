import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons.js'
import NoMatch from './pages/nomatch'
import Modals from './pages/ui/modals.js'
import Home from './pages/home'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BaseTable from './pages/table/baseTable'
import HighTable from './pages/table/highTable'
import City from './pages/city'

class IRouter extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={Login} />
          <Route path='/admin' render={() => {
            return (
              <Admin>
                <Switch>
                  <Route path='/admin/home' component={Home} />
                  {/* ui */}
                  <Route path='/admin/ui/buttons' component={Buttons} />
                  <Route path='/admin/ui/modals' component={Modals} />
                  <Route path='/admin/ui/loadings' component={Loadings} />
                  <Route path='/admin/ui/notification' component={Notice} />
                  <Route path='/admin/ui/tabs' component={Tabs} />
                  <Route path='/admin/ui/gallery' component={Gallery} />
                  {/* form */}
                  <Route path='/admin/form/login' component={FormLogin} />
                  <Route path='/admin/form/reg' component={FormRegister} />
                  {/* table */}
                  <Route path='/admin/table/basic' component={BaseTable} />
                  <Route path='/admin/table/high' component={HighTable} />
                  <Route path='/admin/city' component={City} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )
          }} />
          <Route path='/order/detail' component={Login} />
        </App>
      </HashRouter>
    )
  }
}

export default IRouter
