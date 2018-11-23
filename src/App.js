import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
// import CRUDTable from "./components/CRUD Table/CRUDTable";
import facade from "./facades/ApiFacade";

import ShowTable from "./components/RestaurantTable/ShowSimpleSwapiTable";
import SwapiTable from "./components/RestaurantTable/SwapiTable";
import RestaurantsPag from "./components/RestaurantTable/RestaurantsPag";
import AdminView from "./components/Admin/AdminView";

const topics = [{ id: "topic-1", topic: <RestaurantsPag /> },
{ id: "topic-2", topic: <SwapiTable /> },
{ id: "topic-3", topic: "Yet another Topic" },
{ id: "topic-4", topic: <ShowTable /> }];

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasLoggedIn: false
        }
    }

    Admin = () => {
        const hasLoggedIn = facade.loggedIn();
        console.log(hasLoggedIn);
        return (
            <div>
                <h2>Admin Page</h2>
                <br />
                <LogIn totalLogOut={this.totalLogOut} facade={facade} />
                <AdminView loggedInStatus={facade.loggedIn()}/>
            </div>
        );
    }


    totalLogOut = () => {
        facade.logout()
        this.setState({ hasLoggedIn: false });
    }


    render() {
        return (
            <Router>
                <div>
                    <ul className="header">
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/topics">Topics</NavLink>
                        </li>
                        <li className="float-right">
                            <NavLink to="/admin">
                                <span className="glyphicon glyphicon-log-in"></span>  Admin Login
                            </NavLink>
                        </li>
                    </ul>
                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/admin" component={this.Admin} />
                </div>
            </Router>
        );
    }
}


function About() {
    return (
        <div>
            <h2>About</h2>
            <br />
            <h4>Quick Start Project for group #IkkeForLangt</h4>
            {/* <CRUDTable /> */}

        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <RestaurantsPag />
        </div>
    );
}


function Topics({ match }) {
    const lis = topics.map(t => <li key={t.id}> <Link to={`${match.url}/${t.id}`}>{t.id}</Link> </li>);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {lis}
            </ul>


            <Route path={`${match.path}/:topicId`}
                render={(props) =>
                    <Topic {...props} detail={topics.find(t => t.id === props.match.params.topicId)} />} />


            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match, detail }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
            <div>{detail.topic}</div>
        </div>
    );
}

export default App;
