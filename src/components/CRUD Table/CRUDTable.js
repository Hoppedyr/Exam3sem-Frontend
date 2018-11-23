import React, { Component } from 'react';
import '../../styles/App.css';
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";
import facade from '../../facades/dataFacade';

class CRUDTable extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      persons: [],           
      editPerson:
      {
        id:"",
        age:"",
        name:"",
        gender:"",
        email:""
      }};
  }

  async componentDidMount() {
    try {
      const persons = await facade.getPersons();
      this.setState({ persons: persons });

    } catch (err) {
      alert("REMOVE ME " + err);
    }
  }

  onEdit = (person) => {
    const {id, name, age, gender, email} = person;
    // console.log(person);
    this.setState({editPerson:{name:name, age:age ,id:id ,gender:gender ,email:email}});
  }

  onEditSubmit = async (person) => {
    await facade.editPerson(person);
    this.save();
  }

  onDelete = async (event) => {
    event.preventDefault();
    const id = event.target.id;
    // alert('A name was Deleted:' + id);
    await facade.deletePerson(id);
    this.save();
  }

  onAdd = async (person) => {
    // alert('A person was add:' + JSON.stringify(newPerson));
    await facade.addPerson(person);
    this.save();
  }

  // verifyID = async (idToVerify) => { // WHY DO I GET A PROMISE=????????????????????
  //   const person = await facade.getPerson(idToVerify);
  //   const actualID = await person.id;
  //   console.log("ID to verify:" + idToVerify + ", Actual ID:" + actualID);
  //   if(idToVerify == actualID)
  //   {
  //     console.log("ID verified!");
  //   }
  //   else{
  //     console.log("ID not found!")
  //   }

  // }

  save = async () => {
    const persons = await facade.getPersons();
    this.setState({ persons: persons });
    // alert("SAVE");
  }


  render() {
    return (
      <div style={{ margin: 20, width: "100%" }}>
        <h3>Quick Start Project</h3>
        <div className="row">
          <div className="col-md-6">
            <h3>All Persons</h3>
            <AllPersons persons={this.state.persons} onEdit={this.onEdit} onDelete={this.onDelete} />
          </div>
          <div className="col-md-2">
          </div>
          <div className="col-md-5" >
            <h3 style={{ textAlign: "center" }}>Add Persons</h3>
            <AddEditPerson key={this.state.editPerson.id} onAdd={this.onAdd} onEdit={this.onEdit} onEditSubmit={this.onEditSubmit} verifyID={this.verifyID} editPerson={this.state.editPerson}/>
          </div>
        </div>

      </div>
    );
  }
}

export default CRUDTable;
