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
                    superUser: false,
                    role: 'admin'
                },
                {
                    firstname: 'Aminata',
                    lastname: 'lastname',
                    email: 'Aminata@gmail.com',
                    superUser: false,
                    role: 'guest'
                },
                {
                    firstname: 'Pierre',
                    lastname: 'lastname',
                    email: 'Pierre@gmail.com',
                    superUser: false,
                    role: 'guest'
                },
                {
                    firstname: 'Ansy',
                    lastname: 'lastname',
                    email: 'ansy@gmail.com',
                    superUser: true,
                    role: 'admin'
                },
            ],
        }
    }


    handleClick(user) {

        console.log(this.state.users);

        let newUserState = this.state.users.slice().map(stateUser => {
            stateUser.superUser = false
            if (user.email === stateUser.email) {
                stateUser.superUser = true;
            }

            return stateUser
        })

        this.setState({
            users: newUserState
        })

    }






    // handleClick(e, user) {
    //     console.log(e.target);  
    //     console.log('user clicked', user);

    //     let userState = this.state.users;

    //     let newUserState = this.state.users.map(stateUser => {

    //         stateUser.superUser = false;
    //         if (stateUser.email === user.email) {
    //             console.log('same user :', stateUser.email)
    //             stateUser.superUser = true;
    //         }
    //         return stateUser
    //     })
    //     console.log('new users state :', newUserState);

    //     this.setState({
    //         users:newUserState
    //     })
    // }

    render() {

        let UsersList = this.state.users.map((user, index) => {
            return (
                <User
                    key={'user-' + index}
                    number={index}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    superUser={user.superUser}
                />
            )
        })

        let firstHalfOfUsers = UsersList.slice(0, UsersList.length / 2);
        let secondHalfOfUsers = UsersList.slice(UsersList.length / 2, UsersList.length);

        let superUser = this.state.users.find(user => {
            return user.superUser
        })

        let adminUsers = this.state.users.filter(user => {
            return (user.role === 'admin')
        })

        let guestUsers = this.state.users.filter(user => {
            return (user.role === 'guest')
        })

        adminUsers = adminUsers.map((user, index) => {
            return (
                <User
                    key={'user-' + index}
                    number={index}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    role={user.role}
                    superUser={user.superUser}
                    handleClick={() => this.handleClick(user)}
                />
            )
        })

        guestUsers = guestUsers.map((user, index) => {
            return (
                <User
                    key={'user-' + index}
                    number={index}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    role={user.role}
                    superUser={user.superUser}
                    handleClick={() => this.handleClick(user)}
                />
            )
        })
        return (
            <section>
                <h3>Liste des utilisateurs :</h3>
                <p>Admin users</p>
                {adminUsers}
                <p>Guest users</p>
                {guestUsers}

                {superUser && (<div>
                    <h1>SUPER USER !</h1>
                    <p>{superUser.firstname}</p>
                    <p>{superUser.lastname}</p>
                    <p>{superUser.email}</p>
                </div>)}
            </section>
        )
    }
}