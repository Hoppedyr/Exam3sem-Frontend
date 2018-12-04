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



// const topics = [{ id: "topic-1", topic: <RestaurantsPag /> },
// { id: "topic-2", topic: "topic 2" },
// { id: "topic-3", topic: "Yet another Topic" },
// { id: "topic-4", topic: "topic 4" }];

class App extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         hasLoggedIn: false
    //     }
    // }


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

    Admin = () => {
        if (facade.loggedIn() === true) {
            return (
                <div>
                    <CRUDTable />
                </div>
            );
        } else {
            return (
                <div style={{ margin: 20, textAlign: "center" }}>
                    <h3 style={{ backgroundColor: "#000000", fontWeight: "bold", borderRadius: '0.25em', color: '#BAFBFF', border: '1px solid grey', padding: '0.3em' }}>Admin Page</h3>
                    <h4>ACCESS DENIED: NOT LOGGED IN</h4>
                    <br />
                    <span style={{ fontSize: 50 }} className="glyphicon glyphicon-eye-close"></span>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            );
        }




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
                            {/* <li>
                                <NavLink to="/topics">Topics</NavLink>
                            </li> */}
                            {facade.loggedIn() ? (
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
                            ) : (
                                    <li className="float-right">
                                        <NavLink to="/login">
                                            <span className="glyphicon glyphicon-log-in"></span> Admin Login
                                        </NavLink>
                                    </li>
                                )}
                        </ul>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        {/* <Route path="/topics" component={Topics} /> */}
                        <Route path="/login" render={() => (
                            facade.loggedIn() ? (
                                <Redirect to="/admin" />
                            ) : (
                                    <LogIn login={this.adminLogin} />
                                )
                        )} />



                        {/* <Route path="m/admmin" component= {mAdmin}/> */}
                        {facade.loggedIn ? <Route path="/admin" component={this.Admin} /> : null}
                    </div>
                </Router>
            </div>
        );
    }
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
                <br/><br/>
                RIP Dur & Umbo
                <br/><br/><br/><br/>
                <hr></hr></h4>
            <h2 align="center">Durumbo Team</h2>
            <hr />
            <h4 style={{ fontWeight: "bold", fontSize: 20 }}>Product Owner - Palle Bech</h4>
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



// function Topics({ match }) {
//     const lis = topics.map(t => <li key={t.id}> <Link to={`${match.url}/${t.id}`}>{t.id}</Link> </li>);
//     return (
//         <div>
//             <h2>Topics</h2>
//             <ul>
//                 {lis}
//             </ul>


//             <Route path={`${match.path}/:topicId`}
//                 render={(props) =>
//                     <Topic {...props} detail={topics.find(t => t.id === props.match.params.topicId)} />} />


//             <Route
//                 exact
//                 path={match.path}
//                 render={() => <h3>Please select a topic.</h3>}
//             />
//         </div>
//     );
// }

// function Topic({ match, detail }) {
//     return (
//         <div>
//             <h3>{match.params.topicId}</h3>
//             <div>{detail.topic}</div>
//         </div>
//     );
// }

export default App;
