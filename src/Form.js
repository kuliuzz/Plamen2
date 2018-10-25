import React, { Component } from 'react';
import $ from 'jquery';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstNames: "",
            lastName: "",
            telephone: "",
            product: "",
            period: "",
            price: "",
            note: "",
            editPrice: true
        };
        this.SubmitForm = this.SubmitForm.bind(this);
      }
    
  
    Click(e){
     e.preventDefault();   
    console.log(this.state);
    };

    AvoidSpace(event){   
        //console.log(event);    
        const re = /\d/g;  
        if (!event.key.match(re)) 
            event.preventDefault();
        this.setState({[event.target.name]: event.target.value})         
    };

    SumButton(e){
        e.preventDefault();
        this.setState({editPrice: false});
    }
    componentDidMount() {
        document.addEventListener('mouseup', this.ResetForm.bind(this));
      }
    ResetForm(e){
        const modal = $(e.target).closest('#myModaal').length;
        const addBtn = $(e.target).closest('#bbb').length
        
        if (!addBtn && (!modal || e.target.id === 'closeBtn') ) {
            document.getElementById("product-form").reset();
            this.setState({
                firstNames: "",
                lastName: "",
                telephone: "",
                product: "",
                period: "",
                price: "",
                note: "",
                editPrice: true
            });
        }
    }
    SubmitForm(){
        this.props.passData(this.state);
        //alert(this.state.product);
    }


    render(){
        return(
<div id="myModal" className="modal fade" role="dialog">
    <div id="myModaal" className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Add client</h4>
                <button id="closeBtn" type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">   
                <form className="needs-validation" id="product-form" onSubmit={(e)=> e.preventDefault() }>
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
                                        className="form-control" 
                                        onKeyPress={(e) => this.AvoidSpace(e)} 
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
                                <option>Week</option>
                                <option>Month</option>
                            </select>
                        </div> 
                        <div className="col-md-4 mb-3">
                            <label htmlFor="inputPrice">Price</label>
                            <div className="input-group">
                                <input  type="text"
                                        name="price" 
                                        className="form-control" 
                                        onKeyDown={(e) => this.AvoidSpace(e)} 
                                        id="inputPrice" 
                                        disabled={this.state.editPrice} />
                                <div className="input-group-prepend">
                                    <button className="btn btn-primary" onClick={(e)=>this.SumButton(e)} >Edit sum</button>
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
                    <div className="text-center">
                        <button className="btn btn-primary col-md-4"
                                // onClick={() => this.ResetForm()} 
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

