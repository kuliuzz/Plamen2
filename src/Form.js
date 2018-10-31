import React, { Component } from 'react';
import $ from 'jquery';
import DatePicker from 'react-date-picker';
//import DatePicker from 'react-date-picker/dist/entry.nostyle';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstNames: "",
            lastName: "",
            telephone: "",
            product: "",
            price: "",
            period: "",
            dateAdded: "",
            note: "",            
            editPrice: true,
            //date: new Date(),
        };

      }
    
  
    Click(e){
     e.preventDefault();   
    //console.log(this.state);
    };
    ValidateText(event){  
        const re = /[\w]/g;

        if (!event.key.match(re)){
            event.preventDefault();
        }else{
            this.setState({[event.target.name]: event.target.value + event.key})         
        }
        if(event.key === "Backspace"){
            this.setState({[event.target.name]: event.target.value.substring(0, event.target.value.length-1) })       
        }
    };
    ValidatePhone(event){   
        const re = /[\d]/g;
        if (!event.key.match(re)){
                event.preventDefault();
        }else{
            this.setState({[event.target.name]: event.target.value + event.key})         
        }
        if(event.key === "Backspace"){
            this.setState({[event.target.name]: event.target.value.substring(0, event.target.value.length-1) })       
        }
    };
    ValidatePrice(event){  
        const re = /[\d\.]/g;

        if (!event.key.match(re) || (event.key === "." && event.target.value.includes("."))){
            event.preventDefault();
        }else{
            this.setState({[event.target.name]: event.target.value + event.key})         
        }
        if(event.key === "Backspace"){
            this.setState({[event.target.name]: event.target.value.substring(0, event.target.value.length-1) })       
        }
    };

    EditPriceButton(e){
        e.preventDefault();
        this.setState({editPrice: false});
    }
    componentDidMount() {
        document.addEventListener('mouseup', this.ResetForm.bind(this));
      }
    ResetForm(e){
        const modal = $(e.target).closest('#myModaal').length;
        const addBtn = $(e.target).closest('#bbb').length

        this.SubmitForm = this.SubmitForm.bind(this);
        // const date = new Date();
        // const dateSubmited = date.getMonth() + "/" +  date.getUTCDate() + "/" + date.getFullYear();
        // this.setState({dateAdded: `${dateSubmited}`})
        
        if (!addBtn && (!modal || e.target.id === 'closeBtn') ) {
            document.getElementById("product-form").reset();
            this.setState({
                firstNames: "",
            lastName: "",
            telephone: "",
            product: "",
            price: "",
            period: "",
            dateAdded: "",
            note: "",            
            editPrice: true
            });
        }
    }
    SubmitForm(e){
        
        // const blueprint =   /^([0-9]+(\.[0-9]+)?)/g;
        // const a = document.forms['login'].getElementsByTagName("input");
        // for (const input of a) {
        //     if(!input.value || (input.id === "inputPrice" && !input.value.match(blueprint)))
        //     input.className = input.className + " is-invalid";
        //     console.log(input.className)
        // }
        //if(!this.state.telephone.match(blueprint))
        
        this.props.passData(this.state);
        //document.getElementById("product-form").reset();
        this.setState({
            firstNames: "",
            lastName: "",
            telephone: "",
            product: "",
            price: "",
            period: "",
            dateAdded: "",
            note: "",            
            editPrice: true
        });
    }

    onChange(date){
        const selectedDate = date.getMonth() + "/" +  date.getUTCDate() + "/" + date.getFullYear();
        this.setState({ dateAdded: selectedDate })
    } 
    render(){
        
        return(
<div id="myModal" className="modal fade" role="dialog">
    <div id="myModaal" className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Add client</h4>
                <button id="closeBtn" type="button" className="close" data-dismiss="modal" onSubmit={(e) => {e.preventDefault()}}>&times;</button>
            </div>
            <div className="modal-body">   
                <form name="login" className="needs-validation" id="product-form">
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="firstName">First and Second name</label>
                            <input  type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({firstNames: e.target.value})} 
                                    id="firstName" 
                                    placeholder="Enter names" 
                                    required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input  type="text" 
                                    className="form-control" 
                                    onChange={e => this.setState({lastName: e.target.value})}
                                    id="lastName" 
                                    placeholder="Enter name" 
                                    required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="telephoneInput">Telephone</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend">+359</span>
                                </div>
                                <input  type="text" 
                                        name="telephone"
                                        value={this.state.telephone}
                                        className="form-control" 
                                        onKeyUp={(e) => this.ValidatePhone(e)} 
                                        id="telephoneInput" 
                                        placeholder="Enter phone number" 
                                        aria-describedby="inputGroupPrepend" 
                                        required />
                            </div>
                        </div>
                    </div>           
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputProduct">Product</label>
                            <select id="inputProduct" className="form-control" onChange={(e) => this.setState({product: e.target.value})}>
                                <option value="1">Product 1</option>
                                <option value="2">Product 2</option>
                                <option value="3">Product 3</option>
                                <option value="4">Product 4</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputPeriod">Period</label>
                            <select id="inputPeriod" className="form-control" onChange={(e) => this.setState({period: e.target.value})}>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                            </select>
                        </div> 
                        <div className="col-md-4 mb-3">
                            <label htmlFor="inputPrice">Price</label>
                            <div className="input-group">
                                <input  type="text"
                                        name="price" 
                                        className="form-control" 
                                        onKeyUp={(e) => this.ValidatePrice(e)} 
                                        //onChange={(e) => this.setState({price: e.target.value})}
                                        id="inputPrice" 
                                        value={this.state.price}
                                        disabled={this.state.editPrice} />
                                <div className="input-group-prepend">
                                    <button className="btn btn-primary" onClick={(e)=>this.EditPriceButton(e)} >Edit sum</button>
                                </div>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className="form-group">
                        <textarea className="form-control" onChange={(e) => this.setState({note: e.target.value})} rows="5" />
                    </div>
                    <div className="col-md-4 mb-3">
                    <label htmlFor="inputPrice">Date</label>
                        <DatePicker
                         className="input-group"
                        onChange={(e)=>this.onChange(e)}
                        value={this.state.date}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary col-md-4"
                                data-dismiss="modal"
                                onClick={this.SubmitForm}
                        >Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>    
        );
    };
}

export default Form;

