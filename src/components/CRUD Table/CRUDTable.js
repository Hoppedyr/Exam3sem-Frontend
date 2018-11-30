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
      editRestaurant:
      {
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
      console.log("Restaurants -> ",this.state.restaurants);
    } catch (err) {
      alert("REMOVE ME " + err);
    }
  }

  onEdit = (restaurant) => {
    const {id, restName, foodType, website, street, phone, pictureUrl, cityInfo} = restaurant;
    this.setState({editRestaurant:{restName, foodType ,id , website, street, phone, pictureUrl, cityInfo}});
  }

  onEditSubmit = async (restaurant) => {
    await facade.editRestaurant(restaurant);
    this.save();
  }

  onDelete = async (event) => {
    event.preventDefault();
    const id = event.target.id;
    await facade.deleteRestaurant(id);
    this.save();
  }

  onAdd = async (restaurant) => {
    await facade.addRestaurant(restaurant);
    this.save();
  }

  

  save = async () => {
    const restaurants = await facade.getRestaurants();
    this.setState({ restaurants:restaurants});
  }


  render() {
    return (
      <div style={{ margin: 20, width: "100%" }}>
        <div className="row">
          <div className="col-md-6">
            <h3>All Restaurants</h3>
            <AllRestaurants restaurants={this.state.restaurants} onEdit={this.onEdit} onDelete={this.onDelete} />
          </div>
          <div className="col-md-2">
          </div>
          <div className="col-md-5" >
            <h3 style={{ textAlign: "center" }}>Add / Edit Restaurants</h3>
            <AddEditRestaurant key={this.state.editRestaurant.id} onAdd={this.onAdd} onEdit={this.onEdit} onEditSubmit={this.onEditSubmit} verifyID={this.verifyID} restaurant={this.state.editRestaurant}/>
          </div>
        </div>

      </div>
    );
  }
}

export default CRUDTable;
