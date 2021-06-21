import React, { Component } from "react";
import Joi from "joi-browser";

import Input from "./Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  componentDidMount() {
    console.clear();
  }

  validate = () => {
    const options = {
      abortEarly: true,
    };
    const result = Joi.validate(this.state.account, this.schema, options);
    console.log(result);

    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;

    // const errors = {};
    // const { account } = this.state;

    // if (account.username.trim() == "") {
    //   errors.username = "Username is required";
    // }
    // if (account.password.trim() == "" || account.password.length<8) {
    //   errors.password = "Password is required and length should be more than 8 chars";
    // }

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account: account, errors: errors || {} });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }

    // API Call
    console.log("Form Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <Input
              id="username"
              name="username"
              label="Username"
              type="text"
              value={this.state.account.username}
              error={this.state.errors.username}
              onChange={this.handleChange}
            />
            <Input
              id="password"
              name="password"
              label="Password"
              type="password"
              value={this.state.account.password}
              error={this.state.errors.password}
              onChange={this.handleChange}
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.validate()}
            >
              Login
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
