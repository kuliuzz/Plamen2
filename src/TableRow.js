import React, { Component } from 'react';
var s = {color: 'white'};

class TableRow extends Component {

  render()
  { 
    const x = this.props.passedInfo[this.props.hash];
    return(    
       <tr onDoubleClick={this.props.editRow}>
          <th scope="row">{x.firstNames}</th>
          <td>{x.dateAdded}</td>
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