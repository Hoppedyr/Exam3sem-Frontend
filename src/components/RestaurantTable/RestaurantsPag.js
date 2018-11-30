import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

import React, { Component } from 'react';
import '../../styles/App.css';
import facade from "../../facades/Facade";
import ModalView from './ModalView';



export default class RestaurantTable extends Component {

    constructor(props) {
        super(props);
        this.state = { data: null };
    }


    async componentDidMount() {
        try {
            // let data = await facade.fetchSwapi();
            let data = await facade.getRestaurants();
            // data = data.filter((sw) => !sw.hasOwnProperty('error')); // catch errors at client instead of server
            // const data = await fetch(URL).then(handleHttpErrors)
            this.setState({ data })
        } catch (err) {
            alert("ACCESS DENIED! CODE: " + err.status);
        }
    }


    render() {
        const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#282c34', border: '1px solid grey', padding: '0.3em' }}>Restaurants</h3>;
        if (this.state.data !== null) {
            let page = 1;
            let sizePerPage = 10;
            // let totalSize = this.state.data.length;
            return (
                <div style={{ margin: 20, width: "100%" }}>
                    {<CaptionElement />}
                    <div style={{ textAlign: "center" }}>
                        <button className="btn btn-primary btn-lg" onClick={handleClick}> Clear all filters </button>
                        <br />
                        <br />
                    </div>
                    <BootstrapTable
                        striped
                        hover
                        bootstrap4
                        keyField='id'
                        data={this.state.data}
                        columns={columns}
                        filter={filterFactory()}
                        expandRow={expandRow}
                        pagination={paginationFactory({ page, sizePerPage })}
                    />

                </div>
            );
        }
        else {
            return <div><h1>Loading...</h1></div>
        }
    }
}



const expandRow = {

    renderer: row => (
        <div>
            <h1>{row.restName} - Contact Info</h1>
            <hr></hr>
            <h3>Phone Number: {row.phone}</h3>
            <h3>Website: <a fontSize='200%' href={row.website}>{row.website}</a></h3>
            <br/>
            <ModalView name={row.restName} menuUrl={row.pictureUrl}/>
        </div>
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
        if (isAnyExpands) {
            return <b>-</b>;
        }
        return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
        if (expanded) {
            return (
                <b>-</b>
            );
        }
        return (
            <b>...</b>
        );
    }
};

let nameFilter, foodtypeFilter, addressFilter, cityFilter;

const handleClick = () => {
    nameFilter('');
    foodtypeFilter('');
    addressFilter('');
    cityFilter('');
};
const columns =
    [
        {
            dataField: 'id',
            text: 'ID',
            hidden: true
        },
        {
            dataField: 'restName',
            text: 'Name',
            // filter: textFilter(),
            filter: textFilter({
                getFilter: (filter) => {
                    nameFilter = filter;
                }
            }),
            sort: true
        },
        {
            dataField: 'foodType',
            text: 'Food Types',
            // filter: textFilter(),
            filter: textFilter({
                getFilter: (filter) => {
                    foodtypeFilter = filter;
                }
            }),
            sort: true
        },
        // {
        //     dataField: 'website',
        //     text: 'Websites',
        //     // filter: textFilter(),
        // }, 
        {
            dataField: 'street',
            text: 'Address',
            // filter: textFilter(),
            filter: textFilter({
                getFilter: (filter) => {
                    addressFilter = filter;
                }
            }),
        },
        // {
        //     dataField: 'phone',
        //     text: 'Phones',
        //     // filter: textFilter(),
        // },
        {
            dataField: 'cityInfo.cityZip',
            text: 'City',
            // filter: textFilter(),
            filter: textFilter({
                getFilter: (filter) => {
                    cityFilter = filter;
                }
            }),
            sort: true
        }
    ];    
