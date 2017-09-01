import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import PageContainer from "../home"
import FeaturesContainer from "../home/features"
import TeamContainer from "../home/team"
import HelpContainer from "../home/help"
import LoginContainer from "../home/login"
import SignUpContainer from "../home/signup"

export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={PageContainer} />
          <Route path="home" component={PageContainer} />
          <Route path="features" component={FeaturesContainer} />
          <Route path="team" component={TeamContainer} />
          <Route path="help" component={HelpContainer} />
          <Route path="login" component={LoginContainer} />
          <Route path="signup" component={SignUpContainer} />
        </Route>
      </Router>
    )
  }
}