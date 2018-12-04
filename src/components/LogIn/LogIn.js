import React, { Component } from "react"

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }
  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }
  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (
      <div style={{ margin: 20, textAlign: "center", fontSize: 25 }}>
        <h1 style={{fontWeight: "bold", fontSize: 50}}>Admin Login</h1>
        <form onSubmit={this.login} onChange={this.onChange} >
          <input placeholder="User Name" id="username" />
          <br/>
          <input type="password" placeholder="Password" id="password" />
          <br/>
          <br/>
          <input type="submit" value="Log in" className="btn btn-primary btn-lg" style={{fontSize: 30, padding: "5px 50px"}}/>
        </form>
      </div>
    )
  }
}


