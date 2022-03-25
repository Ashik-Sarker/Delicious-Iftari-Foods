import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    // console.log(selectedProduct);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const addProductToCart = pro => {
        const newProduct = [...selectedProduct, pro];
        setSelectedProduct(newProduct);
        // console.log(newProduct);
    }

    const randomMenuGenerator = (arr) => {
        const res = arr[Math.floor(Math.random() * arr.length)];
        setSelectedProduct([res]);
        // alert("this is for You " + " " + res.name)
    }
    const choseAgain = () => {
        setSelectedProduct([]);
    }

    return (
        <div className='shop-area'>
            <div className="product-area">
                <p>Here is our Food Items</p>
                <div className="products">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addProductToCart={addProductToCart}
                        ></Product>)
                    }
                </div>

            </div>

            <div className="cart-area">
                <Cart
                    selectedProduct={selectedProduct}
                    randomMenuGenerator={randomMenuGenerator}
                    choseAgain = {choseAgain}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;