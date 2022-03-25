import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {
    let { selectedProduct,randomMenuGenerator,choseAgain } = props;

    return (
        <div className='cart'>
            <h1>Selected Foods {selectedProduct.length}</h1>
            <div className="items">
                {
                    selectedProduct.map(item =><CartItem key={item.id} item={item}></CartItem>)
                }
            </div>
            <button onClick={() => randomMenuGenerator(selectedProduct)}>CHOOSE 1 FOR ME</button><br />
            <button onClick={choseAgain}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;