import React from "react";

class Example extends React.Component {
    render() {
        return <div>
            <div>Children ({this.props.children.length}):</div>
            {this.props.children}
        </div>;
    }
}
//--------------------------

export default class Widget extends React.Component {
    render() {
        return <div>
            <div>First <code>Example</code>:</div>
            <Example>
                {/* props.children */}
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Example>
            <div>Second <code>Example</code> with different children:</div>
            <Example>
                {/* props.children */}
                <div>A</div>
                <div>B</div>
            </Example>
        </div>;
    }
}

//-------------------------------