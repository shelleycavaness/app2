import React from 'react';
import Character from './character'

export default class Starwars extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    // isLoading: true, 
     characters: [
        /* { name: 'Amare',
          hair_color: 'green'
        },
        { name: 'Coco',
          hair_color: 'pink'
        },
        { name: 'Scott',
          hair_color: 'brown'
        },
        { name: 'Miss Stinker',
        hair_color: 'blond'
        }, */
     ]
    }
  }  
  componentDidMount() {
 //   console.log('Our component Starwars did mount')
    let apiUrl='https://swapi.co/api/people/?results=10'
    fetch(apiUrl)
     .then(response => response.json())
//     .then(json => console.log(json.results[1]) )
     .then(data => {
       console.log(data)
       this.setState({
         //characters: data.results[3],
         characters:data.results,
         } //, () => console.log(this.state.characters)
         )
        })
    // .then(console.log(this.state.characters ))  
    .catch((err) =>{
     console.log(err)
      }) 
 }

  render(){
  /*   let Charaterlist = this.state.characters.map((character,index) =>{
      return (
        <Character
          key={'character-  ' +index}
          firstname ={character.name}
          hairColor= {character.hair_color}
         />
      )  
    })  */

    let Charaterlist= () => { 
      return (this.state.characters.map((item) => {
       return <li key={item.name}>{item.name} </li>
        })
       )
      }
    
   
    //console.log(Charaterlist)
    return(
      <div>
        <h2>{this.state.characters.name}</h2>      
        <h1>starwars</h1>
        <h2>     {/*this.state.characters.length */ }</h2>
        <ul>list   
   
        {Charaterlist()}
        </ul>

{/*          <div style={divStyl}>{Charaterlist} </div>
       <Character 
          firstname='shelley'
          hairColor='chestnut'
    /> 
   const divStyl= {
      backgroundColor:"lightPink",
      textAlign: "center"
    }
  
  */}
       
        
      </div>  
    )  
  }
}