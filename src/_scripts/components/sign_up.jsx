import React from 'react';
import Errors from './errors.jsx';
import { validateSignUp } from '../validations.js';

export default React.createClass({

  getInitialState() {
    return {
      username: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      signedUp: false,
    };
  },

  render() {
    if (this.state.signedUp) {
      return (
        <div>
          <h5>Welcome, {this.state.username}!</h5>
          <button onClick={this.startOver}>Start over</button>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <h3>Sign up</h3>

          <Errors errors={this.state.errors} />

          <label htmlFor="username">Username</label>
          <input id="username"
                 value={this.state.username}
                 onChange={this.handleUsernameChange} />

          <label htmlFor="password">Password</label>
          <input id="password"
                 value={this.state.password}
                 onChange={this.handlePasswordChange} />

          <label htmlFor="password-confirmation">Password Confirmation</label>
          <input id="password-confirmation"
                 value={this.state.passwordConfirmation}
                 onChange={this.handlePasswordConfirmationChange} />

          <input type="submit" value="Submit" className="button-primary" />
        </form>
      );
    }
  },

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  },

  handlePasswordConfirmationChange(event) {
    this.setState({passwordConfirmation: event.target.value});
  },

  handleSubmit(event) {
    event.preventDefault();
    let errors = validateSignUp({
      username: this.state.username,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    });
    if (errors.length > 0) {
      this.setState({errors: errors});
    } else {
      this.setState({errors: [], signedUp: true});
    }
  },

  startOver() {
    this.replaceState(this.getInitialState());
  },
});
