import React from 'react';
export default class Starwars extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        
    }
  }  
  componentDidMount() {
    //console.log('Our component Starwars did mount')
    let apiUrl='https://swapi.co/api/people/?results=10'
    fetch(apiUrl)
      .then(response => response.json())
    /* .then((resp)=>{
      //console.log(resp.json())
     return resp.json()
    }) */
    // .then(json => console.log(json.results[0]))
    .then(json => {
      console.log(json.results[3].name)
      console.log(json.results[2].name + "************")
    })
    .catch((err) =>{
      console.log(err)
    }) 

    
    
    }

  render(){
    return(
        <h1>starwars</h1>
    )  
  }
}