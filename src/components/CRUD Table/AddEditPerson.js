import React, { Component } from "react"


export default class AddEditPerson extends Component {


  constructor(props) {
    super(props);
    this.editPerson = this.props.editPerson;
    this.state = { id: this.editPerson.id, age: this.editPerson.age, name: this.editPerson.name, gender: this.editPerson.gender, email: this.editPerson.email };
    this.handleInputChange = this.handleInputChange.bind(this);

  }


  // // componentWillReceiveProps() {
  // static getDerivedStateFromProps() {
  //   // console.log("state:" + JSON.stringify(this.state));
  //   // console.log("editperson:" + JSON.stringify(this.editPerson));
  //   this.setState(
  //     { id: this.editPerson.id, age: this.editPerson.age, name: this.editPerson.name, gender: this.editPerson.gender, email: this.editPerson.email });
  // }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    // const id = this.state.id;

    // console.log("Verify = " + this.props.verifyID(id)) // VERIFY
    // console.log("state:" + JSON.stringify(this.state));
    // console.log("editperson:" + JSON.stringify(this.props.editPerson));
    // if (this.props.verifyID(id) == true) { // VERIFY
    if (this.state.id !== "") {
      // console.log("state:" + JSON.stringify(this.state));

      // console.log("editPerson:" + JSON.stringify(this.props.editPerson));

      // await this.setState({ id: this.props.editPerson.id });
      this.props.onEditSubmit(this.state);
      console.log("person edited")
    } else {
      this.props.onAdd(this.state);
      console.log("new person created ");
    }
    // let newPerson = this.state;
    // this.props.onAdd(newPerson);
  }

  resetForm = () => {
    this.setState(
      { id: "", age: "", name: "", gender: "", email: "" });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-3">Id:</label>
            <div className="col-sm-9">
              <input className="form-control" readOnly id="id" name="id" value={this.state.id} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="name">Name:</label>
            <div className="col-sm-9">
              <input className="form-control" id="name" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="age">Age:</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" name="age" id="age" placeholder="Enter age" value={this.state.age} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="email">Email:</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Gender:</label>
            <div className="col-sm-9">
              <input className="form-control" id="gender" name="gender" placeholder="Enter Gender" value={this.state.gender} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-default">Submit</button>
              <button type="button" className="btn btn-default" onClick={this.resetForm}>Reset</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}