import React from "react";

//---Class Components---
export default class Car extends React.Component {
    constructor(props) {
        super(props);
        //--01 Define State in Constructor---
        this.state = { brand: "Ford", model: "4fx", color: "black", year: 2021 };
    }


    chageColor = () => {
        // -- 03 Change State in events/Other menthods using setState---- 
        this.setState({ color: "red", year: this.state.year + 1 });
    }


    render() {
        return (
            <div>
                <h2>{this.props.username}</h2>
                {/* --02 Use Stat in Rendering  UI-- */}
                <h2>{this.state.color}</h2>
                <p>s
                    Brand: {this.state.brand}
                    <br />
                    Year: {this.state.year}
                </p>
                <button onClick={() => this.chageColor()}>change state</button>
            </div>);
    }

}
