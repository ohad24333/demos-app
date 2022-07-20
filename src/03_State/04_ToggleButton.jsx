import React from "react";

// <ToggleButton togggleText="ON"  />
// <ToggleButtonS count:10  />
export default class ToggleButton extends React.Component {
    constructor(props) {
        super(props);// ON/OFF
        let btnObjText = this.props.toggleText;
        this.state = { toggleText: btnObjText };

    }

    toggle = (e) => {
        let newTextTogle = (this.state.toggleText == "OFF") ? "ON" : "OFF";
        this.setState({ toggleText: newTextTogle });
    }

    getStyleByMode(mode) {
        let styleMode = (mode === "OFF") ?
            { backgroundColor: "pink" }
            :
            { backgroundColor: "lightgreen", border: "1px solid grey" };
        return styleMode;
    }

    render() {

        //CODE
        let styleMode = this.getStyleByMode(this.state.toggleText);
        return (
            <button onClick={this.toggle} style={styleMode}>
                {this.state.toggleText}
            </button>
        );

    }
}