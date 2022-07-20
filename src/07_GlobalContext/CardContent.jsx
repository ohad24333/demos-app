import React, { useContext } from "react";
import { AuthContext } from "./GlobalContexts";

export default function CardContent() {

    const auth = useContext(AuthContext);
    let content = <h4 className="card-title">Not Authenticate</h4>
    let styleColor = "bg-danger";

    if (auth.status) {
        styleColor = "bg-success";
        content =
            <>
                <h4 className="card-title">Log-in</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </>
    }

    return (


        <>

            <div className={`card text-white ${styleColor} mb-3`} style={{ maxWidth: "20rem" }} >
                {content}
            </div>
        </>
    );
}