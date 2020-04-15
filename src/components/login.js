import React, {Component} from 'react';
import { withRouter } from 'react-router'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }
  handleEmailChange = event => { this.setState({ email: event.target.value })}
  handlePasswordChange = event => {this.setState({ password: event.target.value })}

  render() {
    return (
      <div>
        <div >
          <form className="form-group-in" onSubmit={this.handleSubmit}>
              <input placeholder="Email Address" value={this.state.email} className="form-control inline-input" type="email" name="email" onChange={this.handleEmailChange} />
              <input placeholder="Password" value={this.state.password} className="form-control inline-input" type="password" name="password" onChange={this.handlePasswordChange} />
            <button className="button-signin" type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginForm);