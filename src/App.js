import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import MyImageSvg from './styles/Logo.svg';
import Andreas from './styles/images/andreas.jpg';
import Mohammad from './styles/images/mohammad.jpg';
import Rasmus from './styles/images/rasmus.jpg';
import André from './styles/images/andré.jpg';
import Pab from './styles/images/pab.jpg';


import CRUDTable from "./components/CRUD Table/CRUDTable";
import facade from "./facades/Facade";


import RestaurantsPag from "./components/RestaurantTable/RestaurantsPag";




class App extends Component {


    adminLogin = async (username, password) => {
        try {
            await facade.login(username, password)
            this.setState({ hasLoggedIn: true })
        }
        catch (error) {
            console.log(error.fullError.errorMessage)
        }
    }

    totalLogOut = () => {
        facade.logout()
        this.setState({ hasLoggedIn: false });
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul className="topbar" >
                            <li>
                                <img style={{ width: "45%" }} src={MyImageSvg} />
                                <h5>Scroll down</h5>
                                <span className="glyphicon glyphicon-menu-down"></span>
                            </li>
                        </ul>
                        <ul className="header navbar-fixed-top">
                            <li>
                                <NavLink exact to="/"><span className="glyphicon glyphicon-home"></span> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"><span className="glyphicon glyphicon-info-sign"></span> About</NavLink>
                            </li>
                          
                                <div>
                                    <li>
                                        <NavLink to="/admin"><span className="glyphicon glyphicon-cog"></span> Admin Panel</NavLink>
                                    </li>

                                    <li className="float-right">
                                        <NavLink to="/" onClick={this.totalLogOut}>
                                            <span className="glyphicon glyphicon-log-out"></span> Admin Logout
                                        </NavLink>
                                    </li>

                                    <li className="float-right navbartext">
                                        <p><span className="glyphicon glyphicon-user"></span> User: {facade.username}</p>

                                    </li>
                                </div>
                        </ul>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/admin" component={Admin} />
                    </div>
                </Router>
            </div>
        );
    }
}

function Admin(){
    return(
        <div>
            <CRUDTable />
        </div>
    )
}


function About() {
    return (
        <div style={{ margin: 20, textAlign: "center" }} >
            <h3 style={{ backgroundColor: "#000000", fontWeight: "bold", borderRadius: '0.25em', textAlign: 'center', color: '#BAFBFF', border: '1px solid grey', padding: '0.3em' }}>About</h3>
            <br />
            <h1 align="center">About Durumbo</h1>
            <hr></hr>
            <h4>Durumbo is the intermediary between restaurants and customers.<br></br>
                We collect the restaurants near you, and make it easy for you the customer to choose the most convenient restaurant for your pleasure.<br></br>
                Here you can find your specific type of food, or a specific place.<br></br> We share the menu card
                and contact information for the restaurants
                and after that the restaurant takes over.
                <br/><br/>
                Durombo’s headquarter is located in Kongens Lyngby, and for now only operates in North Zealand (Nordsjælland), <br></br>
                but the company is currently planning on expanding their services to all of Denmark, and later all over the world.<br></br>
                <br/>
                Durumbo started from a small asbest-filled basement, with 7 good friends who had a plan to start a business. <br></br>
                It was rough in the start, and health took a lower priority than the company.<br></br>
                Unfortunately the company lost two people during this time, both due to asbest poisoning.
                <br/>In their memory the name of the company was created, combining their two names<br/><br/>
                RIP Dur & Umbo
                <br/><br/><br/><br/>
                <hr></hr></h4>
            <h1 align="center">Durumbo Team</h1>
            <hr />
            <h4 style={{ fontWeight: "bold" }}>Product Owner - Palle Bech</h4>
            <h5>Product Owner of the Durumbo</h5>
            <img src={Pab} class="img-responsive img-circle margin" style={{display: "inline"}} alt="Andreas" width="10%"/>
            <br/><br/><br/><br/>

            <h4 style={{ fontWeight: "bold" }}>Full Stack Developer, Scrum Master (S1) - Rasmus Jarnborg Friis</h4>
            <h5>Co-Founder of Durumbo</h5>
            <img src={Rasmus} class="img-responsive img-circle margin" style={{display: "inline"}} alt="Andreas" width="10%"/>
            <br/><br/><br/><br/>

            <h4 style={{ fontWeight: "bold" }}>Full Stack Developer, Scrum Master (S2) - André Borchersen</h4>
            <h5>Co-Founder of Durumbo</h5>
            <img src={André} class="img-responsive img-circle margin" style={{display: "inline"}} alt="Andreas" width="10%"/>
            <br/><br/><br/><br/>

            <h4 style={{ fontWeight: "bold" }}>Full Stack Developer, Scrum Master (S3) - Mohammad Hariri</h4>
            <h5>Co-Founder of Durumbo</h5>
            <img src={Mohammad} class="img-responsive img-circle margin" style={{display: "inline"}} alt="Andreas" width="10%"/>
            <br/><br/><br/><br/>


            <h4 style={{ fontWeight: "bold" }}>Full Stack Developer, Secretary - Andreas Guldborg Heick</h4>
            <h5>Co-Founder of Durumbo</h5>
            <img src={Andreas} class="img-responsive img-circle margin" style={{display: "inline"}} alt="Andreas" width="10%"/>
            <br/><br/><br/><br/>

        </div>
    );
}

function Home() {
    return (
        <div style={{ margin: 20 }} >
            <h3 style={{ backgroundColor: "#000000", fontWeight: "bold", borderRadius: '0.25em', textAlign: 'center', color: '#BAFBFF', border: '1px solid grey', padding: '0.3em' }}>Restaurants</h3>
            <RestaurantsPag />
        </div>
    );
}

export default App;
