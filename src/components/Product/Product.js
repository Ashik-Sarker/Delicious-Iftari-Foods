import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, img, price } = props.product;
    return (
        <div className='product'>
            <img src={img}></img>
            <div className='text-area'>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
            </div>
            <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;