import React from 'react';
import "./house.css" ;

const axios = require('axios').default;



class Main extends React.Component{
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
    render(){
        const {data}=this.state;
        console.log(data);
        return(
            <div>
                hi
            </div>
        )
    }
};


export default Main ;

