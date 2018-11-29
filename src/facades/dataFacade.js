import {getRestaurants, getRestaurantById, deleteRestaurant, createRestaurant, editRestaurant} from "../settings";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing 

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

class DataFacade {

  /*
  OBSERVE-1: This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  OBSERVE-2: To "simplify" how to handle asynchronicity you can use async/await as sketche in the example below*/
  // getPersons() {
  //   return fetch(URL).then(handleHttpErrors)
  // }

  //FINISHED
  async addRestaurant(restaurant) {
    return await fetch(createRestaurant, makeOptions("POST", restaurant)).then(handleHttpErrors);
  }

  // In order to use await, a method must be "marked" with async
  async getRestaurants() {
    return await fetch(`${getRestaurants}`).then(handleHttpErrors)
  }

  // NOT DONE YET
  async deleteRestaurant(id){
    return await fetch(`${deleteRestaurant+id}`, makeOptions("DELETE")).then(handleHttpErrors);
  }

  //FINISHED
  async getRestaurant(id){
    return await fetch(`${getRestaurantById+"/"+id}`).then(handleHttpErrors);
  }

  async editRestaurant(restaurant) {
    console.log(restaurant)
    return await fetch(`${editRestaurant+"/"+restaurant.id}`, makeOptions("PUT", restaurant)).then(handleHttpErrors);
    // return await fetch(`${URL}/${person.id}`, makeOptions("PUT", person)).then(handleHttpErrors);
  }
}

export default new DataFacade();
