import React from "react";
import './dialog.css'
//--Depth 03 
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

//---Depth 02---
function Dialog(props) {
    return (
        // FancyBorder is template Container - all its tag content is sent as props.children
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {/* current Dialog props.children sent  into FancyBorder props.children */}
            {props.children}
        </FancyBorder>
    );
}

//---Depth 01 - Sign Up Dialog----
export default class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' };
    }

    render() {
        return (
            //--Dialog is template container - al its tag content is sent as props.children 
            <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
                {/* children inside Dialog */}
                <h4>Dialog Template</h4>
                {/* Event Refernce(onChange) is Kept when sent into Dialog */}
                <input value={this.state.login}
                    onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>)
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }


}

