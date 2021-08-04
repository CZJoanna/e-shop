import React from "react";
import Button from "./button";
import { signInWithGoogle } from "../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    //我的寫法
    // if (name === "email") {
    //   this.setState({ email: value });
    // } else {
    //   this.setState({ password: value });
    // }
    // console.log(this.state);

    //Yihua 的寫法
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <h2>Sign in with your email and password.</h2>

        <form onSubmit={this.handleSubmit} className="form">
          <div className="form__group">
            <input
              className="form__input"
              id="email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
              autoFocus
            />
            <label
              className={`${
                this.state.email.length ? "shrink" : ""
              } form__label`}
              htmlFor="email"
            >
              Email
            </label>
          </div>

          <div className="form__group">
            <input
              className="form__input"
              id="pwd"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              required
            />
            <label
              className={`${
                this.state.password.length ? "shrink" : ""
              } form__label`}
              htmlFor="pwd"
            >
              Password
            </label>
          </div>

          <div className="sign-in__btns">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogle>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
