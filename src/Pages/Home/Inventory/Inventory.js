import React from 'react';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { name, price, description, img, quantity, supplier } = inventory;

    return (
        <div className='inventory-container'>

            <img src={img} alt="" />
            <div className='mt-5'>
                <h2> {name}</h2>
                <p>{description}</p>
                <h5 className='text-primary'>Price: {price}</h5>
                <h5 className='text-info'>Quantity: {quantity}</h5>
                <h4 className='text-warning'>Supplier: {supplier}</h4>
                <button className='inventory-button text-white'>Update</button>
            </div>

        </div>
    );
};

export default Inventory;