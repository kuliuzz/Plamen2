import React, { Component } from 'react';
//import $ from 'jquery';

class Table extends Component{
  state = {};
  componentDidMount() {
    //document.onload(alert('hello'));
  }
  render(){
    var s = {color: 'white'};
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
            <tr className="bg-danger" style={s}>
              <th scope="row">22/10/2018</th>
              <td>22/10/2018</td>
              <td>Kolyo Minchev</td>
              <td>Peev</td>
              <td>896633150</td>
              <td>neshto si</td>
              <td>Week</td>
              <td>170.00</td>
              <td>dasdasd</td>
            </tr>

          </tbody>
        </table>
    );
  }
}
export default Table;