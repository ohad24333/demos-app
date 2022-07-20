import React, { useState } from "react";
import Auth from "./Auth";
import { AuthContext } from "./GlobalContexts";
import CardContent from "./CardContent";

const Login = () => {
    //using the state to dynamicallly pass the values to the context
    const [authstatus, setauthstatus] = useState(false);

    const login = () => {

        setauthstatus(!authstatus);
    };
    return (
        <>
            {/* Set Global State (state+state changed method) in root Component */}
            <AuthContext.Provider value={{ status: authstatus, login: login }}>
                <Auth />
                <h1 />
                <h1>Other Component:</h1>
                <CardContent />
            </AuthContext.Provider>
        </>
    );
};
export default Login;
