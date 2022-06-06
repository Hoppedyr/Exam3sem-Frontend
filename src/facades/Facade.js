import { LogInURL, URLRestaurants } from "../settings";
import jwtdecode from "jwt-decode";

const URL = LogInURL;
const URL2 = "data.json";

async function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: await res.json() })
  }
  return res.json();
}

class ApiFacade {
  constructor() {
    this.username = null;
  }

  makeOptions(method, addToken, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    return opts;
  }

  getRestaurants = async () => {
    const options = this.makeOptions("GET", true);
    var test = await fetch(URL2, options).then(handleHttpErrors);
    console.log(test);
    return test;
  }

  // fetchSwapi = () => {
  //   const options = this.makeOptions("GET", true);
  //   return fetch(URL2 + "2", options).then(handleHttpErrors);
  // }

  fetchData = () => {
    const options = this.makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
  }

  login = (user, pass) => {
    const options = this.makeOptions("POST", true, { username: user, password: pass });
    return fetch(URL + "api/login", options, true)
      .then(handleHttpErrors)
      .then(res => { 
        this.username = user;
        this.setToken(res.token)
      })
  }
  
  loggedIn = () => {
    const loggedIn = this.getToken() != null;
    return loggedIn;
  }

  logout = () => {
    localStorage.removeItem("jwtToken");
    this.username = null;
  }
  setToken = (token) => {
    localStorage.setItem('jwtToken', token)
    this.readToken()
  }
  getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  readToken = () =>{
    var decoded = jwtdecode(this.getToken());
    this.username  = decoded.username
  }
  


}
const facade = new ApiFacade();
if (facade.getToken() !== null)
 facade.readToken();

export default facade;
