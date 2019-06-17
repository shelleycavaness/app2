import React from 'react'

export default function (props) {

    let userClassName = 'user';

    if (props.role === 'admin') {
        userClassName += ' admin';
    } else if (props.role === 'guest') {
        userClassName += ' guest';
    }

    return (
        <div className={userClassName}>
            <hr></hr>
            <p><strong>Utilisateur number : </strong>{props.number + 1}</p>
            <p><strong>firstname :</strong> {props.firstname}</p>
            <p><strong>lastname : </strong>{props.lastname}</p>
            <p><strong>Email : </strong>{props.email}</p>
            <p><strong>role : </strong>{props.role}</p>
            <button className="btn btn-primary" onClick={props.handleClick}>
                Become an admin
            </button>
            <hr></hr>
        </div>
    )
}