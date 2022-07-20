import React from 'react';
import SimplePropsDemo from './01_FuncPropsDemo';
import Garage from './02_Cars';
import { Welcome1, Welcome2, Welcome3, Welcome4, Welcome5 } from './03_Spreding_props';
import User from './04_ClassPropsDemo';
export default function PropsAppDemos() {
    return (
        <>
            {/* <SimplePropsDemo></SimplePropsDemo> */}
            {/* <Garage></Garage> */}
            {/* <Welcome1 id="1" name="user1"></Welcome1>
            <Welcome2 id="1" name="user1"></Welcome2>
            <Welcome3 id="3" name="user3"></Welcome3> */}
            {/* <Welcome4 info={{ id: 4, name: "user4" }}></Welcome4> */}
            {/* <Welcome5 info={{ id: 5, name: "user5" }}></Welcome5> */}
            <User email="gshor@gmail.com" username="gshor" group="admin"></User>
            <User email="sdedg@gmail.com" username="sdedg" group="user"></User>
        </>);
}
