import React from 'react'
import Player from './player'
export default class Players extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        players:[
          {
            name:'Wendi',
            poste:'goalie',
            isPermanent: false,
            age: 33  
          },
          {
            name:'Amandie',
            poste:'midfield',
            isPermanent: true,
            age: 26    
          },
          {
            name:'Sakina',
            poste:'defender',
            isPermanent: true,
            age: 36   
          },
          {
            name:'Sarha',
            poste:'forward',
            isPermanent: true,
            age:30    
          },
          {
            name:'Eginie',
            poste:'captain',
            isPermanent: true     
          }  

        ]
      }  
    }
  render() {
   /*  const meme= ()=>{
      players.filter((player) => !player.isPernament ?  player : false)
    }
    meme(console.log(this.props.player)) */
  //  console.log(this.props)
  const first= this.state.players[0].name
//  this.state.players.map((player,index)=> player[index].name)  

    return(
     
        <section>
          <Player 
            name={'sisi'}
            poste={'defender'} 
            isPermanent= {true}
            teams={[
              'Real Madrid',
              'Bordeaux',
              'Juventus'
            ]}  
          />
        {
      this.state.players.map((player, index)=>{   
          return (
            <Player
                name={player.name}
                poste={player.poste}
                isPermanent= {player.isPermanent}
                age={player.age} 
            />
           
          ) 
          })
        }
            
          <h1>Vive le footbal féminin</h1>
          <p>it's  {this.props.date} </p>
         <p>{first}</p>
        </section>
    )
  }  
}