import React, { Component } from "react"


export default class AddEditRestaurant extends Component {


  constructor(props) {
    super(props);
    this.editPerson = this.props.editPerson;
    this.state = {
      restaurant: {
        id: props.restaurant.id,
        restName: props.restaurant.restName,
        foodType: props.restaurant.foodType,
        website: props.restaurant.website,
        street: props.restaurant.street,
        phone: props.restaurant.phone,
        pictureUrl: props.restaurant.pictureUrl,
        cityInfo: {
          zip: props.restaurant.cityInfo.zip,
          city: props.restaurant.cityInfo.city
        }
      }
    };
  }




  handleSubmit = async (evt) => {
    evt.preventDefault();

    if (this.state.restaurant.id !== "") {
      this.props.onEditSubmit(this.state.restaurant);
    } else {
      this.props.onAdd(this.state.restaurant);
    }
  }

  resetForm = () => {
    this.setState({
      restaurant: {
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
    });
  }

  handleInputChange = (event) => {
    let title = event.target.name;
    let restaurant = Object.assign({}, this.state.restaurant);
    switch (title) {
      case 'zip':
        restaurant.cityInfo.zip = event.target.value;
        this.setState({ restaurant })
        break;
      case 'city':
        restaurant.cityInfo.city = event.target.value;
        this.setState({ restaurant })
        break;
      case 'restName':
        restaurant.restName = event.target.value;
        this.setState({ restaurant })
        break;
      case 'foodType':
        restaurant.foodType = event.target.value;
        this.setState({ restaurant })
        break;
      case 'phone':
        restaurant.phone = event.target.value;
        this.setState({ restaurant })
        break;
      case 'pictureUrl':
        restaurant.pictureUrl = event.target.value;
        this.setState({ restaurant })
        break;
      case 'website':
        restaurant.website = event.target.value;
        this.setState({ restaurant })
        break;
      case 'street':
        restaurant.street = event.target.value;
        this.setState({ restaurant })
        break;
    }
  }


  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-3">Id:</label>
            <div className="col-sm-9">
              <input className="form-control" readOnly id="id" name="id" value={this.state.restaurant.id} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="name">Name:</label>
            <div className="col-sm-9">
              <input className="form-control" id="name" name="restName" placeholder="Enter Name" value={this.state.restaurant.restName} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="age">Phone:</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" name="phone" id="phone" placeholder="Enter phone" value={this.state.restaurant.phone} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="website">Website:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="website" name="website" placeholder="Enter website" value={this.state.restaurant.website} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Food Type:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="foodType" name="foodType" placeholder="Enter Food Type" value={this.state.restaurant.foodType} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Street:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="street" name="street" placeholder="Enter Street" value={this.state.restaurant.street} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Picture URL:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="pictureUrl" name="pictureUrl" placeholder="Enter Picture Url" value={this.state.restaurant.pictureUrl} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Zip Code:</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" id="zip" name="zip" placeholder="Enter Zip" min="0" max="9999" value={this.state.restaurant.cityInfo.zip} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">City:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="city" name="city" placeholder="Enter City" value={this.state.restaurant.cityInfo.city} onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">

              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
              <button type="button" className="btn btn-primary btn-lg" style={{ marginLeft: 5 }} onClick={this.resetForm}>Reset</button>
              <hr></hr>
            </div>
          </div>
        </form>
      </div>
    )
  }
}