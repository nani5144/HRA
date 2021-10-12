import React from 'react';
import "./singlehouse.css" ;

const axios = require('axios').default;


class SingleHouse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: {}
        };
    }
    componentDidMount(){
        console.log(this.props.match.params.house_id);
        axios.get('http://localhost:4000/users/HRA_id/'+this.props.match.params.house_id).then(res=>{
            console.log(res.data[0]);
            this.setState({
                data: res.data[0]
            })
        })
    }
    render(){
        const {data}=this.state;
        console.log(data);
        return(
            <div>

<div class="heading">
		<h1>{data.BHK} BHK Fully Furnished Flat for rent in {data.address} for ₹{data.rent}, Ongole</h1>

	</div>

                <div class="main">

<div class="slideshow">
    <div class="Slides">
        <img src="/images/duplex-1.jpeg" style={{"width":"100%","min-height": "600px"}}/>
      </div>
    {/* <div class="Slides">
        <img src="C:\Users\manid\Desktop\hra photos\hall\hall-1.jpg" style={{"width":"100%","min-height": "600px"}}/>
      </div>
      <div class="Slides">
        <img src="C:\Users\manid\Desktop\hra photos\bedroom\bed-1.jpg" style={{"width":"100%","min-height": "600px"}}/>
      </div>
      <div class="Slides">
        <img src="C:\Users\manid\Desktop\hra photos\kitchen\kitch-1.jpg" style={{"width":"100%","min-height": "600px"}}/>
      </div> */}
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>

<div class="description">
    <h2> {data.BHK} BHK Fully Furnished Flat for rent in {data.address} for ₹{data.rent}, Ongole</h2>
    <h3> 3 bedrooms | 3 bathrooms | 1 kitchen | 1 pooja room</h3>
    <h2 style={{"margin-top": "35px"}}> Rent : ₹{data.rent}</h2> 
    <h3 style={{"margin-top":"35px"}}> HOUSE FOR : </h3>
    <button class="btn-hf"><b>FAMILY</b></button>
    <button class="btn-hf"><b>BACHELOR</b></button>
    <button class="btn-hf"><b>SHOP/COMPANY</b></button>
    <h2> Area: 3500sq.ft</h2>
    <h2>Furnishing Status : Furnished</h2>
    <h2> Age Of Property : 0-1 years old</h2>
    <h2> Type Of Property : {data.house_type} </h2>
    <h2> Address : {data.address}</h2>
</div>
</div>

<div class="facilities">
<h1> Facilities</h1>
<div style={{"display": "flex"}}>
    <i class="material-icons" style={{"font-size":"48px","color":"red" , "flex": "5%"}}>local_parking</i>
    <h2 style={{"flex": "15%", "margin-top": "5px", "margin-left":"-50px" }}>Parking</h2>
    <i class="material-icons" style={{"font-size":"36px","color":"red" , "flex": "5%"}}>wifi</i>
    <h2 style={{"flex": "15%", "margin-top": "5px", "margin-left":"-50px" }} >Wifi</h2>
    <i class="material-icons" style={{"font-size":"36px","color":"red" , "flex": "5%"}}>admin_panel_settings</i>
    <h2 style={{"flex": "15%", "margin-top": "5px", "margin-left":"-50px" }}>Security Personal</h2>
    <i class="material-icons" style={{"font-size":"36px","color":"red" , "flex": "5%"}}>park</i>
    <h2 style={{"flex": "15%", "margin-top": "5px", "margin-left":"-50px" }}>Park</h2>				
</div>
<br/>
<br/>
<div style={{"display": "flex"}}  >
    <i class="material-icons" style={{"font-size":"36px","color":"red" , "flex": "5%"}}>pool</i>
    <h2 style={{"flex": "15%", "margin-top": "5px", "margin-left":"-50px" }}>Pool</h2>
    <i class="material-icons" style={{"font-size":"36px","color":"red" , "flex": "5%"}}>fitness_center</i>
    <h2 style={{"flex": "15%", "margin-top": "5px", "margin-left":"-50px" }}>GYM</h2>
    <i class="material-icons" style={{"font-size":"36px","color":"red" , "flex": "5%"}}>elevator</i>
    <h2 style={{"flex": "15%", "margin-top": "5px", "margin-left":"-50px" }}>Lift</h2>
    <i class="material-icons" style={{"font-size":"36px","color":"red" , "flex": "5%"}}>handyman</i>
    <h2 style={{"flex": "15%", "margin-top": "5px", "margin-left":"-50px" }}>Maintainance Staff</h2>
</div>
<br/>

<hr/>

<div style={{"display": "flex"}}>
    <p style={{"flex": "25%", "margin-top": "25px", "font-size":"20px" }}>Facing : <b>west</b> </p>
    <p style={{"flex": "25%", "margin-top": "25px", "font-size":"20px" }}>Floor Number :<b>2nd of 4 floors</b></p>
    <p style={{"flex": "25%", "margin-top": "25px", "font-size":"20px" }}>Corner Property : <b>Yes</b></p>
    <p style={{"flex": "25%", "margin-top": "25px", "font-size":"20px" }}>Parking : <b>1 covered</b></p>
</div>


<div style={{"display": "flex"}}>
    <p style={{"flex": "25%", "margin-top": "5px", "font-size":"20px" }}>Power-Backup : <b>Partial</b> </p>
    <p style={{"flex": "25%", "margin-top": "5px", "font-size":"20px" }}>Rent Agreement Duration : <b>18 months</b></p>
    <p style={{"flex": "25%", "margin-top": "5px", "font-size":"20px" }}>Property-Age : <b>0 - 1 Years old</b></p>
    <p style={{"flex": "25%", "margin-top": "5px", "font-size":"20px" }}>Electricity & Water charges :<br/><b>Charges Not included</b></p>
</div>

<div style={{"display": "flex"}}>
    <p style={{"flex": "25%", "margin-top": "5px", "font-size":"20px" }}>Pet-friendly : <b>Yes</b> </p>
    <p style={{"flex": "25%", "margin-top": "5px", "font-size":"20px" }}>Flooring : <b>Marble</b></p>
    <p style={{"flex": "25%", "margin-top": "5px", "font-size":"20px" }}>Available from : <b>within 15 days</b></p>
    <p style={{"flex": "25%", "margin-top": "5px", "font-size":"20px" }}>HRA Code :<b>{data.HRA_id}</b></p>
</div>
<br/>
<hr/>

<div>
    <h2> About Property</h2>
    <p style={{"font-size": "20px"}}><b>Address</b>: Chenakesava Nagar, Ongole, A.P </p>
    <p style={{"font-size": "20px"}}>Close to all the car showrooms ( Mahindra, hyundai, ford & maruthi, nexa)</p>
    <p style={{"font-size": "20px"}}>Just next to Bypass</p>
    <p style={{"font-size": "20px"}}>Located in a peaceful & lush green zone</p>
    <p style={{"font-size": "20px"}}>4 sides ventilation</p>
    <p style={{"font-size": "20px"}}>Wide & bigger rooms</p>
</div>
</div>

            </div>
        )
    }
};


export default SingleHouse ;
