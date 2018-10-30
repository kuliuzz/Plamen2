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
      rows: []
    };
    this.passData = this.passData.bind(this);
  }

  componentWillMount(){
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
    // this.database.on('child_removed', snap => {
    //   for (let i = 0; i < previousNotes.length; i++) {
    //     if (previousNotes[i].id === snap.key) {
    //       previousNotes.splice(i, 1);
    //     }
    //   }
    //   this.setState({
    //     rows: previousNotes
    //   })
    // })
  }
  passData(data){
    this.database.push().set(data)
  }
  removeRow(rowId){
    this.database.child(rowId).remove();
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
        <Form passData={this.passData}/>
        <Table rows={this.state}/>
      </div>
    );
  }
  // onModalPress(event){
  //   console.log(event);
  //   $('#myModal').on('shown.bs.modal', function () {
  //     $('#myInput').trigger('focus')
  //   })
  // }
    onModalPress(event){
    console.log(event);
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  }
}
//.modal('show');
export default App;
