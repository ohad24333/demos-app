import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App2Layout from './App2Layout';
import Expenses from './Components/Expenses';
import Invoices from './Components/Invoices'
import Invoice from './Components/Invoice';

export default function App2() {
    return (
        <BrowserRouter>
            <Routes>
                {/* -- ROOT ROUTE with templated outlet in App2Layout for its children  */}
                <Route path="/" element={<App2Layout ></App2Layout>}>
                    <Route path="expenses" element={<Expenses />} />
                    {/* --invoices is also Templated with outlet in Invoices for its inner Invoice */}
                    <Route path="invoices" element={<Invoices />}>
                        {/* DEFAULT ROUTE WHEN NO invoiceId presented   */}
                        <Route
                            index
                            // main is standart HTML tag 
                            element={
                                < main style={{ padding: '1rem' }}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        {/* Nested ROUTE  */}
                        <Route path=":invoiceId" element={<Invoice />} />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}



