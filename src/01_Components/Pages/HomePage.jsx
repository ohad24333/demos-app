import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Content1 from "../Components/Content1";
import Content2 from "../Components/Content2";
import "./style.css";


export default function HomePage() {
    return (
        <>
            <Header />
            <Content1 />
            <Content2 />

            <Footer />
        </>
    );
}