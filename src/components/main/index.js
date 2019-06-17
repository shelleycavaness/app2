import React from 'react'

import Users from '../users/'
import Players from '../players/'
import Starwars from '../starwars'
import './main.css'


export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            submit: false,
            errorMessage: '',
        }
    }

    handleUsernameOnChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordOnChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            submit: true
        })

        setTimeout(() => {
            this.setState({
                submit: false
            })
        }, 1000)
    }

    render() {
      return (
        <main>
        {/* 
          <Players  
            name={"coco"}
          />  */  }
          <Starwars    />
        </main>
        )
    }
}
