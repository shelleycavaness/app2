import React from 'react'
import logo from './logo.svg'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                {/* <img src={logo} alt="logo"/> */}
                <h1>Header</h1>
            </header>
        )
    }
}