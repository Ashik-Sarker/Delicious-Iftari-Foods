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
        const found = selectedProduct.find(element => element.id === pro.id);
        if (found) {
            console.log("alert");
            alert("You already select this item");
        }
        else if (selectedProduct.length >= 4) {
            alert("You already select 4 item");
        }
        else {  
            const newProduct = [...selectedProduct, pro];
            setSelectedProduct(newProduct);
        }
    }

    const randomMenuGenerator = (arr) => {
        const res = arr[Math.floor(Math.random() * arr.length)];
        setSelectedProduct([res]);
        console.log(res);
        // alert("this is for You " + " " + res.name)
    }

    const choseAgain = () => {
        setSelectedProduct([]);
    }

    const deleteItem = (item) => {
        console.log("its calling");

        const findingItem = selectedProduct.filter(p => p.id !== item.id);
        setSelectedProduct(findingItem);
        console.log(findingItem);
    }

    return (
        <div className='shop-area'>
            <div className="product-area">
                <p>Popular Food Items</p>
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
                    choseAgain={choseAgain}
                    deleteItem = {deleteItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;