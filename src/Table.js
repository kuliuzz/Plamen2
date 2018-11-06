import React, { Component } from 'react';
import TableRow from './TableRow'
import $ from 'jquery';
import 'bootstrap'; 
class Table extends Component{
  constructor(){
    super(props);
    //this.editRow = this.editRow.bind(this);
  }
  // editRow(data){
  //   const formObject = data.passedInfo[data.hash]
   
  //   document.getElementById('submitBtn').setAttribute("style", "display:none;");
  //   document.getElementById('updateBtn').setAttribute("style", "display:true;");
  //   $(".modal-body #firstName").val( formObject.firstNames );
  //   $(".modal-body #lastName").val( formObject.lastName );
  //   $(".modal-body #telephoneInput").val( formObject.telephone );
  //   $(".modal-body #inputProduct").val( formObject.product );
  //   $(".modal-body #inputPrice").val( formObject.price );
  //   $(".modal-body #inputPeriod").val( formObject.period );
  //   $(".modal-body #inputDate").val( formObject.dateAdded );
  //   $(".modal-body #noteInput").val( formObject.note );
  //   $(".modal-body #editPrice").val( formObject.editPrice );
  //   $("#myModal").modal()


  //   console.log(formObject)
  //   }
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