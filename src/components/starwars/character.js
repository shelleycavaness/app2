import React from 'react';

export default function(props){
  console.log(props +" you found me")
  return(
    <div>
      <p> name:  {props.firstname}  </p>
      <p> Hair:  {props.hairColor}  </p>

    </div>
     
  )
}