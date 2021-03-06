import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from '../../common/Home'
import Query from './lookup/Query'
import About from './static/About'
import PageNotFound from "./static/PageNotFound";
// import Gitapp from './githubapp/Gitapp'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      {/*<Route exact path="/" component={Home}/>*/}
      <Redirect exact from='/' to='/query'/>
      <Route path="/query" component={Query}/>
      {/*<Route path={'/query/:id'} component={Query}/>*/}

      <Route path="/about" component={About}/>
      {/*<Route path='gitapp' component={Gitapp}/>*/}

      {/*// 404*/}
      <Route component={PageNotFound}/>
    </Switch>
  </main>
)

export default Main
