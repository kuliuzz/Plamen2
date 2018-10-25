import React, { Component } from 'react';
import TableRow from './TableRow'
//import $ from 'jquery';

class Table extends Component{
  constructor(props){
    super(props)
    this.state = {props};

  }

  render(){
    return(
        <table className="table table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Due Date</th>
              <th scope="col">Date Rented</th>
              <th scope="col">First Names</th>
              <th scope="col">Last Name</th>
              <th scope="col">Telephone</th>
              <th scope="col">Product</th>
              <th scope="col">Period</th>
              <th scope="col">Price</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
{
  this.props.rows.rows.map((a)=>{
    for(let as in a.data){console.log(a.data[as])}
    
    //return <p>{as.data.firstNames}</p>
  })
}
            <TableRow passedInfo={this.state} />
          </tbody>
        </table>
    );
  }
}
export default Table;