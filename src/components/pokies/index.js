import React from 'react';

export default class Pokies extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      pokes : []
    } 
  }

  componentDidMount(){
    let pokiUrl= 'https://pokeapi.co/api/v2/pokemon-species/'
    fetch(pokiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokes: data.results
        })
      //console.log(data)
      })
    //.then(console.log('res'))
      .catch(err => console.log('here is the error',err)) 
  }

  render() {
  let pokiList = () => {
    return(
      this.state.pokes.map(poke => {
        return(
         <div>
           <h3> {poke.name} </h3>
           <p> {poke.url} </p>
           <hr/>
         </div>
        )
      })
    )
  }
    return(
      <div>
      <h2>pokie list {this.state.pokes.length}</h2>  
      {pokiList()}
      </div>
    )  
  }
  

}