import React, { Component } from 'react'

export default class RowItemProduct extends React.Component {
    
  
    constructor(props) {
        super(props)
    }

    render() {
        const product = this.props.product;
        let styleStocked = product.stocked ? { color: "black" } : { color: "red", textDecoration: "line-through" };

        return (
            <tr className="table-active"  >
                <td style={styleStocked}>{product.name}</td>
                <td>{product.price}
                {
                    !product.stocked ? 
                    <>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.handleDelete}>Delete</button>
                    </>
                    :
                    <></>
                }
                </td>
            </tr>
        );
    }

    handleDelete = () => {
        this.props.onDeleteProduct(this.props.product);
    }
}