import React, { Component } from 'react';
import '../../styles/App.css';
import MakeTable from './MakeSimpleSwapiTable';
import facade from "../../facades/ApiFacade";


class ShowTable extends Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }


  async componentDidMount() {
    try {
      let data = await facade.fetchSwapi();
      this.setState({ data });

    } catch (err) {
      alert("ACCESS DENIED! CODE: " + err.status);
    }
  }

  // save = async () => {
  //   const data = await fetch(URLSwapi + "1").then(handleHttpErrors);
  //   this.setState({ data: data });
  //   // alert("SAVE");
  // }


  render() {
    return (
      <div style={{ margin: 20, width: "100%" }}>
        <div className="row">
          <div className="col-md-6">
            <h3>Swapi Person</h3>
            <MakeTable data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTable;
