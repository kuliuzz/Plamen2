import React, { Component } from 'react';
import TableRow from './TableRow'
import $ from 'jquery';
import 'bootstrap'; 
class Table extends Component{

  editRow(data){
    // const a = data;//this.props.passedInfo[this.props.hash].dateAdded;
    // console.log(a)
    let a = $("#myModal").modal()
    $(".modal-body #firstName").val( "myBookId" );
    console.log(a)
    }
  render(){
    //{ if(obb in e)console.log(e[obb])}
    
    
    
    return(
        <table className="table table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Due Date</th>
              <th scope="col">Date Rented</th>git 
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
                return <TableRow passedInfo={e} 
                                 key={Object.keys(e)} 
                                 hash={Object.keys(e)[0]} 
                                 
                                 editRow={this.editRow}
                        />
              })
            }
            
          </tbody>
        </table>
    );
  }
}
export default Table;