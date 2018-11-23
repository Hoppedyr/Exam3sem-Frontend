import { LogInURL, URLSwapi } from "../settings";

const URL = LogInURL;
const URL2 = URLSwapi;

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

class ApiFacade {
  makeOptions(method, addToken, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && this.loggedIn()) {
      opts.headers["x-access-token"] = this.getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  getRestaurants = async () => {
    const options = this.makeOptions("GET", true);
    return await fetch("http://localhost:8080/exam3sem/api/info/restaurants", options).then(handleHttpErrors);
  }

  fetchSwapi = () => {
    const options = this.makeOptions("GET", true);
    return fetch(URL2 + "2", options).then(handleHttpErrors);
  }

  fetchData = () => {
    const options = this.makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
  }

  login = (user, pass) => {
    const options = this.makeOptions("POST", true, { username: user, password: pass });
    return fetch(URL + "/api/login", options, true)
      .then(handleHttpErrors)
      .then(res => { this.setToken(res.token) })
  }

  setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  loggedIn = () => {
    const loggedIn = this.getToken() != null;
    return loggedIn;
  }
  logout = () => {
    localStorage.removeItem("jwtToken");
  }

}
const facade = new ApiFacade();
export default facade;
