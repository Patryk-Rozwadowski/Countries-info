import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexLink , hashHistory } from 'react-router';
class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Navigation}>
          <IndexRoute component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/hello/:name' component={Hello} />
          <Route path='*' component={PageNotFound} />
        </Route>
      </Router>
    )
  }
}


export default App