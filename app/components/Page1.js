import React from 'react';
import axios from 'axios';

class Page1 extends React.Component{
  componentDidMount(){

    axios.get('http://api.notetaker.rails/')
      .then(function(response) {
        console.log("about to make a successufl request");
        console.log(response);
      })
      .catch(function(response) {
        console.log("about to make a failed request");
        console.log(response);
      })
  }
  render(){
    return(
      <div>
        <h3> PAGE 1 </h3>
      </div>
    )
  }
};  

export default Page1;
