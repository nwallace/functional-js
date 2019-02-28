import React from 'react';
import Errors from './errors.jsx';
import { validateSignUp } from '../validations.js';

var makeFieldChangeHandler = function(component, field) {
  return function(event) {
    component.setState({[field]: event.target.value});
  };
};

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
                 onChange={makeFieldChangeHandler(this, "username")} />

          <label htmlFor="password">Password</label>
          <input id="password"
                 value={this.state.password}
                 onChange={makeFieldChangeHandler(this, "password")} />

          <label htmlFor="password-confirmation">Password Confirmation</label>
          <input id="password-confirmation"
                 value={this.state.passwordConfirmation}
                 onChange={makeFieldChangeHandler(this, "passwordConfirmation")} />
          <br/>

          <input type="submit" value="Submit" className="button-primary" />
        </form>
      );
    }
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
