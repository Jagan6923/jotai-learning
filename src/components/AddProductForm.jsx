import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { productListAtom } from '../atom/ProductAtoms';

const AddProductForm = () => {
    const [products, setProducts] = useAtom(productListAtom);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  
        if (!name || !price) return;
        const newProduct = {
            id: Date.now(),
            name,
            price: parseFloat(price),
        };
        setProducts([...products, newProduct]);
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <h2 > Add New Product</h2>
            <input
                type="text"
                placeholder="Enter Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit" >
                Add
            </button>
        </form>
    );
};

export default AddProductForm;
