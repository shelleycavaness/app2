import React from 'react';
import Character from './character'

export default class Starwars extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    // isLoading: true, 
     characters: [
        { name: 'Amare',
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
        },
     ]
    }
  }  
  // componentDidMount() {
    //console.log('Our component Starwars did mount')
    // let apiUrl='https://swapi.co/api/people/?results=10'
    // fetch(apiUrl)
      // .then(response => response.json())
    /* .then((resp)=>{
      //console.log(resp.json())
     return resp.json()
    }) */
    // .then(json => console.log(json.results[0]))
    // .then(data => {
      // console.log(data)
      //console.log(json.results[3].name)
      //console.log(json.results[2].name + "************")
    // })
    // .catch((err) =>{
      // console.log(err)
    // }) 
// }

  render(){
    let Charaterlist = this.state.characters.map((character,index) =>{
      return (
        <Character
          key={'character-  ' +index}
          firstname ={character.name}
          hairColor= {character.hair_color}
        />
      )  

    }) 

    console.log(Charaterlist)
    return(
      <div>
      
        <h1>starwars</h1>
        <h3>list</h3>
        <Character />
        <div>{Charaterlist} </div>
      </div>  
    )  
  }
}