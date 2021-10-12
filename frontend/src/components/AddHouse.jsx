import React from 'react';
import "./AddHouse.css" ;

const axios = require('axios').default;

class AddHouse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
    }
    

    handleInputChange= (event) =>{

        let name=event.target.name;
        let val=event.target.value;
        this.setState({[name]:val});
      
    }
    // +data.name+"','"+data.ph_no+"','"+data.house_name+"','"+data.house_type+"',
    // '"+data.rent+"','"+data.address+"','"+data.city+"','"+data.BHK+"','"+data.available_for+"','"
    // +data.HRA_id+"')";
    handleSubmit=(event)=>
    {  event.preventDefault();
      console.log("manideep");
      axios.post(`http://localhost:4000/users/add_the_house`,{
        name:this.state.Name,
        ph_no:this.state.ph_no,
        house_name:this.state.House_name,
        house_type: this.state.House_type || "Independent_house" ,
        rent:this.state.Rent,
        address:this.state.Address,
        city:this.state.city,
        BHK : this.state.BHK,
        available_for : this.state.available_for || "family",
        HRA_id : this.state.HRA_id
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
    this.setState({
      Name:'',
      ph_no:'',
      House_name:'',
      House_type:'',
      Rent:'',
      Address:'',
      city:'',
      BHK:'',
      available_for:'',
      HRA_id:''

    });
    

    }




    render(){
        const {data}=this.state;
        console.log(this.state);
        return(
          <div class="main">
            <div class="side"></div>  
            <div class="forms"> 
               <h1 style={{"color":"red","textAlign":"center"}}> Add the House</h1> 
                <form>
                    <label ><span> <h3>Name:</h3></span><br/>
                    <input type="text" name="Name"
                      value={this.state.Name}
                         type="text"
                         onChange={this.handleInputChange} />
                    </label><br/><br/>
                    <label ><span> <h3>Phone Number:</h3></span><br/>
                    <input type="text" name="ph_no"
                      value={this.state.ph_no}
                         type="text"
                         onChange={this.handleInputChange} />
                    </label><br/><br/>
                    <label ><span> <h3>House Name:</h3></span><br/>
                    <input type="text" name="House_name"
                      value={this.state.House_name}
                         type="text"
                         onChange={this.handleInputChange}/>
                    </label><br/><br/>
                    <label ><span> <h3>House Type:</h3></span><br/>
                        <select name="House_type" value={this.state.House_type} onChange={this.handleInputChange}>
                            <option value="Independent_house" >Independent_house</option>
                            <option value="Independent_floor">Independent_floor</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                        </select>
                    </label><br/><br/>
                    <label ><span> <h3>Rent:</h3></span><br/>
                    <input type="text" name="Rent"
                      value={this.state.Rent}
                         type="text"
                         onChange={this.handleInputChange} />
                    </label><br/><br/>
                    <label ><span> <h3>address:</h3></span><br/>
                    <input type="text" name="Address"
                      value={this.state.Address}
                         type="text"
                         onChange={this.handleInputChange} />
                    </label><br/><br/>
                    <label ><span> <h3>city:</h3></span><br/>
                    <input type="text" name="city"
                      value={this.state.city}
                         type="text"
                         onChange={this.handleInputChange}/>
                    </label><br/><br/>
                    <label ><span> <h3>BHK:</h3></span><br/>
                    <input type="text" name="BHK"
                      value={this.state.BHK}
                         type="text"
                         onChange={this.handleInputChange}/>
                    </label><br/><br/>
                    <label ><span> <h3>Available for:</h3></span><br/>
                    <select name="available_for" value={this.state.available_for} onChange={this.handleInputChange} >
                            <option value="Family">Family</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="company">shop/company</option>
                        </select>
                    </label><br/><br/>
                    <label ><span> <h3>HRA_id:</h3></span><br/>
                    <input type="text" name="HRA_id"
                      value={this.state.HRA_id}
                         type="text"
                         onChange={this.handleInputChange}/>
                    </label><br/><br/>
                    <label>
                        <input type="submit" onClick={this.handleSubmit}></input>
                    </label><br/><br/>

                   
                </form>  
            </div>
            <div class="side"></div>  
          </div>
        )
    }

};


export default AddHouse ;

