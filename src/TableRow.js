import React, { Component } from 'react';
var s = {color: 'white'};

class TableRow extends Component {
  
  render()
  { //console.log(this.props.hash); 
    const x = this.props.passedInfo[this.props.hash];
    return(
     
       <tr>
          <th scope="row">{x.firstNames}</th>
          <td>drented</td>
          <td>{x.firstNames}</td>
          <td>{x.lastName}</td>
          <td>{x.firstNames}</td>
          <td>{x.productd}</td>
          <td>{x.period}</td>
          <td>{x.price}</td>
          <td>{x.note}</td>
        </tr>
      );

    
  }
  
}
export default TableRow;