import React, { useContext, useState } from 'react';
import userinfoContext from '../Contexts/userInfoContext';

export default function Page1() {

    //02 Get Global state
    const { user, setUser } = useContext(userinfoContext);
    const [editUser, setEditUser] = useState("");
    return (
        <>
            <div className="alert alert-dismissible alert-success">
                <h1>{user.userName}</h1>
                <input type="text" value={editUser} onChange={(e) => setEditUser(e.target.value)} ></input>

                <br></br>
                <button onClick={() => setUser({ userName: editUser })} type="button">Change User In All Components</button>
                <h4 className="alert-heading">Warning!</h4>
                <p className="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" className="alert-link">vel scelerisque nisl consectetur et</a>.</p>
            </div>
        </>

    );

}