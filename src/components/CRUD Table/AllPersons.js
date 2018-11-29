import React from "react"

export default function AllPersons(props) {
  const { restaurants, onEdit, onDelete } = props;

  const list = restaurants.map((restaurant) =>
    <tr key={restaurant.id}>
      <td>{restaurant.id}</td>
      <td>{restaurant.restName}</td>
      <td>{restaurant.phone}</td>
      <td>{restaurant.foodType}</td>
      <td>{restaurant.website}</td>
      <td>{restaurant.pictureUrl}</td>
      <td>{restaurant.street}</td>
      <td>{restaurant.cityInfo.city}</td>
      <td>{restaurant.cityInfo.zip}</td>
      <td><button href="/#" onClick={() => onEdit(restaurant)} id={restaurant.id} value={restaurant}>Edit</button></td>
      <td><button href="/#" onClick={onDelete} id={restaurant.id}>Delete</button></td>
    </tr>);
  return (
    <div>
      <h2>Number of Restaurants: {props.restaurants.length}</h2>
      <table className="table">
        <thead>
          <tr><th>Id</th><th>Name</th><th>Phone</th><th>Food Type</th><th>website</th><th>pictureURL</th><th>street</th><th>City</th><th>Zip</th><th>Options</th></tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}


