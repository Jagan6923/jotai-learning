import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { productListAtom } from '../atom/ProductAtoms';

const AddProductForm = () => {
    // Using Jotai to manage global state for product list
    // productListAtom is an atom that holds the list of products that can be shared across components

    // useAtom is a hook that allows you to read and write to the atom 
    //      - if you want just read the value, you can use the useAtomValue hook
    //
    // products is the current state of the product list
    // setProducts is a function to update the product list
    // useState is a React hook to manage local state for the form inputs
    const [products, setProducts] = useAtom(productListAtom);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        // Validate the inputs before adding a new product
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
