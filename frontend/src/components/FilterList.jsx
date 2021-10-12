import React from 'react';
import "./house.css" ;
import House from './House.jsx'
const axios = require('axios').default;


class FilterList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          BHK: 'All',
          rentMin: 0,
          rentMax: 10^6,
        };
    }
   
    render(){
        const {data}=this.state;
        console.log(data);
        return(
            <div className ='filter-list-main' >
                <div class="sidenav">
                <div>
				<h3 >NO. OF BHK</h3>
				<div>
					<label class="BHKcontainer FILTERcontainer">1BHK
						<input type="checkbox"/>
						<span class="BHKcheckmark FILTERcheckmark"></span>
					</label>
					<label class="BHKcontainer FILTERcontainer">2BHK
				    	<input type="checkbox"/>
				    	<span class="BHKcheckmark FILTERcheckmark"></span>
					</label>
					<label class="BHKcontainer FILTERcontainer">3BHK
					    <input type="checkbox"/>
					    <span class="BHKcheckmark FILTERcheckmark"></span>
					</label>
					<label class="BHKcontainer FILTERcontainer">4BHK
				    	<input type="checkbox"/>
				    	<span class="BHKcheckmark FILTERcheckmark"></span>
					</label>
					<label class="BHKcontainer FILTERcontainer">5BHK
				    	<input type="checkbox"/>
				    	<span class="BHKcheckmark FILTERcheckmark"></span>
					</label>
				</div>
			</div>
                </div>

                <div class="sidecontext">
                    <House BHK={this.state.BHK} rentMin={this.state.rentMin} rentMax={this.state.rentMax}/>
                </div>

            </div>
        )
    }
};


export default FilterList ;

