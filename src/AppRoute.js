import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { theme } from './theme'
import Card from './pages/Card'
import Resume from './pages/Resume'

class AppRoute extends React.Component {

  render() {
    return <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/proflie" component={Resume} />
          <Route path="/card" component={Card} />
          <Redirect to="/proflie" />
        </Switch>
      </Router>
    </ThemeProvider>
  }
}

export default AppRoute