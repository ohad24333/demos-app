import React from 'react';
import FilteredProductList from '../../04_EventsAndForms/ProductsDemo/filteredProductList'
export default function Page3() {
    return (
        <>
            <div className="alert alert-dismissible alert-info">
                <h1>Products</h1>
                <FilteredProductList></FilteredProductList>
            </div>
        </>

    );

}