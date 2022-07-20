import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";
import userinfoContext from '../Contexts/userInfoContext';

//TEMPLATE OF THE APP
export default function Layout() {

    const [user, setUser] = useState({ userName: "gshor", id: 1 });

    return (
        <div className='container'>
            <h1>WEB SITE TITLE</h1>
            <nav style={{ backgroundColor: 'lightblue', textAlign: "center" }} >
                {/* //<a href=></> */}
                <Link style={{ fontSize: "20px" }} to="/p1">Page 1</Link>
                &nbsp; &nbsp;
                <Link style={{ fontSize: "20px" }} to="/p2">Page 2</Link>
                &nbsp; &nbsp;
                <Link style={{ fontSize: "20px" }} to="/p3">Page 3</Link>

            </nav>
            <br />
            {/* 02 Expose Global State */}
            <userinfoContext.Provider value={{ user, setUser }}>
                <Outlet />
            </userinfoContext.Provider>
        </div >
    );




}