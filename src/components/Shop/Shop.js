import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-area'>
            <div className="product-area">
                <p>Here is our Food Items</p>
                <div className="products">
                    {
                    products.map(product => <Product key = {product.id} product = {product}></Product>)
                    }
                </div>

            </div>

            <div className="cart-area">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;