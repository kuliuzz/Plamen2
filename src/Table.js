import React, { Component } from 'react';
import TableRow from './TableRow'
//import $ from 'jquery';

class Table extends Component{
  render(){
    //{ if(obb in e)console.log(e[obb])}
    
    
    
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
              this.props.rows.rows.map((e) => {
                return <TableRow passedInfo={e} key={Object.keys(e)} hash={Object.keys(e)[0]} />
              })
            }
            
          </tbody>
        </table>
    );
  }
}
export default Table;