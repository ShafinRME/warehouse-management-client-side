import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './UpdateInventory.css'

const UpdateInventory = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])
    return (
        <div className='container update-inventory-container'>
            <PageTitle title="Update-Inventory"></PageTitle>
            <img src={inventory.img} alt="" />
            <div className='mt-5'>
                <h2> {inventory.name}</h2>
                <p>{inventory.description}</p>
                <h5 className='text-primary'>Price: {inventory.price}</h5>
                <h5 className='text-info'>Quantity: {inventory.quantity}</h5>
                <h4 className='text-warning'>Supplier: {inventory.supplier}</h4>
                <button>Deliver</button>
            </div>

        </div>
    );
};

export default UpdateInventory;