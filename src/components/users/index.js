import React from 'react'
import User from './user'

export default class Users extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    firstname: 'Amare',
                    lastname: 'lastname',
                    email: 'amare@gmail.com',
                    isAdmin: false,
                    role: 'guest'
                },
                {
                    firstname: 'Aminata',
                    lastname: 'lastname',
                    email: 'Aminata@gmail.com',
                    isAdmin: false,
                    role: 'guest'
                },
                {
                    firstname: 'Pierre',
                    lastname: 'lastname',
                    email: 'Pierre@gmail.com',
                    isAdmin: false,
                    role: 'guest'
                },
                {
                    firstname: 'Ansy',
                    lastname: 'lastname',
                    email: 'ansy@gmail.com',
                    isAdmin: true,
                    role: 'yoda'
                },
            ],
        }
    }
    handleClick(user){
    //    console.log(e.target)
        //console.log(user)
        let newUserState = this.state.users.map(stateUser => {
            //console.log(stateUser.email)
            if(user.email === stateUser.email){  }
        })


    }
    render() {

        let UsersList = this.state.users.map((user, index) => {
            return (
                <User
                    key={'user-' + index}
                    number={index}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    admin={user.isAdmin}
                    handleClick={() =>this.handleClick(user)}
                />
               
            )
        })

        let firstHalfOfUsers = UsersList.slice(0, UsersList.length / 2);
        let secondHalfOfUsers = UsersList.slice(UsersList.length / 2, UsersList.length);

        let superUser = this.state.users.filter(user => {
            return user.role === 'yoda'
        })

        console.log(superUser);

        return (
            <section>
                <h3>Liste des utilisateurs :</h3>
                <p>First half</p>
                {firstHalfOfUsers}
                <p>Second half</p>
                {secondHalfOfUsers}
                <h1>not SUPER USER !</h1>
                {superUser.map((user)=>{
                    return(
                        <div>
                    
                    <p>{user.firstname}</p>
                    <p>{user.lastname}</p>
                    <p>{user.email}</p>

                   
                    <br/>
                </div>
                    )
                    })
                }
            </section>
        )
    }
}