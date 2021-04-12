import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Guest</h1>
                <button type="submit" onClick={this.props.clickData}>Login</button>
                <br />
                <br />
                <button>SignUp</button>
            </div>
        )
    };
}
