import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Card from './pages/Card'
import Resume from './pages/Resume'

class AppRoute extends React.Component {

  render() {
    return <Router>
      <Switch>
        <Route path="/proflie" component={Resume} />
        <Route path="/card" component={Card} />
        <Redirect to="/proflie" />
      </Switch>
    </Router>
  }
}

export default AppRoute