import React, { StrictMode } from 'react';
import HomePage from './Pages/HomePage';
import { SimpleFuncCompA, SimpleFuncCompB } from './01_FuncComp';


//--Component that is Composed of other Components
function MyCompositeComponent() {
    return (
        <React.Fragment>
            <h1>List Of Component:</h1>
            <br />
            <hr></hr>
            <SimpleFuncCompA />
            <hr></hr>

            <SimpleFuncCompA />
            <hr></hr>
            <SimpleFuncCompB />
            <hr />

        </React.Fragment>);

}


let WebSite = () => {
    return <HomePage></HomePage>
}

export { WebSite, MyCompositeComponent }

