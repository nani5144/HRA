import React from 'react';
import "./house.css" ;

class Header extends React.Component{

    render(){
        
        return(
            <div>
                <div class="header">
   		<h1>HOUREN</h1>
   		<div>
   			<button class="Loginform" onclick="document.getElementById('id01').style.display='block'" style={{"width":"auto","float":"right"}}>Login</button>
   		</div>
	</div>
            </div>
                    
        )
    }
};


export default Header ;