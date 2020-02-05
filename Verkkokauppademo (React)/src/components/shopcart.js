import React from 'react';
import '../App.css';

const ShoppingCart = ({myProducts}) => {
    const amounts = myProducts.map(products=> products.amount * products.price);
    const total = amounts.reduce((a, b) => a + b, 0);
}


export default ShoppingCart;