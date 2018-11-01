import React, { Component } from 'react';
var s = {color: 'white'};

class TableRow extends Component {
  componentDidMount(){
    console.log("dd")
  }
  render()
  { 
    const x = this.props.passedInfo[this.props.hash];
    const propsReturned = this.props;
    return(    
       <tr onDoubleClick={() => this.props.editRow(propsReturned)}>
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