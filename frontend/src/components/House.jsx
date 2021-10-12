import React from 'react';
import "./house.css" ;

// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';


const axios = require('axios').default;


class House extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:4000/users/').then(res=>{
            console.log(res.data);
            this.setState({
                data: res.data 
            })
        })
    }

    // filter=()=>{
    //     filters=()=>(
    //         <div className="list-jobs-filter">
    //             <Select
    //             variant="outlined"
    //             className="list-jobs-filter-select"
    //             labelId="type"
    //             id="type"
    //             name="type"
    //             value={this.state.type}
    //             // onChange={this.handleChange}
    //             >
    //             <MenuItem value="ALL">All</MenuItem>
    //             <MenuItem value="1">1 BHK</MenuItem>
    //             <MenuItem value="INTERN">Intern</MenuItem>
    //             <MenuItem value="OLD">Old</MenuItem>
    //             </Select>
    
    //             <Select
    //             variant="outlined"
    //             className="list-jobs-filter-select"
    //             width="40%"
    //             labelId="status"
    //             id="status"
    //             name="status"
    //             value={this.state.status}
    //             onChange={this.handleChange}
    //             >
    //             <MenuItem value="ALL">All</MenuItem>
    //             <MenuItem value="NEW">New</MenuItem>
    //             <MenuItem value="APPLIED">Applied</MenuItem>
    //             <MenuItem value="CANCELLED">Cancelled</MenuItem>
    //             </Select>
    //         </div>
    //     )
    // }
    render(){
        const {data}=this.state;
        console.log(data);
        return(
            <div>
                {
                    this.state.data.map(house=>(
                        <div>
                            <a href={"/house/"+house.HRA_id} target="_blank" >
				<div class="card">
					<img class="card-image" src="/images/duplex-1.jpeg" alt="apart-1"  style={{"width": "30%"}}/>
					<div class="card-matter">
						<h3> {house.BHK} BHK residential {house.house_type} for rent in {house.address}  </h3>
						<p><b>{house.house_name} </b></p>
						<div class="card-mainline">
							<h2 class="card-amount"> {house.rent} </h2> 
							<h2 class="card-area"> 3,500sq.ft</h2> 
							<h2 class="card-BHK"> {house.BHK} BHK </h2>
						</div>
						<p class="card-description"> Property location adjacent to 100 ft road, gated community with 60 flat apartment +24 hours water facility +reserved car parking+ one minute walk away to school+1km away to multi speciality hospital +1km away from ongole railway station</p>
					</div>
				</div>
		  	</a>
                        </div>
                    ))
                }
            </div>
        )
    }
};


export default House ;

