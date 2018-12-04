import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import windowSize from 'react-window-size'
import MyImageSvg from './styles/Logo.svg';

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
                <div style={{ margin: 20 }}>
                    <h3 style={{fontWeight: "bold", borderRadius: '0.25em', textAlign: 'center', color: '#282c34', border: '1px solid grey', padding: '0.3em' }}>Admin Page</h3>
                    <h4 style={{textAlign: "center"}}>ACCESS DENIED: NOT LOGGED IN</h4>
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
                                <img style={{width:"50%",height:windowSize.height-44.55}} src={MyImageSvg}/>
                                <h5>Scroll down</h5>
                                <span className="glyphicon glyphicon-menu-down"></span>
                        </li>
                        </ul>
                        <ul className="header navbar-fixed-top">
                            <li>
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/topics">Topics</NavLink>
                            </li> */}
                            {facade.loggedIn() ? (
                                <div>
                                    <li>
                                        <NavLink to="/admin">Admin Panel</NavLink>
                                    </li>

                                    <li className="float-right">
                                        <NavLink to="/" onClick={this.totalLogOut}>
                                            <span className="glyphicon glyphicon-log-out"></span> Admin Logout
                                        </NavLink>
                                    </li>
                                    
                                    <li className="float-right navbartext">
                                        <p>Logged in as: {facade.username}</p>
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
                        <hr />
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
        <div style={{ margin: 20 }}>
            <h3 style={{fontWeight: "bold", borderRadius: '0.25em', textAlign: 'center', color: '#282c34', border: '1px solid grey', padding: '0.3em' }}>About</h3>
            <br />
            <h1 align="center">About Durumbo</h1>
            <hr></hr>
            <h4>Durumbo is the intermediary between restaurants and customers.<br></br>
 We collect the restaurants near you, and make it easy to choose the most convenient restaurant for your pleasure.<br></br>
 Here you can find your specific type of food, or in a specific place.<br></br> We share the menu card
and contact information for the restaurants
and after that the restaurant takes over.<br></br>
Durombo’s headquarter is located in Lyngby, and for now only operates in the northern sealand, <br></br>
but with the plans on expanding there service all over Denmark, and later all over the world.<br></br>
<br></br>
Durumbo started from a small asbest-filled basement, with 7 good friends who had a plan to start a business. <br></br>
It was rough in the start, and health took a lower priority than the company.<br></br>
Unfortunately we lost two people in the company, during the come-up, to the asbest.
RIP.
<br></br>
<br></br>
<hr></hr></h4>
            <h2 align="center">Board of Directors</h2>
            <hr/>
            <h3>Chairman of the Board - Nikolaj Brandt Hemmeshøj : Denmark</h3>
            
            <br/>
            <h5>Founder and idea-man behind Durumbo and it's great success</h5>
            <br/>
            <hr/>
            <h4>Durumbo Chief Executive Officer - Iulia Zaharia : Moldova</h4>
            <h5>Created the innovative logo and manages the company</h5>
            <hr/>
            <h4>Durumbo Chief Technical Officer - Mohammad Hariri : Sweden</h4>
            <h5>Our immigrant that the government forced us to employ</h5>
            <hr/>
            <h4>Durumbo Manager of Fredagsbar - Rasmus Jarnborg Friis : Denmark</h4>
            <h5>Some random drunk guy that smokes oregano in his office</h5>
            <hr/>
            <h4>Durumbo Chief Financial Officer - Andreas Guldborg Heick : Denmark</h4>
            <h5>Sends taxpayer money through Danske Bank Estonia to make Durumbo great again</h5>
            <hr/>
            <h4>Durumbo Danske Bank Estonia Contact Person - André Borchersen : Denmark</h4>
            <h5>Runs the Durumbo laundromat in Estonia, that is why he is always late</h5>
            <hr/>

        </div>
    );
}

function Home() {
    return (
        <div style={{margin: 20}} >
            <h3 style={{ fontWeight: "bold", borderRadius: '0.25em', textAlign: 'center', color: '#282c34', border: '1px solid grey', padding: '0.3em' }}>Restaurants</h3>
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
