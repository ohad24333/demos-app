import React from "react";

function Welcome1(props) {
    //JSON OBJ --->  varibles
    // let name = props.name;
    // let id = props.id;
    let { id, name } = props;
    return (
        <>
            <h1>{name}</h1>
            <p>{id}</p>;
        </>);
}

function Welcome2({ id, name }) {
    return (
        <>
            <h1>{name}</h1>
            <p>{id}</p>);
        </>);

}
//-----------------------------------------------------------

let Welcome3 = ({ id, name }) => <h1>id:{id}, name:{name}</h1>;

//-----------------------------------------------------------
let Welcome4 = ({ info: { id, name } }) => <h1>id:{id}, name:{name}</h1>;//No Return usage

//-----------------------------------------------------------------
let Welcome5 = (props) => {
    let { id, name } = props.info;
    return (

        <h1>id:{id}, name:{name} </h1>

    );
};



export { Welcome1, Welcome2, Welcome3, Welcome4, Welcome5 }