import React, {Component} from 'react'
import { Router, Route} from 'react-router-dom';

import LoginForm from './components/login';
import signUpForm from './components/signUp';
import clients from './components/clients'
import history from './utils/history'

class App extends Component {
  render () {
  return (
    <Router history={history}>
    <div>
      <Route path="/login" component={LoginForm} />
      <Route path="/signUp" component={signUpForm} />
      <Route path="/clients" component={clients} />
    </div>
  </Router>
  );
  }
}

export default App;
