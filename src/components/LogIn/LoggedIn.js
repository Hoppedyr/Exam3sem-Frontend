import React, { Component } from "react";

export default class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "" };
  }
  componentDidMount() {
    this.props.facade.fetchData().then(res => this.setState({ dataFromServer: res }));
  }
  render() {
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{this.state.dataFromServer}</h3>
        <p>
                  
        </p>

      </div>
    )
  }
}