import React from "react"

export default function AllPersons(props) {
  const { persons, onEdit, onDelete } = props;

  const list = persons.map((person) =>
    <tr key={person.id}>
      <td>{person.age}</td>
      <td>{person.name}</td>
      <td>{person.gender}</td>
      <td>{person.email}</td>
      <td><button href="/#" onClick={() => onEdit(person)} id={person.id} value={person}>Edit</button></td>
      <td><button href="/#" onClick={onDelete} id={person.id}>Delete</button></td>
    </tr>);
  return (
    <div>
      <h2>Number of Persons: {props.persons.length}</h2>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th><th>Options</th></tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}


