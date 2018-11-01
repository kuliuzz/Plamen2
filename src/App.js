import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/app';
import { DB_CONFIG } from './Database'
import './App.css';
import 'bootstrap';
import $ from 'jquery'; 
import Form from './Form.js';
import Table from './Table.js';

class App extends Component {
  constructor(){
    super();

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('rows');
    this.state = {
      rows: [],
      products: []
    };
    this.passData = this.passData.bind(this);
    this.updateRow = this.updateRow.bind(this);
    //this.toggleSubmitUpdate = this.toggleSubmitUpdate.bind(this);
  }

  componentDidMount(){

    //const rootRef = firebase.database().ref().child('react');
    const previousNotes = [].concat(this.state.rows);
    this.database.on('child_added', snap => {
      previousNotes.push({
        [snap.key]: snap.val()
      })
      this.setState({
        rows: previousNotes
      })
    })
  }
  updateRow(rowData){
    const db = firebase.database().ref();
    const data = {
      firstNames: rowData.firstNames,
      lastName: rowData.firstNames,
      telephone: rowData.firstNames,
      product: rowData.firstNames,
      price: rowData.firstNames,
      period: rowData.firstNames,
      dateAdded: rowData.firstNames,
      note: rowData.firstNames,            
      editPrice: rowData.firstNamesue
    }
    db.child(`rows/${rowData.hash}`).update(data);
  }
  passData(data){
    this.database.push().set(data)
  }
  removeRow(rowId){
    this.database.child(rowId).remove();
  }
  onModalPress(){
    document.getElementById('submitBtn').setAttribute("style", "display:true;");
    document.getElementById('updateBtn').setAttribute("style", "display:none;");
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  }

  render() {
    return (
      <div className="App">
        <button type="button" 
                className="btn btn-info btn-lg"
                id="bbb" 
                onClick={this.onModalPress} 
                data-toggle="modal" 
                data-target="#myModal">Open Modal</button>
        <Form passData={this.passData} updateRow={this.updateRow}/>
        <Table rows={this.state} />
      </div>
    );
  }
}

export default App;
