import React, { Component } from "react";

export default class AdminView extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        console.log(props);
    }
    
    render() {
        if (this.props.loggedInStatus === true) {
            return (
                <div>
                    <h1>HEY</h1>
                </div>
            );
        }
        else { return <div>Log in first</div> }
    }
}