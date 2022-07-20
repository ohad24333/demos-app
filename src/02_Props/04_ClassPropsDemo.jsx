import React from "react";


//---Class Components---
export default class User extends React.Component {
    constructor(props) {
        super(props);
        //--->Can Use Props Here in initialization Methods
    }

    //ADD A BUTTON THAT CHANEGE the COLOR----
    render() {
        return (

            <div style={{ margin: "10px", padding: "10px", border: "1px solid grey" }}>
                <h2>{this.props.username}</h2>

                <p>
                    Email: {this.props.email}
                    <br />
                    Group: {this.props.group}
                </p>

            </div>);
    }



}
