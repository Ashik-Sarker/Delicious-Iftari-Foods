import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    // console.log(props.item);
    const { img, name, price } = props.item;
    return (
        <div className='cartItem'>
            <p>{name}</p>
            <img src={img} alt="images" />
            <button><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button>
        </div>
    );
};

export default CartItem;