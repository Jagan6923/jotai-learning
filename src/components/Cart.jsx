import React from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from '../atom/ProductAtoms';

const Cart = () => {
    const [cart] = useAtom(cartAtom);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div >
            <h2> Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul >
                    {cart.map(item => (
                        <li key={item.id} >
                            <span>{item.name} × {item.quantity}</span>
                            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
            <div >Total: ₹{total.toFixed(2)}</div>
        </div>
    );
};

export default Cart;
