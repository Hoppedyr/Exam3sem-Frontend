import React from "react"

export default function AllRestaurants(props) {
  const { restaurants, onEdit, onDelete } = props;

  const list = restaurants.map((restaurant) =>
    <tr key={restaurant.id}>
      <td>{restaurant.id}</td>
      <td style={{ maxWidth: 40, wordWrap: 'break-word' }}>{restaurant.restName}</td>
      <td style={{ maxWidth: 40, wordWrap: 'break-word' }}>{restaurant.phone}</td>
      <td>{restaurant.foodType}</td>
      <td style={{ maxWidth: 40, wordWrap: 'break-word' }}>{restaurant.website}</td>
      <td style={{ maxWidth: 40, wordWrap: 'break-word' }}>{restaurant.pictureUrl}</td>
      <td>{restaurant.street}</td>
      <td>{restaurant.cityInfo.city}</td>
      <td>{restaurant.cityInfo.zip}</td>
      <td><button href="/#" className="btn btn-primary btn-lg" onClick={() => onEdit(restaurant)} id={restaurant.id} value={restaurant}>Edit</button></td>
      <td><button href="/#" className="btn btn-primary btn-lg" onClick={onDelete} id={restaurant.id}>Delete</button></td>
    </tr>);
  return (
    <div>
      <h3 style={{textAlign: "center"}}>Number of Restaurants: {props.restaurants.length}</h3>
      <hr/>
      <table className="table">
        <thead>
          <tr><th >Id</th><th>Name</th><th>Phone</th><th>Food Type</th><th>website</th><th>pictureURL</th><th>street</th><th>City</th><th>Zip</th><th>Options</th></tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )

}


