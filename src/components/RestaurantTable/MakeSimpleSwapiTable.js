import React from "react"

export default function MakeTable(props) {
  const { data} = props;

  const person = data[0];


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
              <th>Person</th>
              </tr>
        </thead>
        <tbody>
          <tr>
            <td>{JSON.stringify(person)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


