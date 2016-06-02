import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Language from './containers/Language'
import LanguageFiltered from './containers/LanguageFiltered'
import GenerateBlueprint from './containers/GenerateBlueprint'
import New from './containers/New'
import NotFound from './containers/NotFound'

const routes = (
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path=':language' component={Language} />
    <Route path=':language/:type' component={LanguageFiltered} />
    <Route path=':language/:type/generate' component={GenerateBlueprint} />
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
