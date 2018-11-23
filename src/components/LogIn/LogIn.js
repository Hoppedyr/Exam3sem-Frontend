import React, { Component } from "react"

class LogIn extends Component {
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
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login} onChange={this.onChange} >
          <input placeholder="User Name" id="username" />
          <input type="password" placeholder="Password" id="password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
}
 class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Admin Logged in" };
  }
  componentDidMount() {
    this.props.facade.fetchData().then(res=> this.setState({dataFromServer: res}));
  }
  render() {
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{this.state.dataFromServer}</h3>
      </div>
    )
  }
}

export default class LoginMainView extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: this.props.facade.loggedIn() }
  }
  logout = () => {
    this.setState({loggedIn: this.props.facade.logout()})
    this.props.totalLogOut();
  } 
  login = (user, pass) => {
    this.props.facade.login(user, pass)
      .then(res => {this.setState({ loggedIn: true })});
  }
  render() {
    return (
      <div>
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            <LoggedIn totalLogOut={this.props.totalLogOut} facade={this.props.facade}/>
            <button onClick={this.logout}>Logout</button>
          </div>)}
      </div>
    )
  }
}

/* import React, { Component } from "react"
import facade from "../../facades/ApiFacade";

class LogIn extends Component {
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
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login} onChange={this.onChange} >
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
}
 class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Fetching!!" };
  }
  componentDidMount() {
    facade.fetchData().then(res=> this.setState({dataFromServer: res}));
   }
  render() {
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{this.state.dataFromServer}</h3>
      </div>
    )
  }
}
export default class LoginMainView extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  } 
  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            <LoggedIn />
            <button onClick={this.logout}>Logout</button>
          </div>)}
      </div>
    )
  }
}
 */
