import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { id, name, price, description, img, quantity, supplier } = inventory;

    const navigate = useNavigate();
    const navigateToUpdateInventory = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='inventory-container'>

            <img src={img} alt="" />
            <div className='mt-5'>
                <h2> {name}</h2>
                <p>{description}</p>
                <h5 className='text-primary'>Price: {price}</h5>
                <h5 className='text-info'>Quantity: {quantity}</h5>
                <h4 className='text-warning'>Supplier: {supplier}</h4>
                <button onClick={() => navigateToUpdateInventory(id)} className='inventory-button text-white'>Update</button>
            </div>

        </div>
    );
};

export default Inventory;