import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './bootstrap.min.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Layout from './Pages/Layout';
import NotFound from './Pages/NotFound';
import Invoice from './Pages/Invoice';
import App2 from './App2';
export default function App1() {
    return (
        <>
            <BrowserRouter>


                <Routes>
                    {/* LAYOUT IS THE TEMPLATE */}
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Page1 />} />
                        <Route path='p1' element={<Page1 />} />
                        <Route path='p2' element={<Page2 />} />
                        <Route path='p3' element={<Page3 />} />
                        <Route path='page3' element={<Page3 />} />
                        <Route path='invoices' >
                            <Route path=':invoiceId' element={<Invoice />} />
                        </Route>

                        <Route path='*' element={<NotFound />} />

                    </Route >
                </Routes>




            </BrowserRouter>
        </>

    );
}

