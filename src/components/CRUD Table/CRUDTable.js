import React, { Component } from 'react';
import '../../styles/App.css';
import AddEditRestaurant from "./AddEditRestaurant";
import AllRestaurants from "./AllRestaurants";
import facade from '../../facades/CRUDFacade';

class CRUDTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      editRestaurant: {
        id: "",
        restName: "",
        foodType: "",
        website: "",
        street: "",
        phone: "",
        pictureUrl: "",
        cityInfo: {
          zip: "",
          city: ""
        }
      }
    };
  }

  async componentDidMount() {
    try {
      const restaurants = await facade.getRestaurants();
      this.setState({ restaurants });
    } catch (err) {
      alert("Error: " + err);
    }
  }

  onEdit = (restaurant) => {
    const { id, restName, foodType, website, street, phone, pictureUrl, cityInfo } = restaurant;
    this.setState({ editRestaurant: { restName, foodType, id, website, street, phone, pictureUrl, cityInfo } });
  }

  onEditSubmit = async (restaurant) => {
    await facade.editRestaurant(restaurant);
    this.save();
  }

  onDelete = async (event) => {
    event.preventDefault();
    alert("Not implemented!");
    // const id = event.target.id;
    // await facade.deleteRestaurant(id);
    // this.save();
  }

  onAdd = async (restaurant) => {
    restaurant.id = "0"
    await facade.addRestaurant(restaurant);
    this.save();
  }

  save = async () => {
    const restaurants = await facade.getRestaurants();
    this.setState({ restaurants: restaurants });
  }


  render() {
    return (
      <div style={{ margin: 20 }}>
        <div className="row">
          <div style={{ width: "20%", marginRight: 20 }}>
            <h3 style={{ backgroundColor: "#000000", fontWeight: "bold", borderRadius: '0.25em', textAlign: 'center', color: '#BAFBFF', border: '1px solid grey', padding: '0.3em' }}>Add / Edit Restaurants</h3>
            <AddEditRestaurant key={this.state.editRestaurant.id} onAdd={this.onAdd} onEdit={this.onEdit} onEditSubmit={this.onEditSubmit} verifyID={this.verifyID} restaurant={this.state.editRestaurant} />
          </div>
          <div>
            <h3 style={{ backgroundColor: "#000000", fontWeight: "bold", borderRadius: '0.25em', textAlign: 'center', color: '#BAFBFF', border: '1px solid grey', padding: '0.3em' }}>Restaurant Manager</h3>
            <AllRestaurants restaurants={this.state.restaurants} onEdit={this.onEdit} onDelete={this.onDelete} />
          </div>
        </div>

      </div>
    );
  }
}

export default CRUDTable;
