import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import NotFound from './containers/NotFound'

const routes = (
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
