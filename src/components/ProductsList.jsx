import React from 'react';
import { useAtom } from 'jotai';
import { productListAtom, cartAtom } from '../atom/ProductAtoms';

const ProductList = () => {
    const [products] = useAtom(productListAtom);
    const [cart, setCart] = useAtom(cartAtom);

    const addToCart = (product) => {
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div >
            <h2 >Product List</h2>
            {products.length === 0 && <p>No products added yet.</p>}
            <ul >
                {products.map(product => (
                    <li key={product.id} >
                        <span>{product.name} - ₹{product.price}</span>
                        <button
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
