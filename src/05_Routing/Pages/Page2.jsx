import React, { useContext } from 'react';
import userinfoContext from '../Contexts/userInfoContext';

export default function Page2() {

    const { user, setUser } = useContext(userinfoContext);
    return (
        <>
            <div className="alert alert-dismissible alert-warning">
                <h1>{user.userName}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <h4 className="alert-heading">Page 02..</h4>
                <p className="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" className="alert-link">vel scelerisque nisl consectetur et</a>.</p>
            </div>
        </>

    );

}