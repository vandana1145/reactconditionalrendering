import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'

// // if condition
// export default class App extends Component {
//   render() {
//     const isRegistered = this.props.register;
//     if(isRegistered) {
//       return <User />;
//     }
//     return <Guest />;
//   }
// }


// // && operator
// const App = (props) => {
//     const primeMember = props.primeMember
//     return (
//         <React.Fragment>
//           <h1>Welcome to Amazon</h1>
//           {primeMember && <User/>}
//         </React.Fragment>
//     )
// }


// if-else statement
export default class App extends Component {
  state = {
    isLoggedIn: false,
  };

  clickLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  clickLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  // render() {
  //   const isLoggedIn = this.state.isLoggedIn;
  //   let status;
  //   if(isLoggedIn){
  //     status=  <User clickData={this.clickLogout}/>;
  //   } else{
  //     status = <Guest clickData={this.clickLogin}/>;
  //   }
  //   return(
  //     <div>{status}</div>
  //   )
  // };

  // in-line if-else with conditional operator - ternary operator
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {/* ternary operator inside jsx */}
        {isLoggedIn ? (
          <User clickData={this.clickLogout} />
        ) : (
          <Guest clickData={this.clickLogin} />
        )}
      </div>
    );
  }
}



