import React, { Component } from 'react'
import RowItemCategory from './rowItemCategory'
import RowItemProduct from './rowItemProduct'


export default class ProductsTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        if(this.props.sortBy === 'Name') {
            this.props.products.sort((a, b) => a.name > b.name ? 1 : -1);
        }
        if(this.props.sortBy === 'Price'){
            this.props.products.sort((a, b) => {
                let aPrice = parseFloat(a.price.substring(1));
                let bPrice = parseFloat(b.price.substring(1));
                return  bPrice - aPrice;
            });
            
        }

      
        this.props.products.forEach((product) => {
            //FILTER IF filterText in json Name Object
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (this.props.categoryFilter !== '' && this.props.categoryFilter !== product.category) {
                return;
            }
            if (product.category !== lastCategory && this.props.sortBy === '') {
                rows.push(
                    <RowItemCategory
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <RowItemProduct
                    product={product}
                    onDeleteProduct={this.props.onDeleteProduct}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });

        

        return (
            <table className="table" style={{ border: "1px solid green" }}>
                <thead>
                    <tr class="table-dark" >
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
