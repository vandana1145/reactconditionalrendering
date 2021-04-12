import React from 'react'


// // if-else condition
// import React, { Component } from 'react'

// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome Vandana</h1>
//                 <button>Logout</button>
//             </div>
//         )
//     }
// }


// && operator
const User = (props) => {
    return (
        <React.Fragment>
            <h1>You are a Prime Member</h1>
            <h2>Enjoy!</h2>
            <button type="submit" onClick={props.clickData}>Logout</button>
        </React.Fragment>
    )
}


export default User;

