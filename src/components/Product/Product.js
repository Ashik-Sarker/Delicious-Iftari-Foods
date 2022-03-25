import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price } = props.product;
    const { addProductToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="Foods"/>
            <div className='text-area'>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
            </div>
            <button className='cart-btn'  
                onClick={() => addProductToCart(props.product)}
            ><p>Add To Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;