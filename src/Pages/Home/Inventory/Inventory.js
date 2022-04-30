import React from 'react';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { name, price, description, img, quantity, supplier } = inventory;

    return (
        <div>
            <h2>Name : {name}</h2>
        </div>
    );
};

export default Inventory;