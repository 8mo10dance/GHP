import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import HomePage from '@/pages/HomePage'
import SamplePage from '@/pages/SamplePage'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/camera">
            <SamplePage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
