import React from 'react';

export default class Player extends React.Component{
 constructor(props){
  super(props)
  this.state = {}  
 }   
 render(){
 //   let item = this.props.teams.map((item)=> this.props.teams.item)
// const ageTest = this.props.players.filter((player == player.age > 30) => console.log('ocde'))  style={{color:'red'}  }
let ageTest = this.props.age > 30 ? 'red': 'blue';
let isCaptain = this.props.poste === 'captain' ? 'pink': console.log(this.props.poste + "*******");

  return(
    <div>
      <p>Player: {this.props.name} </p>
      <p className={isCaptain}>  Position:{this.props.poste}  </p>
     <p className={ageTest}>  {this.props.age } years old </p>
      
      <br/>
    <ul>
    {
    this.props.teams && this.props.teams.map((item)=> <li>{item}</li>)  //coditional render
    }
       
    </ul>
    {
       // this.props.players.map((item)=> <p>{item.name}</p>)  
    //   
    
    }
    </div> 
    

  )  

 }
}
//    {this.props.teams.map((i, index) => <li>{this.props.teams[index]}</li> )}  
//this.props.player.map((i) => <p>{this.props.players[index].name}</p>  