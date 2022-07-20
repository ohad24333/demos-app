import React from 'react';

//--Function Component Example
function SimpleFuncCompA() {
    return (
        <h2>SimpleFuncCompA Component Rendered ...</h2>
    );
}

//--Function Component Example
function SimpleFuncCompB() {
    return (
        // <React.Fragment>
        <>
            <h2> SimpleFuncCompB Component Rendered ...</h2>
            <p>CompB  ...</p>
            <p>CompB  ...</p>
        </>
        //</React.Fragment>
    );
}
export { SimpleFuncCompA, SimpleFuncCompB }
