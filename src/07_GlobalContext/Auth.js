import React, { useContext } from "react";
import { AuthContext } from "./GlobalContexts";

const Auth = () => {
    // Now all the data stored in the context can
    // be accessed with the auth variable
    const auth = useContext(AuthContext);
    console.log(auth.status);
    return (
        <div>
            <h1>Are you authenticated?</h1>
            {auth.status ?

                <h2>Yes,you are Authenticate now</h2>

                :

                <h2>No,you are Logout</h2>


            }

            <button onClick={auth.login}>Toggle Login</button>
        </div>
    );
};
export default Auth;
