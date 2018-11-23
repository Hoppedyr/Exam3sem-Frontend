import React, { Component } from 'react';
import '../../styles/App.css';
import facade from "../../facades/ApiFacade";


export default class SwapiTable extends Component {

    constructor(props) {
        super(props);
        this.state = {person: "", starship: "", planet: "", species: "", film: ""};
    }

    async componentDidMount() {
        try {
            const data = await facade.fetchSwapi();
            this.setState({person:data[0], species:data[3], film:data[4], planet:data[2], starship:data[1],data:data})
        } catch (err) {
            alert("ACCESS DENIED! CODE: " + err.status);
        }
    }


    render() {
        return (
            <div style={{ margin: 20, width: "100%" }}>
                <h3>Swapi</h3>
                <div className="row">
                    <div className="col-md-6">
                        {this.state.data !== undefined ? <h3>The Fetched Data</h3>: <h3>Loading Data...</h3>}
                        {<div>
                           {"Person: "} <br/> {this.state.data !== undefined? JSON.stringify(this.state.person): "Loading..."} <br/><br/>
                           {"Species: "} <br/> {this.state.data !== undefined? JSON.stringify(this.state.species): "Loading..."} <br/><br/>
                           {"Film: "} <br/> {this.state.data !== undefined? JSON.stringify(this.state.film): "Loading..."}<br/><br/>
                           {"Planet: "} <br/> {this.state.data !== undefined? JSON.stringify(this.state.planet):"Loading..."}<br/><br/>
                           {"Starship: "} <br/> {this.state.data !== undefined? JSON.stringify(this.state.starship):"Loading..."}<br/><br/>
                            </div>}
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}